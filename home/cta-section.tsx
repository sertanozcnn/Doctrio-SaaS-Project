"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
            Ready to Save Hours of Reading Time?
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform lengthy documents into clear, actionable insights with our
            AI-powered summarizer.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <Link href="/#pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-10 py-5 text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12 text-sm lg:text-base text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Instant results</span>
            </div>
          </div>

          {/* Stats or Social Proof */}
          <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  10,000+
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
                  Documents Processed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  5,000+
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
                  Happy Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  95%
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
                  Accuracy Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-4 lg:left-12 w-24 lg:w-40 h-24 lg:h-40 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-4 lg:right-12 w-32 lg:w-56 h-32 lg:h-56 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Sparkle Effects */}
      <div className="absolute top-1/3 left-1/4 opacity-20">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-20">
        <Sparkles className="w-8 h-8 text-secondary animate-pulse delay-500" />
      </div>
    </section>
  );
}
