import { ArrowDownRight, ArrowUpRight, Copy, Hourglass, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { dashboardCards, featureModules, marketStats } from "../data/defi4Data";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, SectionTitle, StatCard } from "../components/Primitives";

function MarketChart() {
  return (
    <div className="relative h-52 overflow-hidden rounded-lg border border-app-line bg-black">
      <div className="absolute inset-0 grid-floor opacity-30" />
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
        <p className="mt-2 text-3xl font-black">$0.0846</p>
      </div>
      <div className="absolute bottom-4 right-4 rounded-md border border-app-gold/25 bg-app-gold/10 px-3 py-2 text-xs font-bold text-app-gold">
        +3.82% / 24H
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="Black Gold DeFi4.0"
        title="链上排队、质押、涡轮收益与节点体系"
        copy="面向 BSC 的前台用户端，核心资产、收益、业绩和倒计时均以链上合约与预言机数据为准。"
        action={
          <div className="flex flex-wrap gap-2">
            <ActionButton onClick={() => openDialog("queue")}>
              <Sparkles size={17} />
              立即排队
            </ActionButton>
            <ActionButton variant="secondary" onClick={() => openDialog("contract")}>
              <ShieldCheck size={17} />
              查看合约
            </ActionButton>
          </div>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <MarketChart />
        <Card className="flex flex-col justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">Wallet Status</p>
            <h2 className="mt-3 text-2xl font-black">未连接钱包</h2>
            <p className="mt-2 text-sm leading-6 text-app-text">
              连接后自动检查绑定关系、BSC 网络、质押状态和推广码来源。
            </p>
          </div>
          <div className="mt-5 grid gap-2">
            <div className="flex items-center justify-between rounded-lg border border-app-line bg-black px-3 py-3 text-sm">
              <span className="text-app-text">推荐链接</span>
              <span className="inline-flex items-center gap-2 font-bold text-app-gold">
                0x86...9F21
                <Copy size={15} />
              </span>
            </div>
            <Link className="inline-flex h-11 items-center justify-center rounded-lg border border-app-gold/35 text-sm font-black text-app-gold transition hover:bg-app-gold/10" to="/profile">
              进入个人中心
            </Link>
          </div>
        </Card>
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="mt-8">
        <SectionTitle title="核心功能" copy="以文档模块拆分为前台可操作入口，后续接入合约读写。" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureModules.map((item) => (
            <Card key={item.title} className="min-h-40 transition hover:border-app-gold/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-black">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-app-text">{item.copy}</p>
                </div>
                <span className="rounded-md border border-app-gold/25 bg-app-gold/10 px-2 py-1 text-xs font-black text-app-gold">
                  {item.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title="行情面板" copy="主币、子币、底池与交易量低饱和状态展示。" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
      </section>
    </>
  );
}
