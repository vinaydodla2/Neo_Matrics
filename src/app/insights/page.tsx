"use client";

import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import PostCard from "@/components/ui/PostCard";

export default function InsightsPage() {
  return (
    <MainLayout>
      <div className="px-6 md:px-8 pt-32 pb-32 max-w-6xl mx-auto">

        <PageHeader
          sub="Insights"
          title="Ideas, strategies, and creative thinking from Neo Matrics."
          description="We share thoughts on branding, design, digital marketing and the future of digital experiences."
        />

        <Section>
          <div className="grid gap-12 md:gap-20">
            {posts.map((p) => (
              <PostCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                description={p.description}
                category={p.category}
                date={p.date}
                readTime={p.readTime}
              />
            ))}
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}

/* Example posts — you can replace or expand anytime */
const posts = [
  {
    slug: "why-minimalism-wins",
    title: "Why Minimalism Wins in Modern Design",
    description:
      "A deep look into why simplicity, spacing, and clarity outperform visual clutter.",
    category: "Design",
    date: "Jan 2025",
    readTime: "3 min read",
  },
  {
    slug: "how-to-build-a-strong-brand",
    title: "How to Build a Strong Brand: A Practical Guide",
    description:
      "Step-by-step breakdown of creating a recognizable and trustworthy brand identity.",
    category: "Branding",
    date: "Jan 2025",
    readTime: "5 min read",
  },
  {
    slug: "future-of-digital-marketing",
    title: "The Future of Digital Marketing in 2025",
    description:
      "Understanding algorithms, user behavior, and creative strategy to scale brands.",
    category: "Marketing",
    date: "Feb 2025",
    readTime: "4 min read",
  },
];
