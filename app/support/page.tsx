"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const SUPPORT_EMAIL = "bedr10_capacitacion@hotmail.com";

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

const FAQ_ITEMS = [
  {
    question: "La app requiere conexion a internet?",
    answer:
      "No. El Camino del Buda funciona completamente offline. Todas las meditaciones, ensenanzas y herramientas estan disponibles sin conexion a internet. Tu practica no depende de servidores externos.",
  },
  {
    question: "Necesito crear una cuenta?",
    answer:
      "No. La app no requiere registro, cuenta de usuario, ni inicio de sesion de ninguna clase. Simplemente descarga y comienza a meditar.",
  },
  {
    question: "Mis datos estan seguros?",
    answer:
      "Absolutamente. El Camino del Buda no recopila ningun dato personal. Todo tu historial de practica, estadisticas y preferencias se almacena exclusivamente en tu iPhone o iPad, protegido por el cifrado nativo de iOS.",
  },
  {
    question: "La app tiene anuncios o compras dentro?",
    answer:
      "La app no tiene publicidad de ningun tipo. Puede incluir compras opcionales dentro de la app para acceder a contenido adicional premium, pero el contenido base es gratuito y sin anuncios.",
  },
  {
    question: "Con que dispositivos es compatible?",
    answer:
      "El Camino del Buda es compatible con iPhone e iPad con iOS 17 o superior. Esta optimizada para iOS 18 y iOS 26 con soporte de Liquid Glass nativo.",
  },
  {
    question: "Como puedo cancelar una suscripcion?",
    answer:
      "Las suscripciones se gestionan a traves de tu cuenta de Apple. Ve a Configuracion > [tu nombre] > Suscripciones en tu iPhone, selecciona El Camino del Buda y elige Cancelar suscripcion.",
  },
  {
    question: "Que tipo de meditaciones incluye la app?",
    answer:
      "La app incluye meditaciones Vipassana (atencion plena), Metta (amor bondadoso), Zazen (meditacion zen), meditacion sobre la respiracion, y ensenanzas del Dharma basadas en el Budismo Theravada, Mahayana y Zen.",
  },
  {
    question: "La app funciona con Apple Watch?",
    answer:
      "Estamos trabajando en soporte para Apple Watch. Por el momento, la app esta disponible en iPhone y iPad.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-amber-100 sm:text-3xl mb-2">
        Preguntas Frecuentes
      </h2>
      <p className="text-amber-100/50 text-sm mb-8">
        Respuestas a las preguntas mas comunes sobre El Camino del Buda.
      </p>
      <div className="space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#C5A572]/15 bg-[#110F0A] overflow-hidden transition-all hover:border-[#C5A572]/30"
          >
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-medium text-amber-100">{item.question}</span>
              <span
                className={`ml-4 shrink-0 text-[#C5A572] transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 border-t border-[#C5A572]/10">
                <p className="text-sm leading-7 text-amber-100/60 pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="mt-16">
        <div className="rounded-2xl border border-[#C5A572]/30 bg-[#C5A572]/5 p-8 text-center">
          <p className="text-4xl mb-4">&#9885;</p>
          <h3 className="text-xl font-semibold text-amber-100">
            Mensaje preparado
          </h3>
          <p className="mt-2 text-sm text-amber-100/60">
            Se ha abierto tu cliente de correo con el mensaje listo para enviar a{" "}
            <strong className="text-[#C5A572]">{SUPPORT_EMAIL}</strong>.
            Responderemos en un plazo de 24-48 horas.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-[#C5A572] hover:text-[#D4BC8A] transition-colors"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-amber-100 sm:text-3xl mb-2">
        Contacto Directo
      </h2>
      <p className="text-amber-100/50 text-sm mb-8">
        No encontraste lo que buscabas? Envianos un mensaje y te ayudaremos.
        Puedes escribirnos directamente a{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#C5A572] hover:text-[#D4BC8A] transition-colors">
          {SUPPORT_EMAIL}
        </a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-100/70 mb-2">
            Tu correo electronico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@correo.com"
            className="block w-full rounded-xl border border-[#C5A572]/20 bg-[#1A1610] px-4 py-3 text-sm text-amber-100 placeholder-amber-100/30 focus:border-[#C5A572]/60 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/10 transition-colors"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-amber-100/70 mb-2">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="block w-full rounded-xl border border-[#C5A572]/20 bg-[#1A1610] px-4 py-3 text-sm text-amber-100 focus:border-[#C5A572]/60 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/10 transition-colors"
          >
            <option value="">Selecciona un asunto</option>
            <option value="Reporte de error - El Camino del Buda">Reporte de error</option>
            <option value="Solicitud de funcion - El Camino del Buda">Solicitud de funcion</option>
            <option value="Pregunta general - El Camino del Buda">Pregunta general</option>
            <option value="Problema con suscripcion - El Camino del Buda">Problema con suscripcion</option>
            <option value="Otro - El Camino del Buda">Otro</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-amber-100/70 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Describe tu consulta o problema con el mayor detalle posible..."
            className="block w-full resize-none rounded-xl border border-[#C5A572]/20 bg-[#1A1610] px-4 py-3 text-sm text-amber-100 placeholder-amber-100/30 focus:border-[#C5A572]/60 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/10 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-[#C5A572] px-6 py-3 text-sm font-semibold text-[#0A0907] transition-all hover:bg-[#D4BC8A] hover:scale-105 active:scale-95"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

function AppInfoSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-amber-100 sm:text-3xl mb-6">
        Informacion de la App
      </h2>
      <div className="overflow-hidden rounded-2xl border border-[#C5A572]/15 bg-[#110F0A]">
        <table className="w-full text-left">
          <tbody className="divide-y divide-[#C5A572]/10">
            {[
              ["Nombre", "El Camino del Buda"],
              ["Desarrollador", "Alejandro Hernandez Mitre"],
              ["Version actual", "1.0.0"],
              ["iOS minimo requerido", "iOS 17.0"],
              ["Dispositivos compatibles", "iPhone, iPad"],
              ["Idioma", "Espanol"],
              ["Correo de soporte", SUPPORT_EMAIL],
            ].map(([label, value], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-[#1A1610]/50" : ""}>
                <td className="px-6 py-4 text-sm font-medium text-amber-100/50 w-44">
                  {label}
                </td>
                <td className="px-6 py-4 text-sm text-amber-100/80">
                  {label === "Correo de soporte" ? (
                    <a
                      href={`mailto:${value}`}
                      className="text-[#C5A572] hover:text-[#D4BC8A] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function SupportPage() {
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
            Ayuda
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-amber-100 sm:text-5xl">
            Centro de Soporte
          </h1>
          <p className="mt-4 text-amber-100/50 text-lg">
            Estamos aqui para acompanarte en tu practica.
          </p>
        </div>

        {/* Quick contact highlight */}
        <div className="rounded-2xl border border-[#C5A572]/25 bg-[#1A1610] p-6 text-center">
          <p className="text-sm text-amber-100/60">
            Para soporte directo, escribenos a{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-[#C5A572] font-semibold hover:text-[#D4BC8A] transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        <FAQSection />
        <ContactSection />
        <AppInfoSection />

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
            <Link href="/terms" className="text-amber-100/40 hover:text-[#C5A572] transition-colors">
              Terminos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
