import { BadgeCheck, Copy, ShieldCheck, Wallet } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, ProgressBar, StatCard } from "../components/Primitives";

export default function Profile() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="My Account"
        title="个人中心"
        copy="展示钱包、上级关系、节点身份、等级进度、资产记录和链上操作状态。"
        action={<ActionButton variant="secondary" onClick={() => openDialog("wallet")}><Wallet size={17} />切换钱包</ActionButton>}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="钱包地址" value="0x86...9F21" detail="BSC 主网" />
        <StatCard label="上级地址" value="0x2B...C803" detail="已绑定" />
        <StatCard label="节点身份" value="高级节点" detail="2026-06-28 生效" />
        <StatCard label="当前等级" value="H4" detail="67% 进度" />
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">Identity</p>
              <h2 className="mt-3 text-2xl font-black">H4 白名单账户</h2>
            </div>
            <BadgeCheck size={38} className="text-app-gold" />
          </div>
          <p className="mt-3 text-sm leading-6 text-app-text">
            等级身份、节点认证状态和绑定关系全部来自链上数据，前台仅做可视化展示。
          </p>
          <div className="mt-5">
            <ProgressBar value={67} />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black">推广关系</h2>
            <ShieldCheck size={22} className="text-app-gold" />
          </div>
          <div className="mt-4 grid gap-3">
            <div className="flex items-center justify-between rounded-lg border border-app-line bg-black p-3">
              <span className="text-sm text-app-text">推荐码</span>
              <span className="inline-flex items-center gap-2 font-mono text-sm font-bold text-app-gold">DF4-9F21 <Copy size={15} /></span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-app-line bg-black p-3">
              <span className="text-sm text-app-text">绑定时间</span>
              <span className="text-sm font-bold">2026-06-20 09:36</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-app-line bg-black p-3">
              <span className="text-sm text-app-text">关系状态</span>
              <span className="text-sm font-bold text-app-success">链上已确认</span>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
