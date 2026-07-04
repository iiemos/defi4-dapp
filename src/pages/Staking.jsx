import { CheckCircle2, LockKeyhole, TimerReset, Wallet } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, ProgressBar, SectionTitle } from "../components/Primitives";
import { redemptionRecords, stakePlans } from "../data/defi4Data";

export default function Staking() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="Stake / Redeem / Turbo"
        title="质押、赎回与涡轮收益"
        copy="所有质押数据、收益数据、倒计时与赎回权限由链上状态决定，周期内禁止强制终止。"
        action={<ActionButton onClick={() => openDialog("stake")}><Wallet size={18} />发起质押</ActionButton>}
      />

      <section className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <Card className="module-feature-card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">Current Stake</p>
              <h2 className="mt-3 text-3xl font-black">1,860 U</h2>
              <p className="mt-2 text-sm text-app-text">30 天周期，生效时间 2026-06-20 14:32</p>
            </div>
            <div className="rounded-lg border border-app-line bg-black px-4 py-3 text-right">
              <p className="text-xs text-app-muted">剩余时间</p>
              <p className="mt-2 text-xl font-black text-app-gold">18天 06:24:12</p>
            </div>
          </div>
          <div className="mt-6">
            <ProgressBar value={41} />
            <div className="mt-3 grid gap-3 text-sm md:grid-cols-3">
              <span className="metric-tile text-app-text">实时收益：<b className="text-app-gold">286.42 OPT</b></span>
              <span className="metric-tile text-app-text">昨日收益：<b className="text-white">12.8 OPT</b></span>
              <span className="metric-tile text-app-text">赎回状态：<b className="text-app-warning">未解锁</b></span>
            </div>
          </div>
        </Card>

        <Card className="module-feature-card">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">Turbo Window</p>
          <h2 className="mt-3 text-2xl font-black">涡轮复投倒计时</h2>
          <p className="mt-2 text-sm leading-6 text-app-text">赎回后开始 6 小时倒计时，复投金额不低于本金且周期不短于上一轮才可提息。</p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["05", "42", "18"].map((item, index) => (
              <div key={index} className="rounded-lg border border-app-gold/25 bg-app-gold/10 p-3 text-center">
                <p className="text-2xl font-black text-app-gold">{item}</p>
                <p className="mt-1 text-xs text-app-text">{["小时", "分钟", "秒"][index]}</p>
              </div>
            ))}
          </div>
          <ActionButton className="mt-5 w-full" onClick={() => openDialog("turbo")}>
            <TimerReset size={17} />
            立即复投
          </ActionButton>
        </Card>
      </section>

      <section className="mt-8">
        <SectionTitle title="质押周期" copy="按照文档中的品类、周期、日收益与封顶展示。" />
        <div className="grid gap-4 md:grid-cols-3">
          {stakePlans.map((plan) => (
            <Card key={plan.name} className="transition hover:border-app-gold/30">
              <div className="flex items-center justify-between">
                <h3 className="font-black">{plan.name}</h3>
                <span className="rounded-md bg-app-gold/10 px-2 py-1 text-xs font-bold text-app-gold">{plan.period}</span>
              </div>
              <dl className="mt-5 grid gap-3 text-sm">
                <div className="flex justify-between"><dt className="text-app-muted">日收益</dt><dd className="font-bold text-app-gold">{plan.rate}</dd></div>
                <div className="flex justify-between"><dt className="text-app-muted">单地址封顶</dt><dd className="font-bold">{plan.cap}</dd></div>
                <div className="flex justify-between"><dt className="text-app-muted">月化</dt><dd className="font-bold">{plan.monthly}</dd></div>
              </dl>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8 grid min-w-0 gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="min-w-0">
          <SectionTitle title="赎回权限" />
          <div className="grid gap-3">
            {[
              { icon: LockKeyhole, text: "倒计时结束前赎回按钮置灰，并展示禁止原因。" },
              { icon: Wallet, text: "点击赎回前预校验链上状态与可赎回数量。" },
              { icon: CheckCircle2, text: "交易上链成功后清空当期质押数据并更新余额。" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-lg border border-app-line bg-black p-3 text-sm text-app-text">
                <span className="gold-icon-box h-9 w-9 shrink-0">
                  <item.icon size={18} />
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </Card>

        <Card className="min-w-0 overflow-x-auto">
          <SectionTitle title="赎回记录" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="text-xs text-app-muted">
                <tr className="border-b border-app-line">
                  <th className="py-3">交易哈希</th>
                  <th className="py-3">金额</th>
                  <th className="py-3">状态</th>
                  <th className="py-3 text-right">时间</th>
                </tr>
              </thead>
              <tbody>
                {redemptionRecords.map((record) => (
                  <tr key={record.hash} className="border-b border-app-line/70 last:border-0">
                    <td className="py-3 font-mono text-app-gold">{record.hash}</td>
                    <td className="py-3 font-bold">{record.amount}</td>
                    <td className="py-3 text-app-text">{record.status}</td>
                    <td className="py-3 text-right text-app-muted">{record.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </>
  );
}
