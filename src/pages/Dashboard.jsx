import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Coins,
  Copy,
  Crown,
  Hourglass,
  LineChart,
  Package,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroGlobe from "../assets/hero-globe.jpg";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, ProgressBar, SectionTitle, StatCard } from "../components/Primitives";
import { dashboardCards, featureModules, marketStats, nodeStages } from "../data/defi4Data";

const nodeProgress = 64;
const soldNodes = 1280;
const totalNodes = 2000;
const remainingNodes = totalNodes - soldNodes;

const heroStats = [
  { icon: Coins, value: "500 U", label: "单节点认购价" },
  { icon: Package, value: "2,000", label: "全球节点总量" },
];

function MarketChart() {
  return (
    <div className="market-panel relative h-72 overflow-hidden rounded-lg border border-app-gold/15 bg-black">
      <div className="absolute inset-0 grid-floor opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.12),transparent_36%),linear-gradient(270deg,rgba(39,174,96,0.08),transparent_34%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 220" role="img" aria-label="HPS price trend">
        <path d="M0 178 C70 142 82 162 130 118 S240 88 300 105 S392 143 450 76 S536 42 600 58" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
        <path d="M0 178 C70 142 82 162 130 118 S240 88 300 105 S392 143 450 76 S536 42 600 58 L600 220 L0 220 Z" fill="url(#goldFill)" opacity="0.38" />
        <defs>
          <linearGradient id="goldFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute left-4 top-4">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">HPS Market</p>
        <p className="mt-2 text-4xl font-black">$0.0846</p>
      </div>
      <div className="absolute bottom-4 right-4 rounded-md border border-app-gold/25 bg-app-gold/10 px-3 py-2 text-xs font-bold text-app-gold">
        +3.82% / 24H
      </div>
    </div>
  );
}

function HeroStat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-app-gold/20 bg-app-gold/10 text-app-gold">
        <Icon size={23} />
      </div>
      <div>
        <div className="text-2xl font-black text-white">{value}</div>
        <div className="mt-1 text-xs font-semibold text-white/50">{label}</div>
      </div>
    </div>
  );
}

function PurchasePanel({ openDialog }) {
  const nextStage = nodeStages[0];

  return (
    <section className="home-purchase-panel">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-app-gold">Global Node Sale</p>
      <h2 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
        锁定你的<span className="home-gold-text">全球节点席位</span>
      </h2>
      <p className="mt-4 text-sm leading-6 text-white/55">
        单节点认购价 500U，获得 HPS 空投释放、节点分红、DAO 投票与全球节点身份标识。
      </p>

      <div className="mt-8">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-white/60">节点认购进度</span>
          <span className="font-bold">
            <span className="text-app-gold">{soldNodes.toLocaleString()}</span>
            <span className="text-white/45"> / {totalNodes.toLocaleString()}</span>
          </span>
        </div>
        <div className="mt-3">
          <ProgressBar value={nodeProgress} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-white/50">剩余节点</div>
            <div className="mt-1 text-xl font-black text-app-gold">{remainingNodes.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-white/50">认购完成度</div>
            <div className="mt-1 text-xl font-black text-app-success">{nodeProgress}%</div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 rounded-lg border border-white/10 bg-black/35 p-4">
        <div>
          <div className="text-xs text-white/50">当前档位</div>
          <div className="mt-2 text-lg font-black text-white">{nextStage.rank}</div>
          <div className="mt-1 text-xs text-white/45">{nextStage.focus}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-white/50">预估 HPS 空投</div>
          <div className="mt-2 text-2xl font-black leading-none">
            <span className="home-gold-text">{nextStage.amount}</span>
          </div>
          <div className="mt-1 text-xs text-white/45">按认购顺序释放</div>
        </div>
      </div>

      <button type="button" className="home-gold-button home-gold-button--compact mt-6 w-full" onClick={() => openDialog("node")}>
        <span>立即认购节点</span>
        <ArrowRight size={20} />
      </button>

      <button type="button" className="home-wallet-button mt-3 w-full" onClick={() => openDialog("wallet")}>
        <Wallet size={16} />
        连接钱包查看资格
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/50">
        <ShieldCheck size={16} className="text-app-gold" />
        BSC 主网 · 前端零托管
      </div>
    </section>
  );
}

function BenefitCard({ item, index }) {
  return (
    <Card className="group min-h-32 transition hover:border-app-gold/35">
      <div className="flex items-start gap-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-app-gold to-app-gold-dark text-sm font-black text-black shadow-gold">
          {index + 1}
        </span>
        <div>
          <div className="text-base font-black text-white">{item.title}</div>
          <p className="mt-2 text-sm leading-6 text-app-text">{item.copy}</p>
          <span className="mt-3 inline-flex rounded-md border border-app-gold/25 bg-app-gold/10 px-2 py-1 text-xs font-black text-app-gold">
            {item.status}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const { openDialog } = useBusinessDialog();

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__image" style={{ backgroundImage: `url(${heroGlobe})` }} />
        <div className="home-hero__shade" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 pb-12 pt-8 md:px-10 md:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="pt-2 md:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-app-gold/40 bg-[#1a1408]/60 px-4 py-2 text-xs font-bold text-app-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-app-gold shadow-[0_0_8px_#D4AF37]" />
              DeFi4.0 全球节点 · 限量开放
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.15] tracking-normal text-white md:text-6xl">
              成为<span className="home-gold-text">全球节点</span>
              <br />
              共享生态核心收益
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              加入 DEFI4.0 黑金节点网络，覆盖排队入池、质押收益、节点分红与 DAO 治理。核心资产、收益与身份权益均围绕链上状态展示。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton className="home-gold-button--compact" onClick={() => openDialog("node")}>
                <Sparkles size={18} />
                认购节点
              </ActionButton>
              <ActionButton variant="secondary" onClick={() => openDialog("contract")}>
                <ShieldCheck size={18} />
                查看合约
              </ActionButton>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-1 gap-5 sm:grid-cols-2">
              {heroStats.map((item) => (
                <HeroStat key={item.label} {...item} />
              ))}
            </div>
          </div>

          <PurchasePanel openDialog={openDialog} />
        </div>
      </section>

      <section className="mx-auto -mt-2 grid w-full max-w-7xl gap-4 px-5 md:grid-cols-2 md:px-10 xl:grid-cols-4">
        {dashboardCards.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl px-5 md:px-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-app-gold/40 bg-[#1a1408]/60 px-4 py-2 text-xs font-bold text-app-gold backdrop-blur">
            <Crown size={15} />
            全球节点核心权益
          </div>
          <h2 className="mt-5 text-2xl font-black text-white md:text-3xl">
            成为<span className="home-gold-text">全球节点</span>，尊享全链路权益
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-app-gold to-transparent" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55">
            首页按参考项目聚焦节点认购与权益价值，同时保留当前项目排队、质押、推广和节点体系入口。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureModules.map((item, index) => (
            <BenefitCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 grid w-full max-w-7xl gap-4 px-5 pb-14 md:px-10 xl:grid-cols-[1.0fr_1.0fr]">
        <MarketChart />
        <div>
          <SectionTitle title="行情面板" copy="主币、子币、底池与交易量低饱和状态展示。" />
          <div className="grid gap-4 sm:grid-cols-2">
            {marketStats.map((item) => (
              <Card key={item.label}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-app-muted">{item.label}</p>
                  {item.tone === "up" ? <ArrowUpRight className="text-app-success" size={18} /> : item.tone === "down" ? <ArrowDownRight className="text-app-danger" size={18} /> : <LineChart className="text-app-gold" size={18} />}
                </div>
                <p className="mt-3 text-2xl font-black text-white">{item.value}</p>
                <p className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-app-text">
                  <Hourglass size={14} />
                  {item.change}
                </p>
              </Card>
            ))}
          </div>

          <Card className="mt-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-app-gold">Invite Center</p>
                <p className="mt-2 text-sm leading-6 text-app-text">推荐链接、绑定状态和个人节点信息统一在个人中心查看。</p>
              </div>
              <Link className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-app-gold/35 px-4 text-sm font-black text-app-gold transition hover:bg-app-gold/10" to="/profile">
                <Copy size={16} />
                进入个人中心
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
