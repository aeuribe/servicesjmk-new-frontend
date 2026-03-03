"use client";

import React from "react";
import { LegalPageLayout, LegalSection } from "./LegalPageLayout";
import { useLocale } from "next-intl";

export default function PrivacyPage() {
  const locale = useLocale();
  const isSpanish = locale === "es";

  if (isSpanish) {
    return (
      <LegalPageLayout title="POLÍTICA DE PRIVACIDAD (Español)" lastUpdated="Última Actualización: 3 de marzo de 2026">
        <LegalSection title="1. Introducción">
          <p>
            Services JMK (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;nuestra&quot;) respeta su privacidad. Esta
            Política de Privacidad explica cómo recopilamos, utilizamos y salvaguardamos su información cuando visita
            nuestro sitio web en www.servicesjmk.com (el &quot;Sitio Web&quot;) y se comunica con nosotros.
          </p>
        </LegalSection>

        <LegalSection title="2. Información que Recopilamos">
          <p>Recopilamos dos tipos de información cuando utiliza nuestro Sitio Web:</p>
          <p className="mt-3">
            <span className="font-semibold">Información que Usted Proporciona:</span> Cuando se comunica con nosotros a
            través del formulario de contacto en nuestro Sitio Web, usted nos proporciona voluntariamente su Nombre
            Completo, Dirección de Correo Electrónico, Número de Teléfono y Nombre de la Empresa.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Datos de Uso y Analíticas:</span> Cuando visita nuestro Sitio Web,
            recopilamos automáticamente cierta información sobre su dispositivo y su interacción con el Sitio Web a
            través de Vercel Web Analytics y Vercel Speed Insights. Esta información no lo identifica personalmente e
            incluye datos como su tipo de navegador, sistema operativo, páginas visitadas y métricas de rendimiento del
            sitio web.
          </p>
        </LegalSection>

        <LegalSection title="3. Cómo Utilizamos Su Información">
          <p>Utilizamos la información que recopilamos exclusivamente para los siguientes fines:</p>
          <ul className="list-disc pl-6 space-y-1 text-white/75 mt-3">
            <li>
              Para responder a sus consultas, contestar sus preguntas y comunicarnos con usted con respecto a nuestros
              servicios industriales y de ingeniería.
            </li>
            <li>
              Para monitorear y mejorar el rendimiento, la velocidad y la experiencia general del usuario de nuestro
              Sitio Web utilizando datos analíticos agregados.
            </li>
          </ul>
          <p className="mt-3">
            No utilizamos su información personal para enviar campañas de marketing automatizadas, boletines
            informativos ni ninguna otra comunicación no solicitada.
          </p>
        </LegalSection>

        <LegalSection title="4. Compartir y Divulgar Información">
          <p>
            Estamos comprometidos a mantener la privacidad de sus datos. No vendemos, intercambiamos, alquilamos ni
            compartimos de ninguna otra manera su información personal con terceros. La información que envía es
            utilizada estrictamente a nivel interno por el equipo de Services JMK. Los datos analíticos son procesados
            de forma segura por nuestro proveedor de alojamiento (Vercel) con el único fin de proporcionar información
            sobre el rendimiento del sitio web.
          </p>
        </LegalSection>

        <LegalSection title="5. Seguridad de los Datos">
          <p>
            Implementamos medidas de seguridad administrativas y técnicas razonables para proteger la información
            personal que envía a través de nuestro Sitio Web. Sin embargo, comprenda que ninguna transmisión electrónica
            de datos a través de Internet puede garantizarse como 100% segura.
          </p>
        </LegalSection>

        <LegalSection title="6. Retención de Datos">
          <p>
            Retenemos su información personal solo durante el tiempo que sea necesario para cumplir con los fines
            descritos en esta Política de Privacidad (es decir, para mantener la comunicación con usted con respecto a
            su consulta y posible relación comercial).
          </p>
        </LegalSection>

        <LegalSection title="7. Sus Derechos">
          <p>
            Dependiendo de su jurisdicción, puede tener derecho a acceder, corregir o solicitar la eliminación de la
            información personal que nos ha proporcionado. Si desea ejercer alguno de estos derechos, comuníquese con
            nosotros utilizando la información que se proporciona a continuación.
          </p>
        </LegalSection>

        <LegalSection title="8. Cambios a esta Política de Privacidad">
          <p>
            Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas
            o por otras razones operativas, legales o reglamentarias. Cualquier cambio se publicará en esta página con
            una fecha actualizada de &quot;Última Actualización&quot;.
          </p>
        </LegalSection>

        <LegalSection title="9. Contáctenos">
          <p>
            Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de datos,
            comuníquese con nosotros a:
          </p>
          <p className="mt-3">
            <a href="mailto:info@servicesjmk.com" className="text-[#2563eb] hover:underline font-medium">
              info@servicesjmk.com
            </a>
          </p>
        </LegalSection>
      </LegalPageLayout>
    );
  }

  return (
    <LegalPageLayout title="PRIVACY POLICY (English)" lastUpdated="Last Updated: March 3, 2026">
      <LegalSection title="1. Introduction">
        <p>
          Services JMK (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This Privacy Policy
          explains how we collect, use, and safeguard your information when you visit our website at
          www.servicesjmk.com (the &quot;Website&quot;) and communicate with us.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We collect two types of information when you use our Website:</p>
        <p className="mt-3">
          <span className="font-semibold">Information You Provide:</span> When you reach out to us through the contact
          form on our Website, you voluntarily provide us with your Full Name, Email Address, Phone Number, and Company
          Name.
        </p>
        <p className="mt-3">
          <span className="font-semibold">Usage Data and Analytics:</span> When you visit our Website, we automatically
          collect certain information about your device and interaction with the Website through Vercel Web Analytics
          and Vercel Speed Insights. This information does not personally identify you and includes data such as your
          browser type, operating system, pages viewed, and website performance metrics.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect exclusively for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1 text-white/75 mt-3">
          <li>
            To respond to your inquiries, answer your questions, and communicate with you regarding our industrial and
            engineering services.
          </li>
          <li>
            To monitor and improve the performance, speed, and overall user experience of our Website using aggregated
            analytics data.
          </li>
        </ul>
        <p className="mt-3">
          We do not use your personal information to send automated marketing campaigns, newsletters, or any other
          unsolicited communications.
        </p>
      </LegalSection>

      <LegalSection title="4. Information Sharing and Disclosure">
        <p>
          We are committed to keeping your data private. We do not sell, trade, rent, or otherwise share your personal
          information with third parties. The information you submit is used strictly internally by the Services JMK
          team. Analytics data is processed securely by our hosting provider (Vercel) solely for the purpose of
          providing website performance insights.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Security">
        <p>
          We implement reasonable administrative and technical security measures to protect the personal information you
          submit through our Website. However, please understand that no electronic transmission of data over the
          internet can be guaranteed to be 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain your personal information only for as long as is necessary to fulfill the purposes outlined in this
          Privacy Policy (i.e., to maintain communication with you regarding your inquiry and potential business
          relationship).
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or request the deletion of the
          personal information you have provided to us. If you wish to exercise any of these rights, please contact us
          using the information provided below.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated &quot;Last
          Updated&quot; date.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="mt-3">
          <a href="mailto:info@servicesjmk.com" className="text-[#2563eb] hover:underline font-medium">
            info@servicesjmk.com
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
