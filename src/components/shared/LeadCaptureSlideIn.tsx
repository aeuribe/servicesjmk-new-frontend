"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { Turnstile } from "@marsidev/react-turnstile";

/**
 * Slide-in de captura de leads
 *
 * Uso: importar y colocar una sola vez en el layout raíz, junto al
 * WhatsAppFloatingButton, dentro de <NextIntlClientProvider>.
 *
 *   import LeadCaptureSlideIn from "@/components/LeadCaptureSlideIn";
 *   ...
 *   <NextIntlClientProvider locale={locale}>
 *     {children}
 *     <PipedriveChat key={locale} />  // si sigue activo
 *     <WhatsAppFloatingButton />
 *     <LeadCaptureSlideIn />
 *   </NextIntlClientProvider>
 *
 * Comportamiento:
 * - Aparece cuando ocurra primero: SCROLL_TRIGGER_PERCENT de scroll,
 *   o TIME_TRIGGER_MS de tiempo en la página.
 * - Se muestra una sola vez por sesión (sessionStorage) — no molesta
 *   si el usuario navega entre Home/Services/About en la misma visita.
 * - Reutiliza el mismo endpoint y token de Turnstile que /contact.
 */

const SCROLL_TRIGGER_PERCENT = 45;
const TIME_TRIGGER_MS = 9000;
const SESSION_KEY = "jmk_lead_slidein_shown";

const ENDPOINT = "https://servicesjmk-backend.onrender.com/enviar-correo-services";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function LeadCaptureSlideIn() {
  const t = useTranslations("leadCapture");

  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const triggeredRef = useRef(false);

  const triggerOpen = useCallback(() => {
    if (triggeredRef.current) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    triggeredRef.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setShouldRender(true);
    // deja un frame para que la transición de entrada corra
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timeTimer = setTimeout(triggerOpen, TIME_TRIGGER_MS);

    const handleScroll = () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrolled >= SCROLL_TRIGGER_PERCENT) {
        triggerOpen();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsMinimized(true), 350);
  };

  const handleReopen = () => {
    setIsMinimized(false);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const validate = (data: FormState) => {
    const newErrors: Partial<FormState> = {};
    if (!data.name.trim()) {
      newErrors.name = t("errors.nameRequired");
    }
    if (!data.phone.trim()) {
      newErrors.phone = t("errors.phoneRequired");
    }
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = t("errors.emailInvalid");
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!turnstileToken) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const combinedMessage = [
      `Teléfono: ${formData.phone}`,
      formData.message.trim()
        ? `Mensaje: ${formData.message.trim()}`
        : "Mensaje: (no especificado)",
    ].join("\n");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email || "no-proporcionado@servicesjmk.com",
          company: "No especificada (widget rápido)",
          project_type: "Consulta rápida (widget)",
          message: combinedMessage,
          token: turnstileToken,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!shouldRender) return null;

  if (isMinimized) {
    return (
      <>
        <button
          type="button"
          onClick={handleReopen}
          aria-label={t("reopen")}
          className="lead-tab"
          style={{
            position: "fixed",
            left: 0,
            bottom: "20px",
            zIndex: 9998,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.12)",
            borderLeft: "none",
            width: "46px",
            height: "46px",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0 12px 12px 0",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            animation: "lead-tab-in 0.3s ease",
          }}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z"
              stroke="#fff"
              strokeWidth="1.6"
            />
            <path
              d="M4 6.5L12 12.5L20 6.5"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <style jsx>{`
          @keyframes lead-tab-in {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .lead-tab {
            background: rgba(20, 20, 20, 0.55);
            backdrop-filter: blur(6px);
            transition: background 0.25s ease;
          }
          .lead-tab:hover {
            background: #2563eb;
          }
        `}</style>
      </>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: 9998,
        width: "min(340px, calc(100vw - 40px))",
        opacity: isOpen ? 1 : 0,
        transform: isOpen
          ? "translateY(0) scale(1)"
          : "translateY(16px) scale(0.97)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
      className="lead-slidein"
    >
      <div
        style={{
          background: "rgba(20, 20, 20, 0.92)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.12)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 88% 100%, 0 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          padding: "20px 22px 22px",
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label={t("close")}
          style={{
            position: "absolute",
            top: "10px",
            right: "14px",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.6)",
            fontSize: "18px",
            cursor: "pointer",
            lineHeight: 1,
            padding: "4px",
          }}
        >
          ✕
        </button>

        {status === "success" ? (
          <div style={{ padding: "8px 0" }}>
            <p
              style={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: 500,
                margin: "0 0 6px",
              }}
            >
              {t("success.title")}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "13px",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t("success.subtitle")}
            </p>
          </div>
        ) : (
          <>
            <p
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
                margin: "0 0 4px",
                paddingRight: "20px",
              }}
            >
              {t("title")}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "12.5px",
                margin: "0 0 16px",
                lineHeight: 1.5,
              }}
            >
              {t("subtitle")}
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("fields.namePlaceholder")}
                  style={inputStyle(!!errors.name)}
                />
                {errors.name && <FieldError text={errors.name} />}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("fields.phonePlaceholder")}
                  style={inputStyle(!!errors.phone)}
                />
                {errors.phone && <FieldError text={errors.phone} />}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("fields.emailPlaceholder")}
                  style={inputStyle(!!errors.email)}
                />
                {errors.email && <FieldError text={errors.email} />}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("fields.messagePlaceholder")}
                rows={2}
                style={{ ...inputStyle(false), resize: "none" }}
              />

              <div style={{ transform: "scale(0.9)", transformOrigin: "left" }}>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken("")}
                  onExpire={() => setTurnstileToken("")}
                  options={{ theme: "dark", size: "compact" }}
                />
              </div>

              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: "12px", margin: 0 }}>
                  {t("errors.submitFailed")}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !turnstileToken}
                style={{
                  marginTop: "4px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "10px 16px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  cursor:
                    status === "loading" || !turnstileToken
                      ? "not-allowed"
                      : "pointer",
                  opacity: status === "loading" || !turnstileToken ? 0.6 : 1,
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%)",
                }}
              >
                {status === "loading" ? t("submit.loading") : t("submit.label")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FieldError({ text }: { text: string }) {
  return (
    <p style={{ color: "#f87171", fontSize: "11px", margin: "3px 0 0" }}>
      {text}
    </p>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${hasError ? "#f87171" : "rgba(255,255,255,0.15)"}`,
    color: "#fff",
    fontSize: "13px",
    padding: "9px 12px",
    outline: "none",
  };
}