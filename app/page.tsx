import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "El Camino del Buda — Meditacion Budista y Mindfulness para iPhone",
};

// ============================================================
// LOTUS SVG — Rendered as inline SVG, no external assets
// ============================================================

function LotusSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Center petal */}
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.9" />
      {/* Inner petals */}
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.9" transform="rotate(40, 100, 130)" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.9" transform="rotate(-40, 100, 130)" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.7" transform="rotate(80, 100, 130)" />
      <ellipse cx="100" cy="80" rx="18" ry="55" fill="#C5A572" opacity="0.7" transform="rotate(-80, 100, 130)" />
      {/* Outer petals */}
      <ellipse cx="100" cy="80" rx="12" ry="45" fill="#A88A56" opacity="0.5" transform="rotate(120, 100, 130)" />
      <ellipse cx="100" cy="80" rx="12" ry="45" fill="#A88A56" opacity="0.5" transform="rotate(-120, 100, 130)" />
      <ellipse cx="100" cy="80" rx="12" ry="45" fill="#A88A56" opacity="0.5" transform="rotate(160, 100, 130)" />
      {/* Center circle */}
      <circle cx="100" cy="130" r="12" fill="#D4BC8A" opacity="0.95" />
      <circle cx="100" cy="130" r="7" fill="#C5A572" opacity="1" />
      {/* Water surface line */}
      <ellipse cx="100" cy="155" rx="60" ry="6" fill="#C5A572" opacity="0.15" />
      <ellipse cx="100" cy="160" rx="80" ry="5" fill="#C5A572" opacity="0.08" />
    </svg>
  );
}

// ============================================================
// DECORATIVE BACKGROUND — CSS-only zen circles
// ============================================================

function ZenBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Ambient glow circles */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C5A572 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #C5A572 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #C5A572 0%, transparent 70%)" }}
      />
      {/* Zen concentric rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-[#C5A572]/5" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-[#C5A572]/8" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-[#C5A572]/12" />
    </div>
  );
}

// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#C5A572]/10 bg-[#0A0907]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <LotusSVG className="h-8 w-8" />
          <span className="text-sm font-semibold tracking-widest text-[#C5A572] uppercase">
            El Camino del Buda
          </span>
        </div>
        <div className="hidden items-center gap-8 sm:flex">
          <a href="#features" className="text-sm text-amber-100/60 hover:text-[#C5A572] transition-colors">
            Caracteristicas
          </a>
          <Link href="/support" className="text-sm text-amber-100/60 hover:text-[#C5A572] transition-colors">
            Soporte
          </Link>
          <Link href="/privacy" className="text-sm text-amber-100/60 hover:text-[#C5A572] transition-colors">
            Privacidad
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// HERO SECTION
// ============================================================

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <ZenBackground />
      <div className="relative mx-auto max-w-5xl text-center">
        {/* Floating lotus */}
        <div className="mx-auto mb-8 h-28 w-28 animate-float">
          <LotusSVG className="h-full w-full lotus-svg" />
        </div>

        {/* Tagline pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5A572]/30 bg-[#C5A572]/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5A572] animate-glow-pulse" />
          <span className="text-xs tracking-widest text-[#C5A572] uppercase font-medium">
            App para iPhone
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-gold-gradient">El Camino</span>
          <br />
          <span className="text-amber-100">del Buda</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-amber-100/70 sm:text-xl">
          Tu companero de meditacion budista y mindfulness.
          Meditaciones guiadas, ensenanzas del Dharma y practica diaria
          de atencion plena — todo en tu iPhone.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* App Store badge placeholder — replace href when live on App Store */}
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#C5A572] px-8 py-4 text-sm font-semibold text-[#0A0907] transition-all hover:bg-[#D4BC8A] hover:scale-105 active:scale-95"
            aria-label="Disponible en el App Store — Proximamente"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Disponible en App Store
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#C5A572]/30 px-8 py-4 text-sm font-medium text-[#C5A572] transition-all hover:bg-[#C5A572]/10"
          >
            Ver caracteristicas
          </a>
        </div>

        {/* App illustration — CSS-only iPhone mockup */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            {/* Glow behind phone */}
            <div
              className="absolute inset-0 -m-8 rounded-[3rem] opacity-20 blur-3xl"
              style={{ background: "radial-gradient(ellipse, #C5A572 0%, transparent 70%)" }}
            />
            {/* iPhone frame */}
            <div className="relative h-[580px] w-[280px] rounded-[3rem] border-2 border-[#C5A572]/30 bg-[#110F0A] shadow-2xl">
              {/* Notch */}
              <div className="absolute left-1/2 top-4 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0A0907]" />
              {/* Screen content preview */}
              <div className="absolute inset-3 top-12 rounded-[2.5rem] bg-[#1A1610] overflow-hidden">
                {/* App preview content */}
                <div className="flex h-full flex-col items-center justify-center p-6 text-center gap-4">
                  <LotusSVG className="h-20 w-20 opacity-90" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.3em] text-[#C5A572] uppercase">El Camino del Buda</p>
                    <p className="mt-1 text-[10px] text-amber-100/40">Meditacion Guiada</p>
                  </div>
                  {/* Fake meditation session card */}
                  <div className="w-full rounded-2xl border border-[#C5A572]/20 bg-[#110F0A] p-3">
                    <p className="text-[9px] text-[#C5A572] font-semibold tracking-wider uppercase">Sesion de Hoy</p>
                    <p className="mt-1 text-xs text-amber-100/70">Meditacion Vipassana</p>
                    <p className="text-[9px] text-amber-100/40">10 minutos · Principiante</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-[#2E271B]">
                      <div className="h-full w-2/3 rounded-full bg-[#C5A572]" />
                    </div>
                  </div>
                  {/* Fake stats row */}
                  <div className="flex w-full gap-2">
                    <div className="flex-1 rounded-xl border border-[#C5A572]/15 bg-[#110F0A] p-2 text-center">
                      <p className="text-[10px] font-bold text-[#C5A572]">7</p>
                      <p className="text-[8px] text-amber-100/40">dias</p>
                    </div>
                    <div className="flex-1 rounded-xl border border-[#C5A572]/15 bg-[#110F0A] p-2 text-center">
                      <p className="text-[10px] font-bold text-[#C5A572]">42</p>
                      <p className="text-[8px] text-amber-100/40">min</p>
                    </div>
                    <div className="flex-1 rounded-xl border border-[#C5A572]/15 bg-[#110F0A] p-2 text-center">
                      <p className="text-[10px] font-bold text-[#C5A572]">12</p>
                      <p className="text-[8px] text-amber-100/40">sesiones</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#C5A572]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FEATURES SECTION
// ============================================================

const FEATURES = [
  {
    icon: "◎",
    title: "Meditaciones Guiadas",
    description:
      "Sesiones de meditacion Vipassana, Metta y Zazen para todos los niveles. Desde 5 minutos hasta sesiones profundas de una hora.",
  },
  {
    icon: "☸",
    title: "Ensenanzas del Dharma",
    description:
      "Textos sagrados, sutras y ensenanzas de maestros budistas. El Noble Camino Octuple, las Cuatro Nobles Verdades y mas.",
  },
  {
    icon: "◈",
    title: "Seguimiento de Practica",
    description:
      "Registro de tu progreso diario, racha de meditaciones y estadisticas de tiempo. Todo almacenado localmente en tu dispositivo.",
  },
  {
    icon: "✦",
    title: "Respiracion Consciente",
    description:
      "Ejercicios de respiracion y mindfulness para reducir el estres, mejorar la concentracion y cultivar la paz interior.",
  },
  {
    icon: "◉",
    title: "Privacidad Total",
    description:
      "Sin cuentas, sin nube, sin anuncios. Todos tus datos permanecen en tu iPhone. Tu practica espiritual es completamente privada.",
  },
  {
    icon: "⬡",
    title: "Apple Intelligence",
    description:
      "Usa inteligencia artificial on-device de Apple para personalizar tu experiencia. Nunca tus datos salen de tu dispositivo.",
  },
];

function FeaturesSection() {
  return (
    <section className="px-6 py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-[#C5A572] uppercase font-medium mb-4">
            El camino
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-amber-100 sm:text-5xl">
            Una practica completa
          </h2>
          <p className="mt-4 text-amber-100/60 max-w-2xl mx-auto">
            Todo lo que necesitas para cultivar la atencion plena, la compasion y la sabiduria en tu vida cotidiana.
          </p>
        </div>

        <hr className="zen-divider my-12" />

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-[#C5A572]/15 bg-[#110F0A] p-6 transition-all hover:border-[#C5A572]/40 hover:bg-[#1A1610] card-glow"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#C5A572]/20 bg-[#C5A572]/5 text-xl text-[#C5A572]">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-amber-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-amber-100/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PRIVACY HIGHLIGHT SECTION
// ============================================================

function PrivacySection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-[#C5A572]/20 bg-[#110F0A] p-8 sm:p-12 card-glow text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C5A572]/30 bg-[#C5A572]/10 text-3xl">
            &#128274;
          </div>
          <h2 className="text-3xl font-bold text-amber-100 sm:text-4xl">
            Tu privacidad es sagrada
          </h2>
          <p className="mt-4 text-amber-100/60 max-w-2xl mx-auto leading-relaxed">
            En El Camino del Buda, creemos que tu practica espiritual es profundamente personal.
            Por eso, <strong className="text-[#C5A572]">no recopilamos ningun dato</strong>,
            no requerimos cuenta, y no usamos analiticas de terceros.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "✓", text: "Sin recopilacion de datos" },
              { icon: "✓", text: "Sin cuentas requeridas" },
              { icon: "✓", text: "Sin analiticas de terceros" },
              { icon: "✓", text: "Todo en tu dispositivo" },
              { icon: "✓", text: "Apple Intelligence on-device" },
              { icon: "✓", text: "Sin publicidad" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-[#C5A572]/15 bg-[#1A1610] px-4 py-3">
                <span className="text-[#C5A572] font-bold">{item.icon}</span>
                <span className="text-sm text-amber-100/70">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/privacy"
              className="text-sm text-[#C5A572] underline underline-offset-4 hover:text-[#D4BC8A] transition-colors"
            >
              Leer politica de privacidad completa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA SECTION
// ============================================================

function CTASection() {
  return (
    <section className="px-6 py-24 sm:py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ background: "radial-gradient(ellipse at center, #C5A572 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <LotusSVG className="mx-auto mb-8 h-20 w-20 lotus-svg" />
        <h2 className="text-4xl font-bold text-amber-100 sm:text-5xl">
          Comienza tu camino hoy
        </h2>
        <p className="mt-4 text-amber-100/60 text-lg">
          Descarga El Camino del Buda y da el primer paso hacia la paz interior.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#C5A572] px-8 py-4 text-sm font-semibold text-[#0A0907] transition-all hover:bg-[#D4BC8A] hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Disponible en App Store
          </a>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-sm text-[#C5A572] hover:text-[#D4BC8A] transition-colors"
          >
            Centro de soporte
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer className="border-t border-[#C5A572]/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <LotusSVG className="h-8 w-8" />
            <div>
              <p className="text-sm font-semibold text-[#C5A572]">El Camino del Buda</p>
              <p className="text-xs text-amber-100/40">Meditacion Budista para iPhone</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer">
            <Link href="/privacy" className="text-amber-100/50 hover:text-[#C5A572] transition-colors">
              Politica de Privacidad
            </Link>
            <Link href="/terms" className="text-amber-100/50 hover:text-[#C5A572] transition-colors">
              Terminos de Servicio
            </Link>
            <Link href="/support" className="text-amber-100/50 hover:text-[#C5A572] transition-colors">
              Soporte
            </Link>
            <a
              href="mailto:bedr10_capacitacion@hotmail.com"
              className="text-amber-100/50 hover:text-[#C5A572] transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
        <hr className="zen-divider my-8" />
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between text-xs text-amber-100/30">
          <p>
            &copy; 2026 Alejandro Hernandez Mitre. Todos los derechos reservados.
          </p>
          <p>Hecho con consciencia plena</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PrivacySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
