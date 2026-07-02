import { CircleDollarSign, Vote } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, ProgressBar, SectionTitle } from "../components/Primitives";
import { voteOptions } from "../data/defi4Data";

export default function VotePage() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="OPT Vote"
        title="投票治理"
        copy="每投一票消耗 1 个 OPT，投票完成后展示结果和进度，可按时间或 OPT 消耗数量推进。"
        action={<ActionButton onClick={() => openDialog("wallet")}>连接后投票</ActionButton>}
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {voteOptions.map((option) => (
          <Card key={option.name} className="transition hover:border-app-gold/30">
            <div className="flex items-center justify-between">
              <Vote size={22} className="text-app-gold" />
              <span className="inline-flex items-center gap-1 rounded-md border border-app-gold/25 bg-app-gold/10 px-2 py-1 text-xs font-black text-app-gold">
                <CircleDollarSign size={13} />
                {option.cost}
              </span>
            </div>
            <h2 className="mt-5 text-lg font-black">{option.name}</h2>
            <div className="mt-5">
              <ProgressBar value={option.progress} />
              <p className="mt-2 text-sm font-bold text-app-text">当前进度 {option.progress}%</p>
            </div>
            <ActionButton variant="secondary" className="mt-5 w-full" onClick={() => openDialog("vote")}>投 1 票</ActionButton>
          </Card>
        ))}
      </section>

      <section className="mt-8">
        <SectionTitle title="投票规则" />
        <Card>
          <div className="grid gap-3 md:grid-cols-3">
            {["钱包签名确认 OPT 消耗", "结束后显示投票结果", "进度支持时间或消耗量规则"].map((item) => (
              <div key={item} className="rounded-lg border border-app-line bg-black p-4 text-sm font-semibold text-app-text">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
