"use client";

import { Upload, Sparkles, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Upload className="w-16 h-16 text-primary stroke-[1.5]" />,
    title: "Upload PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    id: 2,
    icon: <Sparkles className="w-16 h-16 text-primary stroke-[1.5]" />,
    title: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly",
    badge: "✨",
  },
  {
    id: 3,
    icon: <FileText className="w-16 h-16 text-primary stroke-[1.5]" />,
    title: "Get Summary",
    description: "Receive a clear, concise summary of your document",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-8">
            <span className="tracking-wide">HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-foreground mb-6 max-w-5xl mx-auto leading-tight">
            Transform any PDF into an easy-to-digest{" "}
            <span className="text-foreground">
              summary in three simple steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Content */}
                <div className="text-center group">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-8 relative">
                    <div className="relative transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                      {step.badge && (
                        <div className="absolute -top-2 -right-2 text-2xl">
                          {step.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-4 lg:mb-6">
                    {step.title}
                  </h3>

                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Between Steps - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 xl:top-10 -right-8 xl:-right-12 transform z-10">
                    <ArrowRight
                      className="w-6 h-6 xl:w-8 xl:h-8 text-muted-foreground/40"
                      strokeWidth={1.5}
                    />
                  </div>
                )}

                {/* Arrow Between Steps - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <ArrowRight
                      className="w-6 h-6 text-muted-foreground/40 rotate-90"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Join thousands of users who save hours every day with our
              AI-powered document summarization
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 text-sm lg:text-base text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>No registration required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Secure & private</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
