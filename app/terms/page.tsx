import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terminos de Servicio — El Camino del Buda",
  description:
    "Terminos y condiciones de uso de El Camino del Buda, aplicacion iOS de meditacion budista.",
  robots: { index: true, follow: true },
};

function LotusMini() {
  return (
    <svg viewBox="0 0 200 200" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.9" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.9" transform="rotate(40, 100, 130)" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.9" transform="rotate(-40, 100, 130)" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.6" transform="rotate(80, 100, 130)" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.6" transform="rotate(-80, 100, 130)" />
      <circle cx="100" cy="130" r="10" fill="#D4BC8A" opacity="0.95" />
    </svg>
  );
}

const TERMS_SECTIONS = [
  {
    title: "1. Aceptacion de los Terminos",
    content: [
      "Al descargar, instalar o usar El Camino del Buda (en adelante, 'la App'), aceptas estar sujeto a estos Terminos de Servicio. Si no estas de acuerdo con algun termino, no uses la App.",
      "Estos terminos constituyen el acuerdo completo entre tu (el usuario) y Alejandro Hernandez Mitre (el desarrollador) respecto al uso de la App.",
    ],
  },
  {
    title: "2. Descripcion del Servicio",
    content: [
      "El Camino del Buda es una aplicacion de meditacion budista y mindfulness para dispositivos iOS (iPhone e iPad).",
      "La App proporciona meditaciones guiadas, ensenanzas del Dharma, herramientas de seguimiento de practica y recursos de mindfulness.",
      "La App opera completamente de forma local en tu dispositivo. No requiere conexion a internet para su funcionamiento principal.",
    ],
  },
  {
    title: "3. Licencia de Uso",
    content: [
      "Alejandro Hernandez Mitre te otorga una licencia personal, no exclusiva, no transferible y revocable para usar la App en dispositivos iOS que sean de tu propiedad o que controles.",
      "Esta licencia no te permite: copiar, modificar, distribuir, vender, sublicenciar o crear obras derivadas de la App; realizar ingenieria inversa o intentar extraer el codigo fuente; usar la App para propositos ilegales o no autorizados.",
    ],
  },
  {
    title: "4. Propiedad Intelectual",
    content: [
      "La App, incluyendo pero no limitado a su codigo, diseno, graficos, textos, meditaciones y ensenanzas incluidas, es propiedad exclusiva de Alejandro Hernandez Mitre y esta protegida por las leyes de propiedad intelectual aplicables.",
      "Las ensenanzas budistas incluidas en la App se basan en textos del dominio publico del canon Pali y otros textos budistas clasicos. Su presentacion y adaptacion en la App son propiedad del desarrollador.",
      "Apple, iOS, iPhone, iPad y App Store son marcas registradas de Apple Inc.",
    ],
  },
  {
    title: "5. Contenido de la App",
    content: [
      "El contenido espiritual y de meditacion provisto en la App (meditaciones guiadas, ensenanzas del Dharma, sutras) es proporcionado con fines educativos e informativos.",
      "La App no reemplaza el consejo medico, psicologico o espiritual profesional. Si tienes condiciones de salud mental, consulta a un profesional de la salud antes de iniciar una practica de meditacion intensiva.",
      "El desarrollador no garantiza que la practica de meditacion produzca resultados especificos de salud o bienestar.",
    ],
  },
  {
    title: "6. Compras In-App",
    content: [
      "La App puede ofrecer contenido adicional o funciones premium mediante compras in-app, gestionadas exclusivamente a traves del sistema de compras de la App Store de Apple.",
      "Todas las transacciones estan sujetas a los terminos y condiciones de Apple. El desarrollador no tiene acceso a tu informacion de pago.",
      "Las compras son finales y no reembolsables, salvo lo dispuesto por las politicas de Apple para reembolsos.",
    ],
  },
  {
    title: "7. Limitacion de Responsabilidad",
    content: [
      "La App se proporciona 'tal cual', sin garantias de ningun tipo, expresas o implicitas.",
      "En ninguna circunstancia Alejandro Hernandez Mitre sera responsable por danos indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de usar la App.",
      "La responsabilidad total del desarrollador hacia ti por cualquier reclamacion relacionada con la App no excedera el monto que hayas pagado por la App en los ultimos doce meses.",
    ],
  },
  {
    title: "8. Modificaciones al Servicio",
    content: [
      "El desarrollador se reserva el derecho de modificar, suspender o discontinuar la App o cualquier parte de ella en cualquier momento, con o sin previo aviso.",
      "El desarrollador puede actualizar estos terminos periodicamente. El uso continuado de la App despues de cambios a los terminos constituye aceptacion de dichos cambios.",
    ],
  },
  {
    title: "9. Jurisdiccion",
    content: [
      "Estos terminos se rigen por las leyes de los Estados Unidos Mexicanos (Mexico).",
      "Cualquier disputa relacionada con estos terminos o el uso de la App se sometera a la jurisdiccion de los tribunales competentes de Mexico.",
    ],
  },
  {
    title: "10. Contacto",
    content: [
      "Para preguntas sobre estos terminos de servicio:",
      "Correo electronico: bedr10_capacitacion@hotmail.com",
      "Desarrollador: Alejandro Hernandez Mitre",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0907]">
      {/* Top nav */}
      <div className="border-b border-[#C5A572]/10 bg-[#0A0907]/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-[#C5A572] hover:text-[#D4BC8A] transition-colors">
            <span aria-hidden="true">&#8592;</span>
            El Camino del Buda
          </Link>
          <LotusMini />
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-[#C5A572] uppercase font-medium mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-amber-100 sm:text-5xl">
            Terminos de Servicio
          </h1>
          <p className="mt-4 text-amber-100/50">
            Ultima actualizacion: 17 de marzo de 2026
          </p>
        </div>

        {/* Intro */}
        <p className="text-base leading-8 text-amber-100/70 mb-12">
          Por favor lee estos Terminos de Servicio cuidadosamente antes de usar{" "}
          <strong className="text-amber-100">El Camino del Buda</strong>.
          Al usar la App, confirmas que has leido, entendido y aceptado estos terminos.
        </p>

        <hr style={{ background: "linear-gradient(90deg, transparent, #C5A572, transparent)", height: "1px", border: "none" }} className="mb-12" />

        {/* Sections */}
        <div className="space-y-10">
          {TERMS_SECTIONS.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-[#C5A572] mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, j) => (
                  <p key={j} className="text-base leading-7 text-amber-100/65">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <hr style={{ background: "linear-gradient(90deg, transparent, #C5A572, transparent)", height: "1px", border: "none" }} className="mt-16 mb-8" />
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-amber-100/30">
            &copy; 2026 Alejandro Hernandez Mitre. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-amber-100/40 hover:text-[#C5A572] transition-colors">
              Inicio
            </Link>
            <Link href="/privacy" className="text-amber-100/40 hover:text-[#C5A572] transition-colors">
              Privacidad
            </Link>
            <Link href="/support" className="text-amber-100/40 hover:text-[#C5A572] transition-colors">
              Soporte
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
