import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageCircle, Puzzle, User, DollarSign, Clock, HelpCircle } from "lucide-react";
import { FlipWordsDemo } from "@/components/flipwordsdemo";
import person1 from "@/public/Picture1.jpg";
import person2 from "@/public/Picture2.jpg";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { SafariDemo } from "@/components/SafariDemo";
import { MarqueeDemo } from "./MarqueeDemo";
import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { Charts } from "./BuildingBlocks"
import {AppleCardsCarouselDemo} from "@/components/CardsCarousel";
import { GlobeDemo } from "./Globe";

export default function HomePage() {
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen font-[var(--font-space-grotesk)]">
    <section className="py-0">
      <AuroraBackgroundDemo /> 
    </section>
    <section className="py-0">
      <AppleCardsCarouselDemo/>
    </section>
    <section className="py-0">
      <Charts/>
    </section>
    <section className="py-0">
      <GlobeDemo/>
    </section>
      {/* Other sections (Career Advancement, etc.) */}
    </div>
  );
}
