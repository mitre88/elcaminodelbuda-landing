import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de Privacidad — El Camino del Buda",
  description:
    "Politica de privacidad de El Camino del Buda. No recopilamos datos personales. Toda la informacion permanece en tu dispositivo.",
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

const SECTIONS = [
  {
    title: "1. Informacion que Recopilamos",
    content: [
      "El Camino del Buda no recopila ningun dato personal. La aplicacion esta disenada desde su fundamento para operar completamente offline y sin necesidad de transmitir informacion a servidores externos.",
      "No recopilamos: nombre, correo electronico, numero de telefono, ubicacion, contactos, fotos, informacion de pago, datos biometricos, ni ningun otro dato personal.",
      "No existen cuentas de usuario. No hay registro. No hay inicio de sesion.",
    ],
  },
  {
    title: "2. Datos en tu Dispositivo",
    content: [
      "Toda la informacion generada por tu uso de la app (historial de meditaciones, estadisticas de practica, preferencias personales) se almacena exclusivamente en tu dispositivo iPhone o iPad.",
      "Estos datos se guardan usando el sistema de almacenamiento local de iOS y nunca son transmitidos a ninguna red o servidor externo.",
      "Si desinstala la aplicacion, todos los datos locales se eliminan permanentemente de tu dispositivo.",
    ],
  },
  {
    title: "3. Apple Intelligence y Procesamiento Local",
    content: [
      "El Camino del Buda puede utilizar Apple Intelligence, el sistema de inteligencia artificial on-device de Apple, para personalizar algunas experiencias dentro de la app.",
      "Todo el procesamiento de Apple Intelligence ocurre exclusivamente en tu dispositivo. Ningun dato es enviado a servidores de Anthropic, Apple ni ninguna otra empresa para su procesamiento.",
      "Esto esta en linea con la politica de Private Cloud Compute de Apple, que garantiza que tus datos personales no abandonen tu dispositivo.",
    ],
  },
  {
    title: "4. Servicios de Terceros",
    content: [
      "El Camino del Buda no integra ninguna SDK de analiticas de terceros (Firebase, Mixpanel, Amplitude, etc.).",
      "No usamos redes publicitarias. No hay anuncios en la app.",
      "La unica integracion con terceros es la App Store de Apple para la distribucion de la aplicacion, lo cual esta sujeto a la politica de privacidad de Apple.",
      "Puedes consultar la Politica de Privacidad de Apple en: https://www.apple.com/legal/privacy/",
    ],
  },
  {
    title: "5. Privacidad de Menores",
    content: [
      "El Camino del Buda no esta dirigida especificamente a menores de 13 anos.",
      "Dado que no recopilamos ningun dato personal de ningun usuario, no existe riesgo de recopilacion inadvertida de datos de menores.",
    ],
  },
  {
    title: "6. Seguridad",
    content: [
      "Aunque no recopilamos datos, los datos que generas localmente en tu dispositivo estan protegidos por las capacidades de seguridad nativas de iOS: cifrado del dispositivo, proteccion de datos y Keychain seguro.",
      "Te recomendamos mantener tu iPhone actualizado a la ultima version de iOS para beneficiarte de las ultimas mejoras de seguridad de Apple.",
    ],
  },
  {
    title: "7. Cambios a Esta Politica",
    content: [
      "Nos reservamos el derecho de actualizar esta politica de privacidad. Cualquier cambio significativo sera comunicado a traves de actualizaciones de la aplicacion en la App Store.",
      "La fecha de la ultima actualizacion aparece al inicio de esta pagina. Te recomendamos revisar periodicamente esta pagina.",
    ],
  },
  {
    title: "8. Contacto",
    content: [
      "Si tienes preguntas, inquietudes o solicitudes relacionadas con esta politica de privacidad, puedes contactarnos:",
      "Correo electronico: bedr10_capacitacion@hotmail.com",
      "Desarrollador: Alejandro Hernandez Mitre",
    ],
  },
];

export default function PrivacyPage() {
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
            Politica de Privacidad
          </h1>
          <p className="mt-4 text-amber-100/50">
            Ultima actualizacion: 17 de marzo de 2026
          </p>
        </div>

        {/* Highlight box */}
        <div className="rounded-2xl border border-[#C5A572]/30 bg-[#C5A572]/5 p-6 mb-12">
          <p className="text-base leading-7 text-amber-100/80 text-center">
            <strong className="text-[#C5A572]">Resumen:</strong> El Camino del Buda
            no recopila, no almacena en la nube, ni comparte ningun dato personal.
            Toda la informacion permanece exclusivamente en tu dispositivo.
            No se requiere cuenta. No hay analiticas. No hay publicidad.
          </p>
        </div>

        {/* Intro */}
        <p className="text-base leading-8 text-amber-100/70 mb-8">
          Esta politica de privacidad describe las practicas de privacidad de{" "}
          <strong className="text-amber-100">El Camino del Buda</strong>, aplicacion
          iOS desarrollada por Alejandro Hernandez Mitre. Al usar la aplicacion,
          aceptas las practicas descritas en este documento.
        </p>

        <hr style={{ background: "linear-gradient(90deg, transparent, #C5A572, transparent)", height: "1px", border: "none" }} className="mb-12" />

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
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
            <Link href="/support" className="text-amber-100/40 hover:text-[#C5A572] transition-colors">
              Soporte
            </Link>
            <Link href="/terms" className="text-amber-100/40 hover:text-[#C5A572] transition-colors">
              Terminos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
