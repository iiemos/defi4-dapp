import { Clock3, RotateCcw, Settings2, ShieldCheck, Sparkles } from "lucide-react";
import { useBusinessDialog } from "../components/businessDialogContext";
import { ActionButton, Card, PageHeader, ProgressBar, StatCard } from "../components/Primitives";
import { queueSnapshot } from "../data/defi4Data";

export default function Queue() {
  const { openDialog } = useBusinessDialog();

  return (
    <>
      <PageHeader
        kicker="Global Queue"
        title="排队入池"
        copy="新用户完成授权与资产锁定后进入全局队列；已经质押过的账户涡轮复投时不再排队。"
        action={<ActionButton onClick={() => openDialog("queue")}><Sparkles size={18} />立即排队</ActionButton>}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="当前队列人数" value={queueSnapshot.total} detail="链上队列" />
        <StatCard label="平均等待时长" value={queueSnapshot.averageWait} detail="实时估算" />
        <StatCard label="每日入池金额" value={queueSnapshot.dailyPool} detail={queueSnapshot.poolRatio} />
        <StatCard label="排队利息" value={queueSnapshot.interest} detail="可按合约参数关闭" />
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="module-feature-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-app-gold">My Queue</p>
              <h2 className="mt-3 text-3xl font-black">#128</h2>
              <p className="mt-2 text-sm text-app-text">前方剩余 36 人，预计完成 02:14:08</p>
            </div>
            <span className="rounded-md border border-app-gold/25 bg-app-gold/10 px-3 py-1 text-sm font-black text-app-gold">排队中</span>
          </div>
          <div className="mt-8">
            <ProgressBar value={62} />
            <div className="mt-3 flex justify-between text-xs font-semibold text-app-muted">
              <span>已同步 62%</span>
              <span>5 秒轮询</span>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "链上排序", copy: "排序、优先级与刷新频率由智能合约配置，前台仅渲染。" },
            { icon: Settings2, title: "参数可调", copy: "每日金额、单量、底池比例、排队比例保留后台/合约参数位。" },
            { icon: RotateCcw, title: "利息控制", copy: "1‰ 排队利息由合约出账，到指定时间段可取消结算。" },
          ].map((item) => (
            <Card key={item.title}>
              <span className="gold-icon-box">
                <item.icon size={22} />
              </span>
              <h3 className="mt-4 font-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-app-text">{item.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mt-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="metric-tile">
            <p className="metric-tile__label">每日单量</p>
            <p className="metric-tile__value">{queueSnapshot.dailyOrders}</p>
          </div>
          <div className="metric-tile">
            <p className="metric-tile__label">底池比例</p>
            <p className="metric-tile__value text-app-gold">{queueSnapshot.poolRatio}</p>
          </div>
          <div className="metric-tile">
            <p className="metric-tile__label">排队比例</p>
            <p className="metric-tile__value text-app-gold">{queueSnapshot.queueRatio}</p>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-app-line bg-black p-3">
            <Clock3 size={20} className="text-app-gold" />
            <span className="text-sm font-semibold text-app-text">状态变更以链上时间戳为准</span>
          </div>
        </div>
      </Card>
    </>
  );
}
