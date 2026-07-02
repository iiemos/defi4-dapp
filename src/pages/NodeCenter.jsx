import { BadgeCheck, Crown, Gem, ShieldCheck } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, SectionTitle } from "../components/Primitives";
import { nodeStages } from "../data/defi4Data";

export default function NodeCenter() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="Global Node"
        title="全球节点"
        copy="节点总量 2000 个，每个节点 500U；前台展示购买入口、阶段权益、释放规则与身份标识。"
        action={<ActionButton onClick={() => openDialog("node")}>购买节点</ActionButton>}
      />

      <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">Node Pass</p>
              <h2 className="mt-3 text-3xl font-black">500 U</h2>
              <p className="mt-2 text-sm leading-6 text-app-text">
                独立节点购买链接，隐藏具体剩余数量，仅展示当前权益与阶段信息。
              </p>
            </div>
            <Crown size={42} className="text-app-gold" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["HPS 空投 2.4%", "首期释放 10%", "6 个月线性释放"].map((item) => (
              <div key={item} className="rounded-lg border border-app-line bg-black p-3 text-sm font-bold text-app-text">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle title="节点考核" />
          <div className="grid gap-3">
            {[
              { icon: ShieldCheck, text: "底池达到 1000万U 后启动考核。" },
              { icon: BadgeCheck, text: "小区 5万全格，H3 级别发放分红。" },
              { icon: Gem, text: "底池未达到 1000万U 前不考核。" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-lg border border-app-line bg-black p-3 text-sm text-app-text">
                <item.icon className="text-app-gold" size={18} />
                {item.text}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-8">
        <SectionTitle title="阶段权益" copy="不展示具体剩余数量，只展示名次区间与对应空投量。" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {nodeStages.map((stage) => (
            <Card key={stage.rank} className="transition hover:border-app-gold/30">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-app-muted">{stage.rank}</p>
              <p className="mt-3 text-2xl font-black text-app-gold">{stage.amount}</p>
              <p className="mt-2 text-sm text-app-text">{stage.focus}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
