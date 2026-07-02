import { Copy, Link2, QrCode, UsersRound } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, ProgressBar, SectionTitle, StatCard } from "../components/Primitives";
import { levels, teamStats } from "../data/defi4Data";

export default function Growth() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="Referral / Level"
        title="推广业绩与等级体系"
        copy="上下级关系首次绑定后永久链上存证，直推、网下业绩与等级升级由合约统计同步。"
        action={<ActionButton onClick={() => openDialog("invite")}>复制推广链接</ActionButton>}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {teamStats.map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} detail="实时同步" />
        ))}
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">Invite Center</p>
              <h2 className="mt-3 text-2xl font-black">专属推广入口</h2>
            </div>
            <QrCode className="text-app-gold" size={34} />
          </div>
          <div className="mt-5 grid gap-3">
            <div className="rounded-lg border border-app-line bg-black p-3">
              <p className="text-xs text-app-muted">推广链接</p>
              <p className="mt-2 truncate font-mono text-sm text-app-gold">https://defi4.app/?ref=0x86E2...9F21</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ActionButton variant="secondary" onClick={() => openDialog("invite")}><Copy size={17} />复制链接</ActionButton>
              <ActionButton variant="secondary" onClick={() => openDialog("team")}><Link2 size={17} />查看下级</ActionButton>
            </div>
          </div>
        </Card>

        <Card>
          <SectionTitle title="升级进度" copy="当前 H4，累计业绩距离 H5 还差 82,400 U。" />
          <ProgressBar value={67} />
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["当前等级 H4", "小区业绩 186,400U", "持仓 5,260U"].map((item) => (
              <div key={item} className="rounded-lg border border-app-line bg-black p-3 text-sm font-bold text-app-text">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-8">
        <SectionTitle title="H1-H9 等级规则" copy="展示考核标准、级差与个人持仓约束。" />
        <Card className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs text-app-muted">
              <tr className="border-b border-app-line">
                <th className="py-3">级别</th>
                <th className="py-3">小区业绩</th>
                <th className="py-3">级差</th>
                <th className="py-3">个人持仓规则</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((level) => (
                <tr key={level.name} className="border-b border-app-line/70 last:border-0">
                  <td className="py-3">
                    <span className="inline-flex items-center gap-2 rounded-md border border-app-gold/25 bg-app-gold/10 px-2 py-1 font-black text-app-gold">
                      <UsersRound size={14} />
                      {level.name}
                    </span>
                  </td>
                  <td className="py-3 font-bold">{level.performance}</td>
                  <td className="py-3 text-app-gold">{level.spread}</td>
                  <td className="py-3 text-app-text">{level.holding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </>
  );
}
