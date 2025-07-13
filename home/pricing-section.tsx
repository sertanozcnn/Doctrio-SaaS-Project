"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    description: "Perfect for occasional use",
    price: 9,
    currency: "USD",
    period: "/month",
    features: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    buttonText: "Buy Now",
    popular: false,
    buttonVariant: "secondary" as const,
  },
  {
    name: "Pro",
    description: "For professionals and teams",
    price: 19,
    currency: "USD",
    period: "/month",
    features: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    buttonText: "Buy Now",
    popular: true,
    buttonVariant: "default" as const,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-8">
            <span className="tracking-wide">PRICING</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Choose the perfect plan for your needs
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our free tier or upgrade to unlock unlimited summaries
            and premium features
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative group ${
                  plan.popular ? "lg:scale-105 lg:z-10" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative bg-card border rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-primary/50 shadow-lg"
                      : "border-border/40 hover:border-primary/30"
                  }`}
                >
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl lg:text-6xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      <div className="text-muted-foreground">
                        <span className="text-lg font-medium">
                          {plan.currency}
                        </span>
                        <span className="text-base">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <Check
                              className="w-5 h-5 text-primary"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-foreground text-lg leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
                        : "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              All plans include secure processing, instant results, and no setup
              fees
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>No hidden fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-8 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}
