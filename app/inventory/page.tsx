import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InventoryBrowser from "@/components/dealership/InventoryBrowser";

export const metadata: Metadata = {
  title: "The Collection | Motive Motor Collection",
  description: "Explore the carefully selected car collection at Motive in Lusaka.",
};

type InventoryPageProps = {
  searchParams: Promise<{ q?: string; make?: string; body?: string }>;
};

export default async function InventoryPage({ searchParams }: InventoryPageProps) {
  const { q = "", make = "", body = "" } = await searchParams;

  return (
    <main className="min-h-screen bg-[#f8f8f5] px-5 pb-20 pt-12 text-[#22251f] sm:px-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b7e74] transition hover:text-[#252820]"><ArrowLeft size={14} /> Back to Motive</Link>
        <div className="mb-9 mt-8 flex flex-col justify-between gap-5 sm:mb-12 sm:mt-10 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#818579]">Thoughtfully chosen, ready for you</p>
            <h1 className="mt-3 text-4xl font-medium tracking-[-0.07em] text-[#22251f] sm:text-5xl">The collection.</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#777970]">A considered edit of exceptional cars, each selected for its character, condition and the journey ahead.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#55594f] transition hover:text-[#20231d]">Looking for something specific? <span className="underline underline-offset-4">Talk to us</span></Link>
        </div>
        <InventoryBrowser initialQuery={q} initialMake={make} initialBody={body} />
      </div>
    </main>
  );
}
