import type { Route } from "./+types/home";
import {
  Navigation,
  Hero,
  ValueProposition,
  MarketOpportunities,
  GoToMarketRoadmap,
  About,
  CallToAction,
  Footer,
} from "../components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zava | ZavaCore™ Fiber - Smart Textile Revolution" },
    {
      name: "description",
      content:
        "ZavaCore™ Fiber: The world's first truly seamless, intelligent textile. Combining comfort and real-time insight for life's most demanding environments.",
    },
    { property: "og:title", content: "Zava | ZavaCore™ Fiber" },
    {
      property: "og:description",
      content:
        "Weaving the future with intelligent fabric. Discover ZavaCore™ technology.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zava-black">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <MarketOpportunities />
        <GoToMarketRoadmap />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

