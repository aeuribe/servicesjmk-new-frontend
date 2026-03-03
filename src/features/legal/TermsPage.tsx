"use client";

import React from "react";
import { LegalPageLayout, LegalSection } from "./LegalPageLayout";
import { useLocale } from "next-intl";

export default function TermsPage() {
  const locale = useLocale();
  const isSpanish = locale === "es";

  if (isSpanish) {
    return (
      <LegalPageLayout title="TÉRMINOS DE USO (Español)" lastUpdated="Última Actualización: 3 de marzo de 2026">
        <LegalSection title="1. Aceptación de estos Términos">
          <p>
            Estos términos de uso (&quot;Términos&quot;) se aplican a su acceso y uso del sitio web ubicado en
            www.servicesjmk.com (el &quot;Sitio Web&quot;). Si accede o utiliza el Sitio Web, significa que acepta estar
            sujeto a todos los términos a continuación. Si no está de acuerdo con todos los términos, no utilice el
            Sitio Web. Si algún término no le resulta claro, por favor infórmenos enviando un correo a
            info@servicesjmk.com.
          </p>
        </LegalSection>

        <LegalSection title="2. Fines Informativos y Acuerdos Separados">
          <p>
            El contenido de este Sitio Web se proporciona únicamente con fines informativos generales y sirve como un
            catálogo de las capacidades y servicios ofrecidos por Services JMK. Mostrar un servicio en nuestro Sitio
            Web no constituye una oferta legalmente vinculante para proporcionar dicho servicio, ni garantiza su
            disponibilidad. Cualquier contratación real, consultoría, ingeniería o servicios industriales proporcionados
            por Services JMK estará sujeta a la negociación, aceptación y ejecución de un contrato escrito por separado
            o un Acuerdo Maestro de Servicios (MSA) entre usted y Services JMK.
          </p>
        </LegalSection>

        <LegalSection title="3. Cambios a estos Términos">
          <p>
            Nos reservamos el derecho de modificar estos Términos en cualquier momento. Siempre que realicemos cambios,
            estos entrarán en vigor 30 días después de que publiquemos dichos Términos revisados (indicado mediante la
            actualización de la fecha en la parte superior). Es su responsabilidad revisar www.servicesjmk.com para ver
            si hay cambios. Si continúa utilizando el Sitio Web después de que los Términos revisados entren en vigor,
            significa que ha aceptado los cambios.
          </p>
        </LegalSection>

        <LegalSection title="4. Política de Privacidad">
          <p>
            Para obtener información sobre cómo recopilamos y utilizamos la información sobre los visitantes del Sitio
            Web, consulte nuestra Política de Privacidad.
          </p>
        </LegalSection>

        <LegalSection title="5. Servicios y Enlaces de Terceros">
          <p>
            De vez en cuando, podemos proporcionarle enlaces a sitios web o servicios de terceros que no poseemos ni
            controlamos. Services JMK no hace ninguna afirmación ni representación con respecto a, y no acepta
            responsabilidad por, los sitios web de terceros accesibles mediante hipervínculos desde el Sitio Web.
          </p>
        </LegalSection>

        <LegalSection title="6. Su Conducta">
          <p>Nuestro Sitio Web le permite enviar consultas. Usted acepta que no hará nada de lo siguiente en relación con el Sitio Web:</p>
          <ul className="list-disc pl-6 space-y-1 text-white/75 mt-3">
            <li>
              Utilizar el Sitio Web de cualquier manera que pueda interferir, interrumpir, afectar negativamente o
              inhibir a otros usuarios de disfrutar plenamente del Sitio Web, o que pueda dañar, deshabilitar,
              sobrecargar o deteriorar el funcionamiento del Sitio Web;
            </li>
            <li>Enviar información fraudulenta, engañosa o maliciosa a través de nuestros formularios de contacto;</li>
            <li>
              Utilizar cualquier minería de datos, robots o métodos similares de recopilación o extracción de datos; o
            </li>
            <li>
              Eludir o intentar eludir cualquier filtro, medida de seguridad, límite de tasa u otras características
              diseñadas para proteger el Sitio Web.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Materiales de Services JMK">
          <p>
            Ponemos mucho esfuerzo en crear el Sitio Web, incluyendo el logotipo y todos los diseños, textos, gráficos,
            imágenes, información y otro contenido. Esta propiedad nos pertenece a nosotros o a nuestros licenciantes y
            está protegida por las leyes de derechos de autor de EE. UU. e internacionales. Le otorgamos un derecho
            limitado para acceder y utilizar el Sitio Web para los fines informativos previstos.
          </p>
        </LegalSection>

        <LegalSection title="8. Descargo de Garantías">
          <p>
            EL SITIO WEB Y TODO EL CONTENIDO INCLUIDO EN ÉL SE PROPORCIONAN &quot;TAL CUAL&quot; O &quot;SEGÚN
            DISPONIBILIDAD&quot; SIN NINGUNA REPRESENTACIÓN O GARANTÍA DE NINGÚN TIPO. RENUNCIAMOS A TODA GARANTÍA Y
            REPRESENTACIÓN (EXPRESA O IMPLÍCITA) CON RESPECTO AL SITIO WEB, INCLUYENDO LA EXACTITUD O INTEGRIDAD DE LA
            INFORMACIÓN PROPORCIONADA.
          </p>
        </LegalSection>

        <LegalSection title="9. Limitación de Responsabilidad">
          <p>
            EN NINGÚN CASO SERVICES JMK SERÁ RESPONSABLE ANTE USTED O CUALQUIER TERCERO POR NINGÚN DAÑO ESPECIAL,
            INDIRECTO, INCIDENTAL, EJEMPLAR O CONSECUENTE DE NINGÚN TIPO QUE SURJA DE O EN CONEXIÓN CON SU USO DEL
            SITIO WEB. DEBIDO A QUE EL SITIO WEB SE PROPORCIONA DE FORMA GRATUITA CON FINES INFORMATIVOS, NUESTRA
            RESPONSABILIDAD TOTAL HACIA USTED POR CUALQUIER DAÑO QUE SURJA DE SU USO DEL SITIO WEB NO EXCEDERÁ LOS
            CINCUENTA DÓLARES ESTADOUNIDENSES ($50.00).
          </p>
        </LegalSection>

        <LegalSection title="10. Ley Aplicable y Jurisdicción">
          <p>
            La validez de estos Términos y los derechos, obligaciones y relaciones de las partes en virtud de estos
            Términos se interpretarán y determinarán de acuerdo con las leyes del Estado de Florida, sin tener en cuenta
            los principios de conflicto de leyes. Usted acepta expresamente que la jurisdicción exclusiva para cualquier
            disputa que surja de o esté relacionada con su uso del Sitio Web reside en los tribunales estatales o
            federales ubicados en Miami, Florida.
          </p>
        </LegalSection>

        <LegalSection title="11. Acuerdo Completo y Contacto">
          <p>
            Estos Términos constituyen el acuerdo completo entre usted y Services JMK con respecto al uso del Sitio Web.
            Las preguntas o comentarios pueden dirigirse a nosotros a:
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
    <LegalPageLayout title="TERMS OF USE (English)" lastUpdated="Last Updated: March 3, 2026">
      <LegalSection title="1. Accepting these Terms">
        <p>
          These terms of use (&quot;Terms&quot;) apply to your access and use of the website located at
          www.servicesjmk.com (the &quot;Website&quot;). If you access or use the Website, it means you agree to be
          bound by all of the terms below. If you don&apos;t agree to all of the terms below, please do not use the
          Website. If a term does not make sense to you, please let us know by e-mailing info@servicesjmk.com.
        </p>
      </LegalSection>

      <LegalSection title="2. Informational Purposes and Separate Agreements">
        <p>
          The content on this Website is provided for general informational purposes only and serves as a catalog of the
          capabilities and services offered by Services JMK. Displaying a service on our Website does not constitute a
          legally binding offer to provide that service, nor does it guarantee its availability. Any actual engagement,
          consulting, engineering, or industrial services provided by Services JMK will be subject to the negotiation,
          acceptance, and execution of a separate, offline written contract or Master Services Agreement (MSA) between
          you and Services JMK.
        </p>
      </LegalSection>

      <LegalSection title="3. Changes to these Terms">
        <p>
          We reserve the right to modify these Terms at any time. Whenever we make changes to these Terms, the changes
          are effective 30 days after we post such revised Terms (indicated by revising the date at the top of these
          Terms). It is your responsibility to check www.servicesjmk.com for changes to these Terms. If you continue to
          use the Website after the revised Terms go into effect, then you have accepted the changes to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="4. Privacy Policy">
        <p>
          For information about how we collect and use information about visitors to the Website, please check out our
          Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Services and Links">
        <p>
          From time to time, we may provide you with links to third-party websites or services that we do not own or
          control. Services JMK makes no claim or representation regarding, and accepts no responsibility for,
          third-party websites accessible by hyperlink from the Website.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Conduct">
        <p>Our Website allows you to submit inquiries. You agree that you will not do any of the following in connection with the Website:</p>
        <ul className="list-disc pl-6 space-y-1 text-white/75 mt-3">
          <li>
            Use the Website in any manner that could interfere with, disrupt, negatively affect or inhibit other users
            from fully enjoying the Website or that could damage, disable, overburden or impair the functioning of the
            Website;
          </li>
          <li>Submit fraudulent, deceptive, or malicious information through our contact forms;</li>
          <li>Use any data mining, robots or similar data gathering or extraction methods; or</li>
          <li>
            Circumvent or attempt to circumvent any filtering, security measures, rate limits or other features designed
            to protect the Website.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Services JMK Materials">
        <p>
          We put a lot of effort into creating the Website including, the logo and all designs, text, graphics,
          pictures, information and other content. This property is owned by us or our licensors and it is protected by
          U.S. and international copyright laws. We grant you a limited right to access and use the Website for its
          intended informational purposes.
        </p>
      </LegalSection>

      <LegalSection title="8. Disclaimer of Warranties">
        <p>
          THE WEBSITE AND ALL CONTENT INCLUDED ON IT ARE PROVIDED TO YOU ON AN &quot;AS IS&quot; OR &quot;AS
          AVAILABLE&quot; BASIS WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND. WE DISCLAIM ANY AND ALL
          WARRANTIES AND REPRESENTATIONS (EXPRESS OR IMPLIED) WITH RESPECT TO THE WEBSITE, INCLUDING THE ACCURACY OR
          COMPLETENESS OF THE INFORMATION PROVIDED.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>
          IN NO EVENT WILL SERVICES JMK BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY SPECIAL, INDIRECT, INCIDENTAL,
          EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE WEBSITE,
          REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE. BECAUSE THE
          WEBSITE IS PROVIDED FREE OF CHARGE FOR INFORMATIONAL PURPOSES, OUR TOTAL LIABILITY TO YOU FOR ANY DAMAGES
          ARISING FROM YOUR USE OF THE WEBSITE SHALL NOT EXCEED FIFTY U.S. DOLLARS ($50.00).
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law &amp; Jurisdiction">
        <p>
          The validity of these Terms and the rights, obligations, and relations of the parties under these Terms will
          be construed and determined under and in accordance with the laws of the State of Florida, without regard to
          conflicts of law principles. You expressly agree that exclusive jurisdiction for any dispute arising out of or
          relating to your use of the Website resides in the state or federal courts located in Miami, Florida.
        </p>
      </LegalSection>

      <LegalSection title="11. Entire Agreement &amp; Contact">
        <p>
          These Terms constitute the entire agreement between you and Services JMK regarding the use of the Website.
          Questions or comments about the Website or these Terms may be directed to us at:
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
