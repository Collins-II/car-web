import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, MoveUpRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Talk to Motive | Motive Motor Collection",
  description: "Speak with the Motive team about a vehicle, arranging a viewing or finding the right car.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[75vh] bg-[#f8f8f5] px-5 pb-20 pt-12 text-[#22251f] sm:px-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b7e74] transition hover:text-[#252820]"><ArrowLeft size={14} /> Back to Motive</Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#818579]">We’re listening</p>
            <h1 className="mt-4 max-w-xl text-5xl font-medium leading-[1.04] tracking-[-0.07em] sm:text-6xl">A good place to start is a conversation.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#74776e]">Have a car in mind, want to arrange a viewing, or just need a little guidance? Tell us what you’re looking for. There’s a real person here to help.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/260970785901" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#20231d] px-6 py-4 text-[13px] font-semibold text-white transition hover:bg-[#3a3e34]">Message us on WhatsApp <MoveUpRight size={15} /></a>
              <a href="tel:+260970785901" className="inline-flex items-center gap-2 rounded-full border border-[#ddded7] px-6 py-4 text-[13px] font-semibold text-[#41443c] transition hover:bg-white"><Phone size={15} /> Call the team</a>
            </div>
          </div>
          <div className="rounded-[22px] border border-[#e7e7e0] bg-white p-6 sm:p-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877e]">Motive Motor Collection</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em]">Here when you need us.</h2>
            <div className="my-7 border-t border-[#edede8]" />
            <div className="space-y-6">
              <a href="tel:+260970785901" className="group flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f2f3ed] text-[#687153]"><Phone size={17} /></span>
                <span><span className="block text-xs text-[#8b8d85]">Call us</span><span className="mt-1 block text-sm font-semibold text-[#34372f] group-hover:underline">+260 970 785 901</span></span>
              </a>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f2f3ed] text-[#687153]"><MapPin size={17} /></span>
                <span><span className="block text-xs text-[#8b8d85]">Find us</span><span className="mt-1 block text-sm font-semibold text-[#34372f]">Lusaka, Zambia</span><span className="mt-1 block text-xs leading-5 text-[#8b8d85]">Contact our team to arrange a personal viewing.</span></span>
              </div>
            </div>
            <div className="mt-8 border-t border-[#edede8] pt-6">
              <Link href="/inventory" className="inline-flex items-center gap-2 text-sm font-semibold text-[#55594f] transition hover:text-[#20231d]">Browse the collection <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-14 overflow-hidden rounded-[22px] bg-[#e9eddf] px-6 py-8 sm:px-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#727b60]">The Motive promise</p>
          <p className="mt-3 max-w-2xl text-xl font-medium leading-8 tracking-[-0.03em] text-[#34372f]">No question is too small. We’ll give you thoughtful answers and the space to make the decision that feels right.</p>
        </div>
      </div>
    </main>
  );
}
