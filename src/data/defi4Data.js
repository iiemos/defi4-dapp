export const navigation = [
  { label: "首页", path: "/" },
  { label: "排队", path: "/queue" },
  { label: "质押", path: "/staking" },
  { label: "推广", path: "/growth" },
  { label: "节点", path: "/nodes" },
  { label: "投票", path: "/vote" },
  { label: "客服", path: "/support" },
  { label: "我的", path: "/profile" },
];

export const languageOptions = [
  { code: "zh-CN", label: "简体中文", region: "China" },
  { code: "en-US", label: "English", region: "Global" },
  { code: "zh-TW", label: "繁體中文", region: "Hong Kong" },
  { code: "ja-JP", label: "日本語", region: "Japan" },
  { code: "ko-KR", label: "한국어", region: "Korea" },
  { code: "vi-VN", label: "Tiếng Việt", region: "Vietnam" },
  { code: "th-TH", label: "ไทย", region: "Thailand" },
];

export const marketStats = [
  { label: "HPS 实时价格", value: "$0.0846", change: "+3.82%", tone: "up" },
  { label: "OPT 实时价格", value: "$0.0142", change: "-1.26%", tone: "down" },
  { label: "全网底池", value: "$3,286,400", change: "+0.3% 通缩", tone: "gold" },
  { label: "24H 交易量", value: "$862,930", change: "BSC 主网", tone: "neutral" },
];

export const dashboardCards = [
  { label: "当前排队序号", value: "#128", detail: "前方 36 人，预计 02:14:08" },
  { label: "已质押数量", value: "1,860 U", detail: "30 天周期，剩余 18 天" },
  { label: "累计收益", value: "286.42 OPT", detail: "昨日收益 12.8 OPT" },
  { label: "用户等级", value: "H4", detail: "距离 H5 还需 82,400 U" },
];

export const featureModules = [
  { title: "排队入池", status: "5秒同步", copy: "新用户授权并锁定资产后进入全局队列，已质押账户涡轮复投直接进入底池。" },
  { title: "质押收益", status: "链上计时", copy: "7天、15天、30天周期展示本金、收益、赎回权限和倒计时。" },
  { title: "涡轮收益", status: "6小时窗口", copy: "单次触发收益，赎回后开启复投倒计时，逾期收益回流底池。" },
  { title: "关系绑定", status: "永久存证", copy: "推广链接或推荐码绑定上下级，未绑定钱包弹窗提示确认。" },
  { title: "业绩等级", status: "H1-H9", copy: "直推、网下业绩、持仓门槛与级差收益统一展示。" },
  { title: "节点权益", status: "2000席", copy: "节点购买、空投释放、考核状态和高级身份标识集中呈现。" },
];

export const queueSnapshot = {
  total: "2,318",
  averageWait: "03:42:00",
  dailyPool: "180,000 U",
  dailyOrders: "320 单",
  poolRatio: "72%",
  queueRatio: "28%",
  interest: "1‰",
};

export const stakePlans = [
  { name: "稳健周期", period: "7天", rate: "0.2%", cap: "200U", monthly: "--" },
  { name: "增长周期", period: "15天", rate: "0.6%", cap: "1000U", monthly: "19.7%" },
  { name: "旗舰周期", period: "30天", rate: "1%", cap: "2000U", monthly: "34.8%" },
];

export const redemptionRecords = [
  { hash: "0x82e...51a9", amount: "640 U", status: "已到账", time: "2026-07-02 08:42" },
  { hash: "0x19d...a67c", amount: "220 U", status: "确认中", time: "2026-07-01 22:16" },
  { hash: "0x4ab...92ff", amount: "180 U", status: "已到账", time: "2026-06-30 15:03" },
];

export const levels = [
  { name: "H1", performance: "3,000U", spread: "4%", holding: "基础身份" },
  { name: "H2", performance: "10,000U", spread: "8%", holding: "基础身份" },
  { name: "H3", performance: "50,000U", spread: "12%", holding: "全球节点分红起点" },
  { name: "H4", performance: "200,000U", spread: "16%", holding: "白名单封顶" },
  { name: "H5", performance: "500,000U", spread: "20%", holding: "5000U 以上，封顶 1万U" },
  { name: "H6", performance: "1,000,000U", spread: "23%", holding: "5000U 以上，封顶 1万U" },
  { name: "H7", performance: "2,000,000U", spread: "26%", holding: "5000U 以上，封顶 1万U" },
  { name: "H8", performance: "5,000,000U", spread: "28%", holding: "1万U" },
  { name: "H9", performance: "10,000,000U", spread: "30%", holding: "1万U" },
];

export const teamStats = [
  { label: "直推总数", value: "42" },
  { label: "有效直推", value: "18" },
  { label: "小区业绩", value: "186,400 U" },
  { label: "新增业绩", value: "12,900 U" },
];

export const nodeStages = [
  { rank: "1-500名", amount: "1500 HPS", focus: "创世节点权益" },
  { rank: "501-1000名", amount: "1200 HPS", focus: "早期节点权益" },
  { rank: "1001-1500名", amount: "1100 HPS", focus: "增长节点权益" },
  { rank: "1501-2000名", amount: "1000 HPS", focus: "标准节点权益" },
];

export const announcements = [
  { title: "BSC 主网合约联调窗口", time: "2026-07-02 09:00", level: "重要" },
  { title: "HPS / OPT 黑金视觉资产征集", time: "2026-07-01 18:30", level: "公告" },
  { title: "节点购买入口将独立开放", time: "2026-06-30 12:00", level: "节点" },
];

export const voteOptions = [
  { name: "HPS 底池开盘参数", progress: 46, cost: "1 OPT / 票" },
  { name: "OPT 通缩完成映射节奏", progress: 32, cost: "1 OPT / 票" },
  { name: "节点权益释放顺序", progress: 22, cost: "1 OPT / 票" },
];

export const businessDialogs = {
  wallet: {
    eyebrow: "Wallet Connect",
    title: "选择钱包连接 BSC",
    copy: "连接后将检查链 ID、绑定关系、质押状态和推广来源。前端不会保存私钥或签名内容。",
    primaryLabel: "唤起钱包",
    secondaryLabel: "稍后连接",
    items: ["MetaMask 浏览器插件", "TokenPocket / Trust Wallet H5 唤醒", "Binance Wallet", "WalletConnect 兼容入口"],
  },
  queue: {
    eyebrow: "Queue Confirm",
    title: "确认进入排队",
    copy: "本次操作将发起链上授权与资产锁定。新用户进入全局队列，已质押账户涡轮复投时直接进入底池。",
    primaryLabel: "确认排队",
    secondaryLabel: "取消",
    fields: [
      ["当前队列", "2,318 人"],
      ["预估等待", "03:42:00"],
      ["排队利息", "1‰"],
    ],
  },
  contract: {
    eyebrow: "Contract Safety",
    title: "合约与链上校验",
    copy: "所有资金操作、收益结算、关系绑定和等级升级均以 BSC 合约状态为准，交易哈希可追溯。",
    primaryLabel: "知道了",
    secondaryLabel: "关闭",
    items: ["BSC 主网优先", "链上时间戳校准倒计时", "预言机聚合行情", "前端零托管"],
  },
  stake: {
    eyebrow: "Stake Confirm",
    title: "发起质押",
    copy: "请选择周期并确认钱包签名。交易上链后，质押周期内不可强制终止，到期后自动解锁赎回权限。",
    primaryLabel: "确认质押",
    secondaryLabel: "取消",
    fields: [
      ["默认周期", "30 天"],
      ["日收益", "1%"],
      ["单地址封顶", "2000U"],
    ],
  },
  turbo: {
    eyebrow: "Turbo Reminder",
    title: "涡轮复投提醒",
    copy: "赎回后 6 小时内复投，且复投金额不低于本金、周期不短于上一轮，才可提取当期利息。",
    primaryLabel: "立即复投",
    secondaryLabel: "暂不操作",
    fields: [
      ["剩余时间", "05:42:18"],
      ["最低金额", "不低于本金"],
      ["周期要求", "不短于上一轮"],
    ],
  },
  invite: {
    eyebrow: "Invite Center",
    title: "推广链接已生成",
    copy: "复制后分享给新用户。新用户通过链接进入并确认绑定后，上下级关系将永久链上存证。",
    primaryLabel: "复制链接",
    secondaryLabel: "关闭",
    fields: [
      ["推荐码", "DF4-9F21"],
      ["绑定状态", "未绑定用户需确认"],
      ["链接", "https://defi4.app/?ref=0x86E2...9F21"],
    ],
  },
  team: {
    eyebrow: "Team Data",
    title: "下级明细筛选",
    copy: "支持按直推、有效直推、网下业绩和时间维度查看。真实版本将读取链上统计与索引服务。",
    primaryLabel: "查看明细",
    secondaryLabel: "关闭",
    items: ["直推用户总数", "有效直推数量", "当期新增业绩", "小区业绩汇总"],
  },
  node: {
    eyebrow: "Node Purchase",
    title: "确认购买全球节点",
    copy: "节点价格 500U。购买成功后展示高级节点身份标识，并进入 HPS 空投释放计划。",
    primaryLabel: "确认购买",
    secondaryLabel: "取消",
    fields: [
      ["节点价格", "500U"],
      ["总量", "2000 个"],
      ["首期释放", "10%"],
    ],
  },
  vote: {
    eyebrow: "Governance Vote",
    title: "确认消耗 1 OPT 投票",
    copy: "投票需要钱包签名确认，每票消耗 1 个 OPT。完成后即时展示当前投票进度。",
    primaryLabel: "确认投票",
    secondaryLabel: "取消",
    fields: [
      ["消耗", "1 OPT"],
      ["网络", "BSC"],
      ["结果", "链上确认后更新"],
    ],
  },
  support: {
    eyebrow: "Support Ticket",
    title: "提交问题反馈",
    copy: "请在真实接入时提交钱包地址、交易哈希和问题描述。当前版本展示客服反馈弹窗样式。",
    primaryLabel: "提交反馈",
    secondaryLabel: "关闭",
    items: ["在线客服", "官方社群", "风控反馈", "交易哈希查询"],
  },
  announcement: {
    eyebrow: "System Notice",
    title: "重要公告提醒",
    copy: "BSC 主网合约联调窗口已开启，请在资金操作前确认当前网络和合约地址。",
    primaryLabel: "我已知晓",
    secondaryLabel: "关闭",
    items: ["版本更新通知", "功能维护提醒", "风控提示公告", "已读/未读状态"],
  },
};
