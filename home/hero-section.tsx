"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        {/* Powered by AI Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by AI</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Transform PDFs into{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                concise summaries
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a beautiful summary reel of the document in seconds.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Try Doctrio
              <span className="ml-2">✨</span>
            </Button>
          </div>

          {/* Optional: Feature indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Lightning fast</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>AI-powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Secure & private</span>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-4 sm:left-8 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-4 sm:right-8 w-32 sm:w-48 h-32 sm:h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
}
