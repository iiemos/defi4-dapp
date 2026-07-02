import { ChevronRight } from "lucide-react";

export function PageHeader({ kicker, title, copy, action }) {
  return (
    <section className="mb-6 flex flex-col gap-4 border-b border-app-line pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {kicker ? <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-app-gold">{kicker}</p> : null}
        <h1 className="text-2xl font-black tracking-normal text-white md:text-4xl">{title}</h1>
        {copy ? <p className="mt-3 max-w-2xl text-sm leading-6 text-app-text md:text-base">{copy}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </section>
  );
}

export function Card({ children, className = "" }) {
  return <section className={`panel-surface rounded-lg p-4 ${className}`}>{children}</section>;
}

export function StatCard({ label, value, detail, tone = "gold" }) {
  const color = tone === "up" ? "text-app-success" : tone === "down" ? "text-app-danger" : "text-app-gold";

  return (
    <Card className="transition hover:border-app-gold/30">
      <p className="text-xs font-semibold text-app-muted">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <strong className={`text-2xl font-black ${color}`}>{value}</strong>
        {detail ? <span className="text-right text-xs font-semibold text-app-text">{detail}</span> : null}
      </div>
    </Card>
  );
}

export function ActionButton({ children, variant = "primary", className = "", ...props }) {
  const classes =
    variant === "primary"
      ? "bg-gradient-to-r from-app-gold-dark to-app-gold text-black hover:brightness-110"
      : "border border-app-gold/35 text-app-gold hover:bg-app-gold/10";

  return (
    <button
      type="button"
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-black transition active:translate-y-px disabled:border-app-line disabled:bg-app-panel disabled:text-app-muted ${classes} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SectionTitle({ title, copy, link }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-black text-white">{title}</h2>
        {copy ? <p className="mt-1 text-sm text-app-text">{copy}</p> : null}
      </div>
      {link ? (
        <a className="hidden items-center gap-1 text-sm font-bold text-app-gold sm:inline-flex" href={link.href}>
          {link.label}
          <ChevronRight size={16} />
        </a>
      ) : null}
    </div>
  );
}

export function ProgressBar({ value }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-app-elevated">
      <div className="h-full rounded-full bg-gradient-to-r from-app-gold-dark to-app-gold" style={{ width: `${value}%` }} />
    </div>
  );
}
