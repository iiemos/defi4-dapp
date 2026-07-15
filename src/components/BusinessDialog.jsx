import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, X } from "lucide-react";
import { businessDialogs } from "../data/defi4Data";
import { BusinessDialogContext } from "./businessDialogContext";
import { ActionButton } from "./Primitives";

function DialogContent({ config, closeDialog }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/74 px-3 pb-3 pt-16 backdrop-blur-sm sm:items-center sm:p-4">
      <section className="panel-surface w-full max-w-lg rounded-lg p-4 shadow-gold">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">{config.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black text-white">{config.title}</h2>
          </div>
          <button
            type="button"
            aria-label="关闭弹窗"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-app-line text-app-text transition hover:border-app-gold/35 hover:text-app-gold"
            onClick={closeDialog}
          >
            <X size={19} />
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-app-text">{config.copy}</p>

        {config.fields ? (
          <dl className="mt-5 grid gap-2">
            {config.fields.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[6rem_minmax(0,1fr)] gap-3 rounded-lg border border-app-line bg-black p-3 text-sm">
                <dt className="text-app-muted">{label}</dt>
                <dd className="min-w-0 break-words font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {config.items ? (
          <div className="mt-5 grid gap-2">
            {config.items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-app-line bg-black p-3 text-sm text-app-text">
                <CheckCircle2 size={17} className="shrink-0 text-app-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 rounded-lg border border-app-gold/20 bg-app-gold/10 p-3">
          <div className="flex gap-2 text-xs leading-5 text-app-text">
            <CircleAlert size={16} className="mt-0.5 shrink-0 text-app-gold" />
            <span>当前为前台交互样式与流程占位，真实交易接入后会替换为钱包签名、合约读取和交易状态。</span>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ActionButton className="home-gold-button--compact" onClick={closeDialog}>{config.primaryLabel}</ActionButton>
          <ActionButton variant="secondary" onClick={closeDialog}>{config.secondaryLabel}</ActionButton>
        </div>
      </section>
    </div>
  );
}

export function BusinessDialogProvider({ children }) {
  const [dialogKey, setDialogKey] = useState(null);
  const config = dialogKey ? businessDialogs[dialogKey] : null;

  useEffect(() => {
    if (!config) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setDialogKey(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [config]);

  const value = useMemo(() => ({
    openDialog: setDialogKey,
    closeDialog: () => setDialogKey(null),
  }), []);

  return (
    <BusinessDialogContext.Provider value={value}>
      {children}
      {config ? <DialogContent config={config} closeDialog={() => setDialogKey(null)} /> : null}
    </BusinessDialogContext.Provider>
  );
}
