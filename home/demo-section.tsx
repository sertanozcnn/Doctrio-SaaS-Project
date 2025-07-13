"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const demoSlides = [
  {
    id: 1,
    title: "Quick Overview",
    content:
      "Comprehensive Next.js 15 course covering everything from fundamentals to advanced deployment strategies.",
    icon: <FileText className="w-6 h-6 text-primary" />,
    bgColor: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
  {
    id: 2,
    title: "AI-Powered Analysis",
    content:
      "Our advanced AI analyzes your PDF content and extracts key information automatically.",
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    id: 3,
    title: "Lightning Fast",
    content:
      "Get your summary in seconds, not minutes. Our optimized processing ensures quick results.",
    icon: <Clock className="w-6 h-6 text-green-500" />,
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
  },
  {
    id: 4,
    title: "Secure Processing",
    content:
      "Your documents are processed securely and deleted immediately after summarization.",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
  {
    id: 5,
    title: "Smart Formatting",
    content:
      "Beautiful, readable summaries with proper formatting and structure preservation.",
    icon: <FileText className="w-6 h-6 text-orange-500" />,
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
  },
  {
    id: 6,
    title: "Multi-Language",
    content:
      "Support for multiple languages with accurate translation and summarization.",
    icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  },
  {
    id: 7,
    title: "Export Options",
    content:
      "Export your summaries in various formats including PDF, Word, and plain text.",
    icon: <FileText className="w-6 h-6 text-pink-500" />,
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    id: 8,
    title: "Collaboration",
    content:
      "Share summaries with your team and collaborate on document analysis.",
    icon: <Sparkles className="w-6 h-6 text-teal-500" />,
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
  },
  {
    id: 9,
    title: "Analytics",
    content:
      "Track your document processing history and get insights on your workflow.",
    icon: <Clock className="w-6 h-6 text-red-500" />,
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
  },
];

export default function DemoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + demoSlides.length) % demoSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>See It In Action</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Watch how <span className="text-primary">Doctrio</span> transforms{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              this Next.js course PDF
            </span>{" "}
            into an easy-to-read summary!
          </h2>
        </div>

        {/* Demo Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Slide Display */}
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-xl">
              <div
                className={`${demoSlides[currentSlide].bgColor} p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center items-center text-center transition-all duration-500`}
              >
                <div className="mb-6">{demoSlides[currentSlide].icon}</div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {demoSlides[currentSlide].title}
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {demoSlides[currentSlide].content}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/40 hover:bg-accent"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/40 hover:bg-accent"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {demoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {demoSlides.length}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Try It Yourself
            <span className="ml-2">✨</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
