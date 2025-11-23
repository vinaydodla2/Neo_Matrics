// "use client";

// import MainLayout from "@/components/layout/MainLayout";
// import { motion } from "framer-motion";

// export default function ProcessPage() {
//   return (
//     <MainLayout>
//       <div className="px-6 md:px-8 pt-32 pb-32 max-w-5xl mx-auto">

//         {/* HERO */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-24"
//         >
//           <p className="text-white/40 uppercase tracking-[0.28em] text-xs mb-4">
//             Our Process
//           </p>

//           <h1 className="text-white font-light text-4xl md:text-6xl leading-tight">
//             A clear, structured way of building premium digital experiences.
//           </h1>

//           <p className="text-white/60 text-base md:text-lg mt-6 max-w-3xl leading-relaxed">
//             Every project at Neo Matrics follows a refined process — from idea to launch,
//             and everything in between. It keeps you involved, gives clarity, and ensures
//             that the final result feels intentional, modern, and aligned with your brand.
//           </p>
//         </motion.div>

//         {/* TIMELINE PHASES */}
//         <Section>
//           <Title>Project Phases</Title>

//           <div className="border-l border-white/20 ml-2 pl-6 space-y-12">
//             {phases.map((phase, index) => (
//               <motion.div
//                 key={phase.title}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: index * 0.08 }}
//                 className="relative"
//               >
//                 {/* Dot */}
//                 <div className="w-2 h-2 rounded-full bg-white absolute -left-[13px] top-1" />

//                 <p className="text-white/40 text-xs uppercase tracking-[0.22em] mb-1">
//                   {phase.tag}
//                 </p>

//                 <h2 className="text-white text-2xl mb-2">
//                   {phase.title}
//                 </h2>

//                 <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
//                   {phase.description}
//                 </p>

//                 <ul className="space-y-1 text-white/50 text-sm leading-relaxed">
//                   {phase.points.map((p) => (
//                     <li key={p}>• {p}</li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </Section>

//         {/* DIGITAL MARKETING PROCESS */}
//         <Section>
//           <Title>Digital Marketing Workflow</Title>

//           <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
//             For digital marketing clients, we follow a focused monthly cycle. It’s simple,
//             transparent, and built to keep improving results every month.
//           </p>

//           <div className="grid md:grid-cols-4 gap-10 text-white/60 text-sm leading-relaxed">
//             <ProcessBlock
//               label="Week 1"
//               title="Strategy & Planning"
//               desc="We define goals, audience, channels, content pillars, and campaign angles."
//             />
//             <ProcessBlock
//               label="Week 2"
//               title="Content & Creatives"
//               desc="We design reels, posts, ads, and supporting visuals aligned with your brand."
//             />
//             <ProcessBlock
//               label="Week 3"
//               title="Execution & Optimization"
//               desc="Publishing, ad launches, A/B tests, and tweaks based on performance."
//             />
//             <ProcessBlock
//               label="Week 4"
//               title="Review & Reporting"
//               desc="We analyse metrics, learn what worked, and refine the strategy for next month."
//             />
//           </div>
//         </Section>

//         {/* HOW WE COLLABORATE */}
//         <Section>
//           <Title>How We Work With You</Title>

//           <div className="space-y-6 text-white/60 text-base leading-relaxed">
//             <p>
//               We treat every project as a collaboration. You bring the vision, industry knowledge, 
//               and business goals. We bring structure, design, and execution.
//             </p>

//             <ul className="space-y-2">
//               <li>• Clear communication via WhatsApp, email, or your preferred channel.</li>
//               <li>• Fixed weekly or bi-weekly check-ins depending on project size.</li>
//               <li>• Structured feedback rounds so you’re never overwhelmed.</li>
//               <li>• All files and assets are organized and shared clearly.</li>
//             </ul>
//           </div>
//         </Section>

//         {/* EXPECTATIONS */}
//         <Section>
//           <Title>What You Can Expect Working With Neo Matrics</Title>

//           <div className="space-y-4 text-white/60 text-base leading-relaxed">
//             <p>• Honest timelines and realistic expectations — no overpromising.</p>
//             <p>• Clean, minimal, premium design — every time.</p>
//             <p>• Thoughtful details: typography, spacing, flow, brand consistency.</p>
//             <p>• A mix of creativity and logic — things look good and make sense.</p>
//           </div>
//         </Section>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-10"
//         >
//           <a
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 
//             text-xs font-semibold uppercase tracking-[0.18em] hover:opacity-90 transition"
//           >
//             Discuss Your Project
//           </a>
//         </motion.div>
//       </div>
//     </MainLayout>
//   );
// }

// /* ---------- small helper components ---------- */

// function Section({ children }: { children: React.ReactNode }) {
//   return <div className="mb-32">{children}</div>;
// }

// function Title({ children }: { children: React.ReactNode }) {
//   return (
//     <h2 className="text-white text-3xl font-light mb-8">
//       {children}
//     </h2>
//   );
// }

// function ProcessBlock({
//   label,
//   title,
//   desc,
// }: {
//   label: string;
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div>
//       <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
//         {label}
//       </p>
//       <h3 className="text-white text-lg mb-1">{title}</h3>
//       <p>{desc}</p>
//     </div>
//   );
// }

// /* ---------- data ---------- */

// const phases = [
//   {
//     tag: "Phase 01",
//     title: "Discovery & Alignment",
//     description:
//       "We get to know your brand, your market, and your goals. This phase is about asking the right questions.",
//     points: [
//       "Brand & business understanding",
//       "Competitor & reference analysis",
//       "Defining goals & success metrics",
//       "Clarifying scope, timelines, and expectations",
//     ],
//   },
//   {
//     tag: "Phase 02",
//     title: "Concept & Direction",
//     description:
//       "We explore visual directions, mood, and structure. This is where the project starts to take shape.",
//     points: [
//       "Moodboards & visual references",
//       "Brand voice & tone direction",
//       "Wireframes or rough structure for website",
//       "Design language exploration",
//     ],
//   },
//   {
//     tag: "Phase 03",
//     title: "Design & Build",
//     description:
//       "We turn strategy into real, detailed design and functional builds — whether it's brand identity or a website.",
//     points: [
//       "High-fidelity UI designs & layouts",
//       "Responsive & modern frontend build",
//       "Animations and interactions (where needed)",
//       "Review rounds and refinements",
//     ],
//   },
//   {
//     tag: "Phase 04",
//     title: "Testing & Polish",
//     description:
//       "Before anything goes live, we refine, test, and polish every detail to maintain a premium standard.",
//     points: [
//       "Cross-device & cross-browser testing",
//       "Content adjustments & microcopy",
//       "Speed & performance checks",
//       "Final design tweaks",
//     ],
//   },
//   {
//     tag: "Phase 05",
//     title: "Launch & Ongoing Support",
//     description:
//       "We help you launch with confidence and support you post-launch for updates, improvements, and marketing.",
//     points: [
//       "Launch planning & rollout support",
//       "Post-launch fixes & refinements",
//       "Optional ongoing marketing & design support",
//       "Support for future improvements",
//     ],
//   },
// ];

"use client";

import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SubTitle from "@/components/ui/SubTitle";
import PageHeader from "@/components/ui/PageHeader";
import CTAButton from "@/components/ui/CTAButton";

export default function ProcessPage() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-6xl mx-auto">

        {/* HERO */}
        <PageHeader
          sub="Our Process"
          title="A structured, premium approach to building meaningful digital experiences."
          description="Our workflow is designed to deliver clarity, direction, and world-class digital output with zero confusion."
        />

        {/* A — ANIMATED TIMELINE (VERTICAL DESKTOP / HORIZONTAL MOBILE) */}
        <Section>
          <SubTitle>Project Phases</SubTitle>

          <div className="space-y-20">
            {phases.map((p, index) => (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                {/* Horizontal layout for mobile */}
                <div className="md:hidden mb-3">
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1">
                    {p.tag}
                  </p>
                  <h2 className="text-white text-2xl mb-2">{p.title}</h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-1 text-white/50 text-sm">
                    {p.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>

                {/* Vertical timeline for desktop */}
                <div className="hidden md:flex gap-10">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    {index !== phases.length - 1 && (
                      <div className="flex-1 w-px bg-white/20" />
                    )}
                  </div>

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1">
                      {p.tag}
                    </p>
                    <h2 className="text-white text-2xl mb-2">{p.title}</h2>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4 max-w-3xl">
                      {p.description}
                    </p>
                    <ul className="space-y-1 text-white/50 text-sm">
                      {p.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* F — TOOLS WE USE */}
        <Section>
          <SubTitle>Tools We Use</SubTitle>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/60 text-sm"
          >
            {tools.map((tool) => (
              <div key={tool} className="hover:text-white transition">
                {tool}
              </div>
            ))}
          </motion.div>
        </Section>

        {/* G — PREMIUM CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
        >
          <h3 className="text-white text-3xl font-light mb-4">
            Ready to build something exceptional?
          </h3>
          <p className="text-white/60 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Let’s discuss your goals and craft a premium digital solution that aligns with your brand’s future.
          </p>
          <CTAButton link="/contact">Start Your Project</CTAButton>
        </motion.div>

      </div>
    </MainLayout>
  );
}

/* -------- DATA -------- */

const phases = [
  {
    tag: "Phase 01",
    title: "Discovery & Alignment",
    description:
      "We understand your goals, audience, problems, positioning, and brand direction.",
    points: [
      "Brand understanding",
      "Competitor analysis",
      "Goal setting",
      "Scope & clarity",
    ],
  },
  {
    tag: "Phase 02",
    title: "Concept Direction",
    description:
      "Visual styles, mood, structure, and tone are established to guide the entire project.",
    points: ["Moodboards", "Wireframes", "Brand tone", "Visual foundations"],
  },
  {
    tag: "Phase 03",
    title: "Design & Build",
    description:
      "We design polished interfaces, refine visuals, and build the digital experience with precision.",
    points: [
      "UI/UX design",
      "Frontend development",
      "Interactions",
      "Refinement passes",
    ],
  },
  {
    tag: "Phase 04",
    title: "Testing & Polish",
    description:
      "We refine micro-details, test on all devices, and ensure everything feels premium.",
    points: [
      "Cross-device testing",
      "Speed optimization",
      "Microcopy polish",
      "Final adjustments",
    ],
  },
  {
    tag: "Phase 05",
    title: "Launch & Support",
    description:
      "We assist with launch, monitor early response, and support you post-launch.",
    points: ["Launch prep", "Fixes & optimizations", "Analytics", "Ongoing support"],
  },
];

const tools = [
  "Figma",
  "Next.js",
  "React",
  "Framer Motion",
  "Google Ads",
  "Meta Ads",
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "After Effects",
  "Lightroom",
  "Notion",
];
