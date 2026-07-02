import { ExternalLink, Headphones, MessageSquare, ShieldAlert } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, SectionTitle } from "../components/Primitives";
import { announcements } from "../data/defi4Data";

export default function Support() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="Notice / Support"
        title="公告与客服"
        copy="前台常驻官方客服入口、社群链接和问题反馈表单，重要公告可强提醒。"
        action={<ActionButton onClick={() => openDialog("support")}>提交反馈</ActionButton>}
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionTitle title="系统通告" />
          <div className="grid gap-3">
            {announcements.map((item) => (
              <div key={item.title} className="flex items-center justify-between gap-4 rounded-lg border border-app-line bg-black p-3">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-xs text-app-muted">{item.time}</p>
                </div>
                <span className="rounded-md border border-app-gold/25 bg-app-gold/10 px-2 py-1 text-xs font-black text-app-gold">{item.level}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle title="客服联络" />
          <div className="grid gap-3">
            {[
              { icon: Headphones, label: "在线客服", value: "24H Support" },
              { icon: MessageSquare, label: "官方社群", value: "Telegram / X" },
              { icon: ShieldAlert, label: "安全反馈", value: "Risk Report" },
            ].map((item) => (
              <button key={item.label} type="button" className="flex items-center justify-between rounded-lg border border-app-line bg-black p-3 text-left transition hover:border-app-gold/30" onClick={() => openDialog("support")}>
                <span className="flex items-center gap-3">
                  <item.icon size={19} className="text-app-gold" />
                  <span>
                    <span className="block text-sm font-bold">{item.label}</span>
                    <span className="block text-xs text-app-muted">{item.value}</span>
                  </span>
                </span>
                <ExternalLink size={16} className="text-app-muted" />
              </button>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
