import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  Calendar,
  Target,
  FlaskConical,
  TrendingUp,
  Code2,
  BarChart3,
  Workflow,
  Languages,
  GraduationCap,
  Award,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import profilePhotoAsset from "@/assets/efrain.png.asset.json";
const profilePhoto = profilePhotoAsset.url;

// ============================================================================
// CENTRALIZED PORTFOLIO DATA
// ----------------------------------------------------------------------------
// All content displayed in the portfolio is sourced from this single object.
// To update the portfolio in the future, edit ONLY the values below. The UI
// will reflect every change automatically.
// ============================================================================
const PORTFOLIO_DATA = {
  // -- Personal / Hero header --
  profile: {
    name: "Efraín Guadalupe Ferretiz Macías",
    title: "Data Analyst | Inteligencia de Negocios | Python | SQL | Power BI",
    location: "Nuevo León, México",
    photo: profilePhoto,
    socials: {
      linkedin: "https://www.linkedin.com/in/efrain-guadalupe-ferretiz-macias-data-analyst/",
      github: "https://github.com/EfrainFerre",
      email: "guadaluoeefrain@gmail.com",
    },
  },

  // -- Perfil Profesional view --
  perfil: {
    statement:
      "Análisis de Datos con sólida experiencia en entornos de producción, operaciones y mejora continua. Especializado en la validación, estructuración y análisis de datos operativos para el seguimiento de indicadores clave (KPIs), como waste financiero y eficiencia global GE. Especialista en la traducción de datos complejos en visibilidad estratégica mediante herramientas como SQL, Python, Power BI y Excel.",
    experience: [
      {
        company: "Mondelez International",
        role: "Técnico de Producción / Mejora Continua",
        period: "Octubre 2019 – Actualmente",
        bullets: [
          "Análisis de causa raíz de falla en procesos utilizando herramientas de Lean Six Sigma, logrando una reducción del 80% en KPIs de waste financiero.",
          "Reducción del impacto negativo al KPI principal de la línea GE (Eficiencia Global), mediante análisis de datos de defectos de calidad (partes por millón).",
          "Digitalización y estandarización de registros operativos (CIL, Centerlines y reportes) para la generación de insights analíticos, habilitando estrategias de mantenimiento predictivo y monitoreo de vida útil de componentes.",
          "Generación de reportes de desempeño productivo para proporcionar visibilidad sobre KPIs personales y grupales.",
        ],
      },
    ],
  },

  // -- Proyectos view --
  proyectos: [
    {
      title: "Experimento A/B Landing Page",
      date: "Marzo 2026",
      objective:
        "Evaluar diferencias significativas en la tasa de conversión entre Landing A y Landing B.",
      methodology:
        "Pruebas chi-cuadrado de independencia para variables categóricas y prueba t de dos muestras para comparar el gasto promedio.",
      results:
        "Landing B genera mayor tasa de conversión (~15%) y mayor gasto promedio que Landing A (~13-14%). Email (14.99%) y Ads (14.74%) lideran las fuentes de tráfico.",
      tech: ["Python", "Pandas", "SciPy", "Matplotlib", "Jupyter Notebook"],
      repo: "https://github.com/",
    },
    {
      title: "NovaRetail Consumer Analysis",
      date: "Febrero 2026",
      objective:
        "Explorar relaciones entre métricas clave (compras, ingresos, visitas, publicidad) e identificar patrones de comportamiento del consumidor.",
      methodology:
        "Análisis Exploratorio de Datos (EDA), limpieza y estructuración del dataset comercial, y evaluación de correlaciones estadísticas (Pearson, Spearman, V de Cramér).",
      results:
        "Se detectó una relación extremadamente fuerte (97% de correlación) entre compras mensuales e ingreso anual. Se demostró que más gasto publicitario no garantiza linealmente más visitas.",
      tech: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "GitHub"],
      repo: "https://github.com/",
    },
  ],

  // -- Habilidades Técnicas view --
  habilidades: [
    {
      category: "Análisis y Lenguajes",
      icon: "code",
      items: [
        "Python (Pandas, NumPy)",
        "SQL (Intermedio)",
        "Excel (Tablas Dinámicas)",
        "Visual Studio Code",
        "Jupyter Notebook",
      ],
    },
    {
      category: "Inteligencia de Negocios",
      icon: "chart",
      items: [
        "Power BI",
        "Visualización de Datos",
        "Análisis Exploratorio de Datos (EDA)",
        "Control de KPIs y Reportes de desempeño",
      ],
    },
    {
      category: "Metodologías",
      icon: "workflow",
      items: [
        "Lean Six Sigma",
        "Mejora Continua",
        "Optimización de Procesos",
        "Toma de Decisiones Basada en Datos",
      ],
    },
    {
      category: "Idiomas",
      icon: "lang",
      items: ["Inglés (Nivel A2+)"],
    },
  ],

  // -- Certificaciones y Educación view --
  educacion: [
    {
      title: "Licenciatura en Informática Administrativa",
      institution: "Universidad CNCI",
      detail: "Graduación: Noviembre 2026",
      type: "education",
    },
    {
      title: "Programa Avanzado en Análisis de Datos",
      institution: "TripleTen",
      detail: "2026",
      type: "cert",
    },
    {
      title: "Técnico en Mecatrónica",
      institution: "Conalep Don Víctor Gómez Garza",
      detail: "2018",
      type: "education",
    },
    {
      title: "Cursos adicionales",
      institution: "Formación complementaria",
      detail: "SQL Intermedio · Tablas Dinámicas Avanzadas en Excel",
      type: "cert",
    },
  ],

  // -- Footer --
  footer: {
    cta: "Hablemos de Datos y Eficiencia Operativa",
  },
};

// ============================================================================
// Route
// ============================================================================
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Efraín Ferretiz — Data Analyst | BI · Python · SQL · Power BI" },
      {
        name: "description",
        content:
          "Portafolio profesional de Efraín Guadalupe Ferretiz Macías, Data Analyst con experiencia en manufactura, KPIs operativos y mejora continua.",
      },
      { property: "og:title", content: "Efraín Ferretiz — Data Analyst" },
      {
        property: "og:description",
        content:
          "Análisis de datos, inteligencia de negocios y optimización de procesos en entornos de manufactura.",
      },
    ],
  }),
  component: Portfolio,
});

// ============================================================================
// Tabs
// ============================================================================
type TabId = "perfil" | "proyectos" | "habilidades" | "educacion";

const TABS: { id: TabId; label: string }[] = [
  { id: "perfil", label: "Perfil Profesional" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades Técnicas" },
  { id: "educacion", label: "Certificaciones y Educación" },
];

function Portfolio() {
  const [active, setActive] = useState<TabId>("perfil");
  const { profile, footer } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Decorative ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(800px 500px at 15% -10%, oklch(0.30 0.05 200 / 0.5), transparent 60%), radial-gradient(700px 500px at 100% 0%, oklch(0.30 0.10 160 / 0.25), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:py-20">
        {/* ============== HERO ============== */}
        <header className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-14">
          {/* Photo */}
          <div className="mx-auto lg:mx-0">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-2xl opacity-40 blur-xl"
                style={{ background: "linear-gradient(135deg, var(--color-primary), transparent)" }}
              />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img
                  src={profile.photo}
                  alt={`Retrato profesional de ${profile.name}`}
                  width={560}
                  height={640}
                  className="h-72 w-full object-cover sm:h-80 lg:h-[320px] lg:w-[280px]"
                />
              </div>
            </div>
          </div>

          {/* Header text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Disponible para colaboraciones
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {profile.title}
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{profile.location}</span>
            </div>

            {/* Socials */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <SocialLink href={profile.socials.linkedin} icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
              <SocialLink href={profile.socials.github} icon={<Github className="h-4 w-4" />} label="GitHub" />
              <SocialLink
                href={`mailto:${profile.socials.email}`}
                icon={<Mail className="h-4 w-4" />}
                label={profile.socials.email}
              />
            </div>
          </div>
        </header>

        {/* ============== NAV ============== */}
        <nav className="mt-14 sm:mt-20">
          <div className="rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-sm shadow-lg sm:p-2">
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
              {TABS.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`relative rounded-xl px-3 py-3 text-xs font-semibold uppercase tracking-wider transition-all sm:text-sm ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-xl bg-primary shadow-[0_8px_30px_-6px_oklch(0.78_0.18_160/0.6)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* ============== CONTENT ============== */}
        <main className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.section
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {active === "perfil" && <PerfilView />}
              {active === "proyectos" && <ProyectosView />}
              {active === "habilidades" && <HabilidadesView />}
              {active === "educacion" && <EducacionView />}
            </motion.section>
          </AnimatePresence>
        </main>

        {/* ============== FOOTER ============== */}
        <footer className="mt-20 sm:mt-28">
          <div className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
            <div
              aria-hidden
              className="h-px w-full"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }}
            />
            <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Contacto
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {footer.cta}
                </h2>
              </div>
              <a
                href={`mailto:${profile.socials.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_12px_40px_-8px_oklch(0.78_0.18_160/0.7)] hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {profile.socials.email}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Construido con análisis y atención al detalle.
          </p>
        </footer>
      </div>
    </div>
  );
}

// ============================================================================
// Sub-components
// ============================================================================
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3.5 py-2 text-sm font-medium text-foreground/90 transition-all hover:border-primary hover:text-primary"
    >
      <span className="text-primary">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
      <span className="inline sm:hidden">{label.split("@")[0] || label}</span>
    </a>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-16 bg-primary" />
    </div>
  );
}

// ---- Perfil ----
function PerfilView() {
  const { perfil } = PORTFOLIO_DATA;
  return (
    <div>
      <SectionHeader eyebrow="Resumen" title="Perfil Profesional" />

      <div className="rounded-2xl border border-border bg-card/60 p-7 sm:p-9 backdrop-blur-sm">
        <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
          {perfil.statement}
        </p>
      </div>

      <div className="mt-14">
        <div className="mb-8 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Experiencia</h3>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]" />

          {perfil.experience.map((exp) => (
            <div key={exp.company} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full border border-primary bg-background sm:h-10 sm:w-10">
                <div className="h-2 w-2 rounded-full bg-primary sm:h-2.5 sm:w-2.5" />
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {exp.company}
                  </h4>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{exp.role}</p>

                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Proyectos ----
function ProyectosView() {
  const { proyectos } = PORTFOLIO_DATA;
  return (
    <div>
      <SectionHeader eyebrow="Casos de estudio" title="Proyectos" />
      <div className="grid gap-6 lg:grid-cols-2">
        {proyectos.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-all hover:border-primary/60 hover:shadow-[0_24px_60px_-30px_oklch(0.78_0.18_160/0.5)]"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              {p.date}
            </div>

            <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              {p.title}
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-relaxed">
              <ProjectField icon={<Target className="h-4 w-4" />} label="Objetivo" value={p.objective} />
              <ProjectField icon={<FlaskConical className="h-4 w-4" />} label="Metodología" value={p.methodology} />
              <ProjectField icon={<TrendingUp className="h-4 w-4" />} label="Resultados" value={p.results} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-border">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Ver Repositorio
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {icon}
        {label}
      </div>
      <p className="mt-1.5 text-foreground/85">{value}</p>
    </div>
  );
}

// ---- Habilidades ----
const SKILL_ICONS: Record<string, React.ReactNode> = {
  code: <Code2 className="h-5 w-5" />,
  chart: <BarChart3 className="h-5 w-5" />,
  workflow: <Workflow className="h-5 w-5" />,
  lang: <Languages className="h-5 w-5" />,
};

function HabilidadesView() {
  const { habilidades } = PORTFOLIO_DATA;
  return (
    <div>
      <SectionHeader eyebrow="Stack" title="Habilidades Técnicas" />
      <div className="grid gap-6 sm:grid-cols-2">
        {habilidades.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-all hover:border-primary/50"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                {SKILL_ICONS[group.icon] ?? <Code2 className="h-5 w-5" />}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{group.category}</h3>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Educacion ----
function EducacionView() {
  const { educacion } = PORTFOLIO_DATA;
  return (
    <div>
      <SectionHeader eyebrow="Trayectoria académica" title="Certificaciones y Educación" />
      <div className="grid gap-4">
        {educacion.map((item) => {
          const Icon = item.type === "education" ? GraduationCap : Award;
          return (
            <div
              key={item.title}
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all hover:border-primary/50"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold tracking-tight sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.institution}</p>
              </div>
              <div className="hidden text-right text-xs font-medium uppercase tracking-wider text-muted-foreground sm:block">
                {item.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
