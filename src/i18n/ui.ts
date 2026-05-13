import type { Locale } from "./config";

/**
 * UI strings used by Navbar, Footer, marketing sections, and docs chrome.
 *
 * Keep keys flat-ish and stable. Long-form prose lives in the page files
 * themselves (we duplicate doc pages per locale rather than stuffing
 * paragraphs into a giant dictionary).
 */
export const ui = {
  en: {
    "site.title": "claudex — Remote control for Claude Code",
    "site.description":
      "A self-hosted browser cockpit for the claude CLI on your own machine. Phone-first, your keys, your diffs.",

    "nav.index": "Index",
    "nav.docs": "Docs",
    "nav.github": "GitHub",

    "footer.index": "Index",
    "footer.docs": "Docs",
    "footer.install": "Install",
    "footer.legal": "MIT · Not affiliated with Anthropic.",

    "lang.switcher.aria": "Switch language",

    // Hero
    "hero.subtitle.body":
      "Remote control for the {claude} CLI on your laptop. Open your phone, keep driving — review a diff, approve a permission, queue the next prompt.",
    "hero.cta.install": "Install",
    "hero.cta.docs": "Read the docs",
    "hero.cta.github": "GitHub",

    // Specimen
    "specimen.title.l1": "The cockpit fits",
    "specimen.title.l2.lead": "in your",
    "specimen.title.l2.italic": "pocket.",
    "specimen.intro":
      "Every screen is drawn for a 390-pixel viewport first. Bottom sheets, safe-area aware, iOS-keyboard-tuned. The desktop opens the same session into a wider cockpit — but the phone is the home turf.",
    "specimen.fig01.lede": "Tool calls collapse.",
    "specimen.fig01.body":
      "Each read, grep, or bash becomes a one-line pill — tap to expand the full output, leave it collapsed for skim mode.",
    "specimen.fig02.lede": "Inline diff.",
    "specimen.fig02.body":
      "The edit card opens a real diff with Accept · Reject right there. No detour to a separate review page for routine work.",
    "specimen.fig03.lede": "Slash · @ rail.",
    "specimen.fig03.body":
      "A sticky chip strip above the keyboard. Triggers slash commands, file pickers, attachments, /btw side chats.",
    "specimen.fig04.title.lead": "Same session,",
    "specimen.fig04.title.italic": "wider canvas.",
    "specimen.fig04.body":
      "Sidebar with projects and saved filters. A grouped session list with branch, diff stats, and live status. The same data your phone sees, laid out for a 27-inch screen.",
    "specimen.foot.left": "Sidebar + sessions list, same data your phone sees.",
    "specimen.foot.right": "macOS · Linux · Windows",

    // Pillars
    "pillars.title.lead": "Four things, said",
    "pillars.title.italic": "precisely.",
    "pillars.intro.html":
      'We could list twelve features. We\'ve listed four. The rest is in the <a href="{docs}" class="ed-link text-ink">documentation</a>.',
    "pillars.01.title": "Phone-first by design.",
    "pillars.01.kicker": "Bottom sheets · safe-area · thumb reach",
    "pillars.01.body":
      "Every screen is sized for a 390-pixel viewport, not retrofitted from a desktop layout. The desktop opens the same session into a wider three-column cockpit — but the phone is the home turf.",
    "pillars.02.title": "Inherits everything.",
    "pillars.02.kicker": "We spawn the CLI, we don't replace it",
    "pillars.02.body":
      "Your config, MCP servers, plugins, skills, OAuth token — all yours, untouched. claudex drives the real claude CLI as a subprocess. We never call the Anthropic API ourselves.",
    "pillars.03.title": "Auth from day one.",
    "pillars.03.kicker": "Username · password · TOTP · ten codes",
    "pillars.03.body":
      "There is no dev-mode backdoor. JWT in an httpOnly cookie. Ten single-use recovery codes printed once at init. The server refuses to bind anything other than 127.0.0.1.",
    "pillars.04.title": "Real git worktrees.",
    "pillars.04.kicker": "Branches · isolation · auto-rebase",
    "pillars.04.body":
      "Each session lands on its own branch in an isolated worktree. Run five claudes on the same repo without stepping on yourself. Auto-rebase on create, auto-prune on archive.",

    // Endmatter
    "endmatter.title.lead": "One line, then you're",
    "endmatter.title.italic": "in.",
    "endmatter.intro":
      "Walks you through admin setup, prints a TOTP QR and ten recovery codes, then offers to register a user-scoped daemon. Nothing silent. Sudo opt-in.",
    "endmatter.tab.unix": "macOS · Linux",
    "endmatter.tab.win": "Windows",
    "endmatter.prereq": "Prereq → node 20 · pnpm 9 · claude CLI",
    "endmatter.copy": "Copy",
    "endmatter.copied": "Copied",
    "endmatter.copy.fallback": "Press ⌘C",
    "endmatter.after.label": "After it runs",
    "endmatter.after.body":
      "Open {url}. Sign in with your TOTP. You're driving.",
    "endmatter.phone.label": "For your phone",
    "endmatter.phone.body":
      "Front it with Cloudflare Tunnel, frpc, or Tailscale. claudex stays bound to localhost — public exposure is your call.",
    "endmatter.broken.label": "If anything breaks",
    "endmatter.broken.body.html":
      'The <a href="{docs}" class="ed-link text-ink">Troubleshooting</a> page covers boot loops, restart hangs, and HTTP-vs-HTTPS gotchas.',
    "endmatter.cta.full": "Full install guide",
    "endmatter.cta.firstrun": "First-run walkthrough",
    "endmatter.cta.star": "Star on GitHub",

    // Docs index page
    "docs.index.kicker": "Documentation",
    "docs.index.title.html":
      'Everything you need to drive <em class="not-italic text-klein">claude</em> from anywhere.',
    "docs.index.intro.html":
      'These pages assume you have a working <span class="mono text-ink">claude</span> CLI on the machine you want to run claudex on. Read top-to-bottom for a guided first-time setup, or jump straight to the topic you need.',
    "docs.index.read": "read",

    // Docs chrome
    "docs.breadcrumb.root": "Docs",
    "docs.prev": "previous",
    "docs.next": "next",

    // Docs section labels
    "docs.section.getting-started": "Getting started",
    "docs.section.going-further": "Going further",

    // Docs page metadata
    "docs.introduction.title": "Introduction",
    "docs.introduction.summary":
      "What claudex is, what it isn't, and when you'd want it.",
    "docs.installation.title": "Installation",
    "docs.installation.summary":
      "One-line installer for macOS / Linux / Windows, plus the manual path.",
    "docs.first-run.title": "First run",
    "docs.first-run.summary":
      "Admin setup, TOTP enrollment, recovery codes, and your first session.",
    "docs.remote-access.title": "Remote access",
    "docs.remote-access.summary":
      "Front claudex with Cloudflare Tunnel, frpc, Tailscale, or a Caddy reverse proxy.",
    "docs.troubleshooting.title": "Troubleshooting",
    "docs.troubleshooting.summary":
      "Common boot issues, rebuild loops, restart hangs, and HTTP-vs-HTTPS gotchas.",

    "page.docs.title": "Documentation · claudex",
    "page.docs.description":
      "claudex documentation — install, run, and operate your remote control for Claude Code.",
    "page.docs.title.suffix": "claudex docs",
    "page.docs.description.suffix": "claudex documentation",
  },

  zh: {
    "site.title": "claudex — Claude Code 的远程驾驶舱",
    "site.description":
      "自托管在你机器上的 claude CLI 浏览器驾驶舱。手机优先，密钥归你，diff 归你。",

    "nav.index": "首页",
    "nav.docs": "文档",
    "nav.github": "GitHub",

    "footer.index": "首页",
    "footer.docs": "文档",
    "footer.install": "安装",
    "footer.legal": "MIT · 与 Anthropic 无关联。",

    "lang.switcher.aria": "切换语言",

    // Hero
    "hero.subtitle.body":
      "远程驾驶你笔记本上的 {claude} CLI。掏出手机，活就接着干——审一段 diff、批一次权限、排上下一个 prompt。",
    "hero.cta.install": "安装",
    "hero.cta.docs": "阅读文档",
    "hero.cta.github": "GitHub",

    // Specimen
    "specimen.title.l1": "驾驶舱",
    "specimen.title.l2.lead": "装进你的",
    "specimen.title.l2.italic": "口袋。",
    "specimen.intro":
      "每一屏都按 390 像素视口起步绘制。底部抽屉、安全区适配、为 iOS 键盘量身调校。桌面端把同一份会话铺开成更宽的驾驶舱——但手机才是主场。",
    "specimen.fig01.lede": "工具调用可折叠。",
    "specimen.fig01.body":
      "每一次 read、grep、bash 都收成一行胶囊——点开看完整输出，收起则进入速览模式。",
    "specimen.fig02.lede": "内联 diff。",
    "specimen.fig02.body":
      "edit 卡片直接展开真实 diff，Accept · Reject 就在跟前。日常改动无需再绕到独立的审阅页。",
    "specimen.fig03.lede": "Slash · @ 工具栏。",
    "specimen.fig03.body":
      "悬浮在键盘上方的一条常驻 chip 栏，唤起 slash 命令、文件选择、附件、/btw 旁路对话。",
    "specimen.fig04.title.lead": "同一份会话，",
    "specimen.fig04.title.italic": "更宽的画布。",
    "specimen.fig04.body":
      "侧栏列出项目与已保存的过滤器。会话按项目分组，呈现分支、diff 统计与实时状态。手机端看到的是同一份数据，只是按 27 寸屏重新铺开。",
    "specimen.foot.left": "侧栏 + 会话列表，与手机端共用一份数据。",
    "specimen.foot.right": "macOS · Linux · Windows",

    // Pillars
    "pillars.title.lead": "四件事，说得",
    "pillars.title.italic": "精确。",
    "pillars.intro.html":
      '本可以列十二条特性，我们只挑了四条。其余的都在 <a href="{docs}" class="ed-link text-ink">文档</a> 里。',
    "pillars.01.title": "为手机而设计。",
    "pillars.01.kicker": "底部抽屉 · 安全区 · 拇指可达",
    "pillars.01.body":
      "每一屏都按 390 像素视口起步，而不是从桌面布局回填出来。桌面端会把同一份会话展开为更宽的三栏驾驶舱——但手机才是主场。",
    "pillars.02.title": "全盘继承。",
    "pillars.02.kicker": "我们启动 CLI，而不是替代它",
    "pillars.02.body":
      "你的配置、MCP 服务器、插件、技能、OAuth token——全是你的，原样保留。claudex 把真实的 claude CLI 当作子进程来驱动，从不替你直接调用 Anthropic 的 API。",
    "pillars.03.title": "认证从第一天起。",
    "pillars.03.kicker": "用户名 · 密码 · TOTP · 十枚恢复码",
    "pillars.03.body":
      "没有所谓「开发模式」后门。JWT 装在 httpOnly cookie 里。初始化时一次性打印十枚一次性恢复码。服务端拒绝绑定 127.0.0.1 之外的任何地址。",
    "pillars.04.title": "真正的 git worktree。",
    "pillars.04.kicker": "分支 · 隔离 · 自动 rebase",
    "pillars.04.body":
      "每个会话都落在独立 worktree 的独立分支上。同一个仓库可以同时跑五个 claude，互不踩脚。创建时自动 rebase，归档时自动清理。",

    // Endmatter
    "endmatter.title.lead": "一行命令，你就",
    "endmatter.title.italic": "上路了。",
    "endmatter.intro":
      "脚本会一步步带你做完管理员设置，打印 TOTP 二维码与十枚恢复码，再询问是否注册用户级守护进程。全程不静默；sudo 由你显式开启。",
    "endmatter.tab.unix": "macOS · Linux",
    "endmatter.tab.win": "Windows",
    "endmatter.prereq": "前置 → node 20 · pnpm 9 · claude CLI",
    "endmatter.copy": "复制",
    "endmatter.copied": "已复制",
    "endmatter.copy.fallback": "请按 ⌘C",
    "endmatter.after.label": "脚本跑完之后",
    "endmatter.after.body":
      "打开 {url}，用 TOTP 登录，你就上路了。",
    "endmatter.phone.label": "为你的手机",
    "endmatter.phone.body":
      "用 Cloudflare Tunnel、frpc 或 Tailscale 在前面套一层。claudex 始终绑在 localhost——是否对外暴露由你决定。",
    "endmatter.broken.label": "如果出问题",
    "endmatter.broken.body.html":
      '<a href="{docs}" class="ed-link text-ink">故障排查</a> 页面覆盖了启动循环、重启卡死、HTTP / HTTPS 之间的常见坑。',
    "endmatter.cta.full": "完整安装指南",
    "endmatter.cta.firstrun": "首次运行手册",
    "endmatter.cta.star": "去 GitHub 标星",

    // Docs index page
    "docs.index.kicker": "文档",
    "docs.index.title.html":
      '随时随地驾驶 <em class="not-italic text-klein">claude</em> 所需的一切。',
    "docs.index.intro.html":
      '这些页面假设你计划运行 claudex 的那台机器上，已经装好了 <span class="mono text-ink">claude</span> CLI。从头读到尾可以走完一次首次配置；也可以直接跳到你想看的章节。',
    "docs.index.read": "阅读",

    // Docs chrome
    "docs.breadcrumb.root": "文档",
    "docs.prev": "上一篇",
    "docs.next": "下一篇",

    // Docs section labels
    "docs.section.getting-started": "上手",
    "docs.section.going-further": "进阶",

    // Docs page metadata
    "docs.introduction.title": "简介",
    "docs.introduction.summary":
      "claudex 是什么、不是什么，以及你什么时候会想用它。",
    "docs.installation.title": "安装",
    "docs.installation.summary":
      "macOS / Linux / Windows 的一行式安装脚本，以及手动安装路径。",
    "docs.first-run.title": "首次运行",
    "docs.first-run.summary":
      "管理员设置、TOTP 注册、恢复码，以及你的第一次会话。",
    "docs.remote-access.title": "远程访问",
    "docs.remote-access.summary":
      "用 Cloudflare Tunnel、frpc、Tailscale 或 Caddy 反向代理把 claudex 接出去。",
    "docs.troubleshooting.title": "故障排查",
    "docs.troubleshooting.summary":
      "常见的启动问题、重建循环、重启卡死，以及 HTTP / HTTPS 的坑。",

    "page.docs.title": "文档 · claudex",
    "page.docs.description":
      "claudex 文档——安装、运行并驾驶你那台 Claude Code 的远程驾驶舱。",
    "page.docs.title.suffix": "claudex 文档",
    "page.docs.description.suffix": "claudex 文档",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)["en"];

/**
 * Returns a translator bound to a locale. Falls back to English if a key is
 * missing in the active locale (catches half-translated states early).
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey, vars?: Record<string, string>): string {
    const dict = (ui[locale] ?? ui.en) as Record<string, string>;
    let raw = dict[key] ?? (ui.en as Record<string, string>)[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        raw = raw.replaceAll(`{${k}}`, v);
      }
    }
    return raw;
  };
}
