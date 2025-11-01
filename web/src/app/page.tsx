export default function Home() {
  const pillars = [
    {
      id: "model",
      title: "Models",
      subtitle: "Core intelligence",
      description:
        "Foundation or fine-tuned models that take inputs (prompts, data) and return outputs (text, actions, predictions). They provide raw capability, but no workflow or product surface on their own.",
      highlights: [
        "Examples: GPT-4, Claude, Gemini, Llama",
        "Optimized for accuracy, speed, or modality",
        "Need guardrails, prompts, and context",
      ],
      tone: "from-sky-400/30 via-sky-500/20 to-transparent",
    },
    {
      id: "builder",
      title: "Builders",
      subtitle: "Product layer",
      description:
        "Platforms and tooling that package models into reusable building blocks. They add orchestration, memory, integrations, and UI so teams can ship dependable experiences without wiring everything manually.",
      highlights: [
        "Examples: LangChain, Fixie, Zapier AI, Replit Agents",
        "Handle prompt engineering and data connections",
        "Expose APIs, SDKs, or dashboards",
      ],
      tone: "from-violet-400/30 via-violet-500/20 to-transparent",
    },
    {
      id: "agent",
      title: "Agents",
      subtitle: "Autonomous outcomes",
      description:
        "Goal-driven systems that decide what to do next. Agents call models (and often builder services) iteratively, observe the results, and choose the next step until the objective is complete.",
      highlights: [
        "Examples: AutoGPT, Devin, customer support bots",
        "Use tools, APIs, or other agents as needed",
        "Need monitoring, safety, and fallbacks",
      ],
      tone: "from-emerald-400/30 via-emerald-500/20 to-transparent",
    },
  ];

  const comparison = [
    {
      attribute: "Primary concern",
      model: "Accuracy, modality, cost per token",
      builder: "Reusable patterns, integrations, developer velocity",
      agent: "Goal completion, autonomy, reliability",
    },
    {
      attribute: "Key inputs",
      model: "Prompt + context window",
      builder: "Prompts, tools, data pipelines",
      agent: "Goals, guardrails, available tools",
    },
    {
      attribute: "Outputs",
      model: "Tokens, embeddings, raw predictions",
      builder: "APIs, workflows, configurable components",
      agent: "Completed tasks, logged decisions",
    },
    {
      attribute: "Who uses it?",
      model: "Model researchers, ML engineers",
      builder: "Product & platform teams",
      agent: "End users, operations teams",
    },
    {
      attribute: "Risk if misused",
      model: "Wrong answers, hallucinations",
      builder: "Fragile workflows, vendor lock-in",
      agent: "Unexpected actions, brand impact",
    },
  ];

  const stack = [
    {
      stage: "1. Data & Knowledge",
      summary:
        "Structured data, documents, APIs, and policies the system must understand or respect.",
      detail:
        "Collected in vector databases, knowledge graphs, or live connectors; curated for relevance and compliance.",
    },
    {
      stage: "2. Models",
      summary:
        "Foundation or task-specific models that transform requests into language, vision, or action predictions.",
      detail:
        "Can be swapped based on cost, latency, or modality. Builders abstract this choice away from downstream teams.",
    },
    {
      stage: "3. Builder Layer",
      summary:
        "Orchestrates prompts, tools, and memory so the same model can power many product experiences.",
      detail:
        "Adds routing, tool selection, evaluation, and analytics; exposes clean surfaces to product engineers.",
    },
    {
      stage: "4. Agent Shell",
      summary:
        "Handles goals, plans, and decisions. Chooses when to call models, tools, or humans in the loop.",
      detail:
        "Implements reflection loops, task decomposition, and safety interventions before acting autonomously.",
    },
    {
      stage: "5. Product Experience",
      summary:
        "Chat interfaces, automations, or apps that deliver outcomes to users with transparency and auditability.",
      detail:
        "Includes UI, notifications, metrics, and handoff workflows—what customers actually see.",
    },
  ];

  const scenarios = [
    {
      title: "Need raw intelligence inside an existing product",
      recommendation: "Start with models",
      rationale:
        "If you already control orchestration and UX, selecting the right model (or mix of models) is the fastest path. Optimize prompts, guardrails, and evaluation in-house.",
    },
    {
      title: "Want to ship AI features quickly with limited ML talent",
      recommendation: "Adopt a builder platform",
      rationale:
        "Builders accelerate teams with templates, observability, and integrations so you don't reinvent orchestration. You retain control over UX while skipping lower-level plumbing.",
    },
    {
      title: "Need an autonomous teammate for repeatable work",
      recommendation: "Invest in agents",
      rationale:
        "Combine your data, builder infrastructure, and monitoring with an agent loop that can take actions. Decide up front how it escalates to humans and how success is measured.",
    },
  ];

  const faqs = [
    {
      question: "Can I skip the builder layer and go straight from model to agent?",
      answer:
        "You can prototype this way, but production agents benefit from builder services that manage prompts, context, tools, and evaluation. Without them you inherit fragile glue code and monitoring gaps.",
    },
    {
      question: "Do builders always use third-party models?",
      answer:
        "Not necessarily. Some bundle their own hosted models, others let you connect OpenAI, Anthropic, or open-source checkpoints. The value is in orchestration and tooling, not in owning the foundation model.",
    },
    {
      question: "What makes an agent 'autonomous'?",
      answer:
        "An agent can interpret a goal, plan next steps, call tools or models iteratively, and decide when the job is done. Guardrails still define its boundaries, and many production agents include human approval loops.",
    },
  ];

  return (
    <main className="px-6 pb-16 pt-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-24">
        <section className="space-y-10">
          <span className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            AI Stack Breakdown
          </span>
          <header className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Understand the gap between{" "}
              <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                models, builders, and agents
              </span>
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
              Modern AI products live across multiple layers. Models deliver raw
              intelligence, builder platforms turn that intelligence into repeatable
              workflows, and agents execute goals by calling everything else. This
              guide shows how the pieces fit.
            </p>
          </header>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="pointer-events-none absolute -top-32 right-16 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="grid gap-10 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="relative flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-900/10 p-6 ring-1 ring-slate-800/60"
                >
                  <div
                    className={`absolute inset-x-4 top-4 h-24 rounded-2xl bg-gradient-to-br ${pillar.tone} blur-2xl`}
                  />
                  <div className="relative flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-white">
                      {pillar.title}
                    </h2>
                    <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <p className="relative text-sm leading-6 text-slate-300 sm:text-base">
                    {pillar.description}
                  </p>
                  <ul className="relative space-y-3 text-sm text-slate-200">
                    {pillar.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-900/60 px-4 py-3"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-100" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <header className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold">Quick comparison</h2>
            <p className="max-w-2xl text-slate-300">
              Start by mapping the problem you need to solve to the layer that owns
              it. The table below summarizes how responsibility shifts as you move
              up the stack.
            </p>
          </header>
          <div className="overflow-hidden rounded-3xl border border-slate-800/60">
            <table className="w-full border-collapse text-left text-sm text-slate-200 sm:text-base">
              <thead className="bg-slate-900/70 backdrop-blur">
                <tr>
                  <th className="px-6 py-4 font-medium text-slate-400">Attribute</th>
                  <th className="px-6 py-4 font-medium text-cyan-200">Models</th>
                  <th className="px-6 py-4 font-medium text-violet-200">Builders</th>
                  <th className="px-6 py-4 font-medium text-emerald-200">Agents</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.attribute}
                    className="border-t border-slate-800/60 odd:bg-slate-900/30"
                  >
                    <td className="px-6 py-5 text-slate-300">{row.attribute}</td>
                    <td className="px-6 py-5 text-cyan-100/90">{row.model}</td>
                    <td className="px-6 py-5 text-violet-100/90">{row.builder}</td>
                    <td className="px-6 py-5 text-emerald-100/90">{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-8">
          <header className="space-y-3">
            <h2 className="text-3xl font-semibold text-balance">
              How the layers work together
            </h2>
            <p className="max-w-2xl text-slate-300">
              Think of the agentic stack as an assembly line. Each layer sets up the
              next one, ultimately delivering a trustworthy, user-facing experience.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass space-y-5 rounded-3xl p-8">
              {stack.map((step) => (
                <div
                  key={step.stage}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-100">
                    {step.stage}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{step.summary}</p>
                  <p className="mt-3 text-sm text-slate-400">{step.detail}</p>
                </div>
              ))}
            </div>
            <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Checklist before launching an agent
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>Document goals, success metrics, and escalation paths.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>
                      Instrument prompts, tool calls, and memory so you can audit and
                      replay decisions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>
                      Simulate failures and adversarial scenarios before letting it run
                      unattended.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-sm text-emerald-100">
                <p className="font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Pro tip
                </p>
                <p className="mt-2">
                  Architecture evolves as autonomy increases. Start with a simple
                  builder workflow, measure results, and only promote it to an agent
                  when you can catch mistakes faster than a human would.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="space-y-8">
          <header className="space-y-3">
            <h2 className="text-3xl font-semibold text-balance">
              Choosing the right layer for your use case
            </h2>
            <p className="max-w-2xl text-slate-300">
              Use these decision patterns to pick a starting point, then expand
              horizontally as your product matures.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="group rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-slate-400/60 hover:bg-slate-900/60"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Scenario
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  {scenario.title}
                </h3>
                <p className="mt-4 text-sm font-semibold text-sky-300">
                  {scenario.recommendation}
                </p>
                <p className="mt-3 text-sm text-slate-300">{scenario.rationale}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <header className="space-y-3 text-balance">
            <h2 className="text-3xl font-semibold">FAQ</h2>
            <p className="max-w-2xl text-slate-300">
              A few clarifications that come up while teams adopt more agentic
              patterns.
            </p>
          </header>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-100 transition group-open:text-emerald-200">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-6 rounded-3xl border border-slate-800/60 bg-slate-950/80 px-8 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              TL;DR
            </p>
            <p className="mt-3 max-w-xl text-slate-300">
              Models provide intelligence, builders operationalize it, and agents turn
              it into outcomes. Pick the layer that matches your current constraint,
              then layer the rest as you chase more autonomy.
            </p>
          </div>
          <div className="flex gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Models ≠ Agents</span>
            <span>Builders glue it together</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
