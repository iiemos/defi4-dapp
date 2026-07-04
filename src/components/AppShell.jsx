import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BadgeCheck,
  Bell,
  Check,
  CircleDollarSign,
  Crown,
  Headphones,
  Languages,
  LayoutDashboard,
  Menu,
  Network,
  ShieldCheck,
  TimerReset,
  UsersRound,
  Vote,
  Wallet,
  X,
} from "lucide-react";
import { languageOptions, navigation } from "../data/defi4Data";
import { useBusinessDialog } from "./businessDialogContext";

const icons = {
  "/": LayoutDashboard,
  "/queue": TimerReset,
  "/staking": CircleDollarSign,
  "/growth": UsersRound,
  "/nodes": Crown,
  "/vote": Vote,
  "/support": Headphones,
  "/profile": BadgeCheck,
};

function NavItem({ item, onClick }) {
  const Icon = icons[item.path] || LayoutDashboard;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition",
          isActive
            ? "border border-app-gold/35 bg-app-gold/10 text-app-gold"
            : "border border-transparent text-app-text hover:border-app-gold/20 hover:bg-white/[0.03] hover:text-white",
        ].join(" ")
      }
    >
      <Icon size={18} strokeWidth={1.8} />
      <span>{item.label}</span>
    </NavLink>
  );
}

function WalletButton() {
  const { openDialog } = useBusinessDialog();

  return (
    <button
      type="button"
      onClick={() => openDialog("wallet")}
      aria-label="连接钱包"
      className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-app-gold-dark to-app-gold px-4 text-sm font-bold text-black shadow-gold transition hover:brightness-110 active:translate-y-px"
    >
      <Wallet size={17} />
      <span className="hidden sm:inline">连接钱包</span>
    </button>
  );
}

function LanguageBubble() {
  const [open, setOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(languageOptions[0]);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const selectLanguage = (language) => {
    setActiveLanguage(language);
    setOpen(false);
  };

  return (
    <div ref={bubbleRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-lg border border-app-line px-3 text-sm font-semibold text-app-text transition hover:border-app-gold/30 hover:text-app-gold"
        onClick={() => setOpen((value) => !value)}
        aria-label="切换语言"
      >
        <Languages size={17} />
        <span className="hidden sm:inline">{activeLanguage.label}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-64 rounded-lg border border-app-gold/25 bg-app-elevated p-2 shadow-gold">
          <div className="mb-2 rounded-md border border-app-line bg-black px-3 py-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-app-gold">Language</p>
            <p className="mt-1 text-xs text-app-text">切换后将同步页面文案、按钮和提示语。</p>
          </div>
          <div className="grid gap-1">
            {languageOptions.map((language) => {
              const selected = language.code === activeLanguage.code;

              return (
                <button
                  key={language.code}
                  type="button"
                  className={[
                    "flex items-center justify-between rounded-md px-3 py-2 text-left transition",
                    selected ? "bg-app-gold/10 text-app-gold" : "text-app-text hover:bg-white/[0.04] hover:text-white",
                  ].join(" ")}
                  onClick={() => selectLanguage(language)}
                >
                  <span>
                    <span className="block text-sm font-bold">{language.label}</span>
                    <span className="block text-xs text-app-muted">{language.region}</span>
                  </span>
                  {selected ? <Check size={17} /> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function AppShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openDialog } = useBusinessDialog();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-app-black text-white">
      <div className="app-backdrop" aria-hidden="true">
        <div className="app-backdrop__mesh" />
        <div className="app-backdrop__circuit" />
        <div className="app-backdrop__scanline" />
      </div>

      <header className={`app-header fixed inset-x-0 top-0 z-40 border-b border-app-line backdrop-blur-xl ${isHome ? "home-header" : ""}`}>
        <div className={`mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6 ${isHome ? "max-w-none lg:px-10" : "max-w-7xl"}`}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-app-line text-app-text md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="打开菜单"
            >
              <Menu size={20} />
            </button>
            <NavLink to="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-app-gold/35 bg-app-gold/10 text-app-gold">
                <ShieldCheck size={19} />
              </span>
              <span>
                <span className="block text-sm font-black tracking-[0.2em] text-white">DEFI4.0</span>
                <span className="block text-[11px] font-semibold text-app-gold">HPS / OPT · BSC</span>
              </span>
            </NavLink>
          </div>

          {isHome ? (
            <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
              {navigation.slice(0, 6).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition ${isActive ? "text-app-gold" : "text-white/70 hover:text-white"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          ) : (
            <div className="hidden items-center gap-2 rounded-lg border border-app-line bg-app-panel px-3 py-2 text-xs font-semibold text-app-text lg:flex">
              <Network size={15} className="text-app-gold" />
              Binance Smart Chain
            </div>
          )}

          <div className="flex items-center gap-2">
            <LanguageBubble />
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-lg border border-app-line text-app-text transition hover:border-app-gold/30 hover:text-app-gold sm:inline-flex"
              aria-label="系统公告"
              onClick={() => openDialog("announcement")}
            >
              <Bell size={17} />
            </button>
            <WalletButton />
          </div>
        </div>
      </header>

      {!isHome ? (
        <aside className="app-sidebar fixed bottom-0 left-0 top-16 z-30 hidden w-64 border-r border-app-line px-3 py-4 backdrop-blur-xl md:block">
          <nav className="grid gap-2">
            {navigation.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>
          <div className="status-rail absolute bottom-4 left-3 right-3 rounded-lg border border-app-gold/15 p-3">
            <p className="text-xs font-bold text-app-gold">链上安全</p>
            <p className="mt-2 text-xs leading-5 text-app-text">
              钱包签名、资金操作、关系绑定均由用户授权执行，前端不保存私钥。
            </p>
          </div>
        </aside>
      ) : null}

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-black/72 backdrop-blur-sm md:hidden">
          <div className="h-full w-[82vw] max-w-xs border-r border-app-line bg-black p-4">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-black tracking-[0.2em]">DEFI4.0</span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-app-line text-app-text"
                onClick={() => setMenuOpen(false)}
                aria-label="关闭菜单"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <NavItem key={item.path} item={item} onClick={() => setMenuOpen(false)} />
              ))}
            </nav>
          </div>
        </div>
      ) : null}

      <main className={`content-stage relative min-h-screen w-full ${isHome ? "home-stage pt-16" : "mx-auto max-w-7xl px-4 pb-12 pt-20 md:pl-72 md:pr-6"}`}>
        {children}
      </main>
    </div>
  );
}
