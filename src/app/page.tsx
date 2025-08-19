"use client";
import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Rocket,
  Sparkles,
  Zap,
  Clock3,
  TrendingUp,
  ShieldCheck,
  HandCoins,
  Percent,
  RefreshCcw,
  ChevronRight,
  Phone,
  HelpCircle,
  XCircle,
  CalendarClock,
  Factory,
  PackageSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

// --- Utility ---
const formatZAR = (n: number) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(n || 0);

// Simple repayment model: weekly fixed fee % over 13 weeks with optional early settlement (100% fee discount)
function calcPlan(amount: number, flatFeePct: number = 12, weeks: number = 12) {
  const flatFee = amount * (flatFeePct / 100);
  const total = amount + flatFee;
  const weekly = total / weeks;
  return { flatFee, total, weekly, weeks };
}

export default function StockIgniteLanding() {
  const [amount, setAmount] = useState<number>(150000);
  const [feePct, setFeePct] = useState<number>(12); // example fee for illustration
  const plan = useMemo(() => calcPlan(amount, feePct, 12), [amount, feePct]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/getfunds-logo.png"
              alt="Stock Ignite"
              width={135}
              height={36}
            />
            <span className="mx-2 text-slate-300">|</span>
            <span className="font-semibold text-slate-700">Stock Ignite</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-slate-900 text-slate-600">
              How it works
            </a>
            <a href="#benefits" className="hover:text-slate-900 text-slate-600">
              Benefits
            </a>
            <a
              href="#calculator"
              className="hover:text-slate-900 text-slate-600"
            >
              Calculator
            </a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link target="_blank" href="https://apply.getfunds.co.za">
              <Button className="rounded-2xl bg-[#07d159] hover:bg-[#05b147] text-white">
                Apply in 2 minutes
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              >
                Buy stock now.{" "}
                <span className="text-[#07d159]">Pay over 3 months.</span>
              </motion.h1>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                For fast sales cycles and healthy margins.{" "}
                <b>Weekly repayments</b>, <b>same‑day payouts</b>, and an
                industry‑first <b>100% early‑settlement discount</b> — settle
                anytime and save.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={"https://apply.getfunds.co.za"}>
                  <Button
                    size="lg"
                    className="rounded-2xl bg-[#07d159] hover:bg-[#05b147] text-white"
                    onClick={() => (window.location.hash = "#apply")}
                  >
                    <Zap className="mr-2 h-5 w-5" /> Apply in 2 minutes
                  </Button>
                </Link>

                <Link href="tel:0658676087">
                  <Button size="lg" variant="outline" className="rounded-2xl">
                    <Phone className="mr-2 h-5 w-5" /> Talk to a human
                  </Button>
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" /> 3‑month term
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCcw className="h-4 w-4" /> Reignite as needed
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> No hidden fees
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:pl-8"
              id="quick-estimate"
            >
              <Card className="rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-[#07d159]" /> Quick estimate
                  </CardTitle>
                  <CardDescription>
                    Illustration only. Final pricing subject to assessment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="amount">Stock amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min={10000}
                        step={1000}
                        placeholder="150000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fee">Flat fee % (example)</Label>
                      <Input
                        id="fee"
                        type="number"
                        value={feePct}
                        onChange={(e) => setFeePct(Number(e.target.value))}
                        min={1}
                        max={15}
                        step={0.5}
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-3 gap-4">
                    <Card className="bg-slate-50 border-dashed rounded-2xl">
                      <CardContent className="p-4">
                        <div className="text-sm text-slate-500">Weekly</div>
                        <div className="text-2xl font-semibold">
                          {formatZAR(plan.weekly)}
                        </div>
                        <div className="text-xs text-slate-500">
                          for {plan.weeks} weeks
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-50 border-dashed rounded-2xl">
                      <CardContent className="p-4">
                        <div className="text-sm text-slate-500">
                          Total repay
                        </div>
                        <div className="text-2xl font-semibold">
                          {formatZAR(plan.total)}
                        </div>
                        <div className="text-xs text-slate-500">
                          incl. flat fee
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-50 border-dashed rounded-2xl">
                      <CardContent className="p-4">
                        <div className="text-sm text-slate-500">
                          Settle anytime
                        </div>
                        <div className="text-2xl font-semibold">Save 100%</div>
                        <div className="text-xs text-slate-500">
                          of remaining fees
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Link href={"https://apply.getfunds.co.za"}>
                    <Button className="mt-4 w-full rounded-2xl bg-[#07d159] hover:bg-[#05b147] text-white">
                      Get my offer <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="mt-2 text-xs text-slate-500">
                    Same‑day payouts once approved. Most applications take ~2
                    minutes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social proof / banner */}
      <section className="py-6 border-y bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-slate-500">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4" /> Newly launched • Taking the market by
            storm
          </div>
          <div className="flex items-center gap-2">
            <PackageSearch className="h-4 w-4" /> Perfect for seasonal stock &
            promos
          </div>
          <div className="flex items-center gap-2">
            <Factory className="h-4 w-4" /> Leverage supplier discounts
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Stock Ignite?
            </h2>
            <p className="mt-3 text-slate-600">
              Trade beyond monthly budgets, fill shelves at an affordable cost,
              and never miss a sales window again.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="h-6 text-[#07d159] w-6" />,
                title: "Explode your inventory turns",
                desc: "Buy what sells now and convert it within a 3‑month horizon.",
              },
              {
                icon: <HandCoins className="h-6 text-[#07d159] w-6" />,
                title: "Weekly, predictable repayments",
                desc: "12 equal weekly debits to match your cashflow.",
              },
              {
                icon: <Percent className="h-6 text-[#07d159] w-6" />,
                title: "100% early‑settlement discount",
                desc: "Settle early and pay zero remaining fees — a true first.",
              },
              {
                icon: <Clock3 className="h-6 text-[#07d159] w-6" />,
                title: "Same‑day payout",
                desc: "Approved today, stocked today.",
              },
              {
                icon: <ShieldCheck className="h-6 text-[#07d159] w-6" />,
                title: "Transparent pricing",
                desc: "Flat fees, no compounding, no surprises.",
              },
              {
                icon: <RefreshCcw className="h-6 text-[#07d159] w-6" />,
                title: "Reignite anytime",
                desc: "Use, settle, and repeat — as your cycle demands.",
              },
            ].map((b, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100">{b.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{b.title}</CardTitle>
                    <CardDescription>{b.desc}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
            <p className="mt-3 text-slate-600">Fast, simple, made for SMEs.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Apply in 2 minutes",
                desc: "Basic business info and 3 months bank statements.",
                icon: <Zap className="h-5 w-5 text-[#07d159]" />,
              },
              {
                title: "Get an offer",
                desc: "We assess quickly and send your 3‑month plan.",
                icon: <Sparkles className="h-5 w-5 text-[#07d159]" />,
              },
              {
                title: "Get stock, repay weekly",
                desc: "Same‑day payout. 12 weekly debits. Settle anytime.",
                icon: <CalendarClock className="h-5 w-5 text-[#07d159]" />,
              },
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-xl bg-slate-100 mb-2">
                    {s.icon}
                  </div>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold">Estimate your plan</h3>
              <p className="text-slate-600 mt-1">
                Enter a stock amount to preview weekly repayments. Final pricing
                is tailored to your business.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div>
                  <Label>Stock amount (ZAR)</Label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min={10000}
                    step={5000}
                  />
                </div>
                <div>
                  <Label>Flat fee % (example)</Label>
                  <Input
                    type="number"
                    value={feePct}
                    onChange={(e) => setFeePct(Number(e.target.value))}
                    min={1}
                    max={15}
                    step={0.5}
                  />
                </div>
                <div>
                  <Label>Term</Label>
                  <Input value="3 months • 12 weeks" readOnly />
                </div>
              </div>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <SummaryStat
                  label="Weekly"
                  value={formatZAR(plan.weekly)}
                  sub={`x ${plan.weeks} weeks`}
                />
                <SummaryStat
                  label="Total repay"
                  value={formatZAR(plan.total)}
                  sub={`incl. ${feePct}% flat fee`}
                />
                <SummaryStat
                  label="Settle anytime"
                  value={"Save 100%"}
                  sub="of remaining fees"
                />
              </div>
            </div>
            <div>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Basic eligibility</CardTitle>
                  <CardDescription>What we look for</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {[
                      "South African SME trading 6+ months",
                      "Monthly turnover typically R80k+",
                      "Sales with fast sell‑through (retail, ecommerce, wholesalers)",
                      "Bank statements (last 6 months)",
                      "No severe adverse listings in last 6 months",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-slate-600" />{" "}
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-4 w-full rounded-2xl bg-[#07d159] hover:bg-[#05b147] text-white"
                    onClick={() => (window.location.hash = "#quick-estimate")}
                  >
                    Check my eligibility
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold">Ready to stock up?</h3>
              <p className="mt-2 text-slate-600">
                Apply now and get a same‑day decision. If approved, we pay out
                the same day so you can place orders immediately.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2 items-start">
                  <Zap className="h-4 w-4 mt-0.5" /> 2‑minute online application
                </li>
                <li className="flex gap-2 items-start">
                  <Clock3 className="h-4 w-4 mt-0.5" /> 3‑month term • 12 weekly
                  debits
                </li>
                <li className="flex gap-2 items-start">
                  <Percent className="h-4 w-4 mt-0.5" /> 100% early‑settlement
                  discount
                </li>
              </ul>
            </div>
            <Card className="bg-slate-50 text-slate-900 rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle>Start your application</CardTitle>
                <CardDescription>
                  We only need the basics to begin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-3"
                  action="https://formsubmit.co/info@getfunds.co.za"
                  method="POST"
                >
                  <div>
                    <Label htmlFor="business">Business name</Label>
                    <Input
                      name="Business Name"
                      id="business"
                      placeholder="e.g. Sunshine Traders (Pty) Ltd"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="contact">Contact person</Label>
                      <Input
                        name="Contact Person"
                        id="contact"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        name="Phone"
                        id="phone"
                        type="tel"
                        placeholder="0XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="Email"
                      id="email"
                      type="email"
                      placeholder="name@company.co.za"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount">Stock amount needed</Label>
                    <Input
                      name="Stock Amount Needed"
                      id="amount"
                      type="number"
                      placeholder="R 150,000"
                      required
                    />
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://getfunds.co.za"
                  />
                  <Button
                    type="submit"
                    className="mt-2 rounded-2xl bg-[#07d159] hover:bg-[#05b147] text-white"
                  >
                    Submit & get a call back
                  </Button>
                  <p className="text-xs text-slate-500">
                    By submitting you agree to our standard assessment terms and
                    privacy policy.
                  </p>
                  {/* Optional: Add a hidden input for redirect after submit */}
                  {/* ...existing code... */}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center">
            Frequently asked questions
          </h3>
          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="q1">
              <AccordionTrigger>Is this a loan or an MCA?</AccordionTrigger>
              <AccordionContent>
                Stock Ignite is a re‑packaged merchant cash advance structured
                for 3 months with weekly repayments and a flat fee. There is no
                compounding interest and you can settle early with 100% fee
                discount.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>
                What businesses is it best for?
              </AccordionTrigger>
              <AccordionContent>
                SMEs with fast stock turn and good margins — retail, ecommerce,
                wholesalers, distributors — especially around seasonal peaks or
                supplier promotions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>
                How does the 100% early‑settlement discount work?
              </AccordionTrigger>
              <AccordionContent>
                If you settle before the end of the term, we waive all remaining
                fees. You only repay the principal plus the portion of the flat
                fee already accrued.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Any hidden costs?</AccordionTrigger>
              <AccordionContent>
                No. Pricing is a transparent flat fee agreed upfront. No
                initiation, monthly account, or early‑settlement penalties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>How quickly can I get funds?</AccordionTrigger>
              <AccordionContent>
                Same day once approved and signed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>Can I use it again?</AccordionTrigger>
              <AccordionContent>
                Yes — use, settle, and reignite as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="mt-6 text-xs text-slate-500 flex items-start gap-2">
            <HelpCircle className="h-4 w-4 mt-0.5" /> This product is intended
            for business purposes only and is subject to approval and
            affordability checks.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold">Prefer a quick chat?</h3>
              <p className="text-slate-600 mt-2">
                Speak to a Get Funds specialist about Stock Ignite. We’ll help
                you structure it around your sales cycle.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button className="rounded-2xl bg-[#07d159] hover:bg-[#05b147] text-white">
                  <Phone className="mr-2 h-4 w-4 " /> Request a call
                </Button>
                <Button variant="outline" className="rounded-2xl">
                  <Rocket className="mr-2 h-4 w-4" /> Book a demo
                </Button>
              </div>
            </div>
            <div>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Need to know</CardTitle>
                  <CardDescription>Key terms at a glance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5" /> Term: 3 months
                      • 12 weekly debits
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5" /> Same‑day
                      payout post‑approval
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5" /> 100% fee
                      waiver on early settlement
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5" /> Transparent
                      flat fee pricing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Get Funds (Pty) Ltd. All rights
            reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
            <a href="#" className="hover:text-slate-700">
              PAIA/POPIA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SummaryStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <div className="text-sm text-slate-500">{label}</div>
        <div className="text-2xl font-semibold">{value}</div>
        {sub && <div className="text-xs text-slate-500">{sub}</div>}
      </CardContent>
    </Card>
  );
}
