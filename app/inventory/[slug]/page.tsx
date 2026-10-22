import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Gauge, MapPin, MoveUpRight, Phone, ShieldCheck } from "lucide-react";
import { formatPrice, vehicles } from "@/data/inventory";

type VehiclePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) return { title: "Vehicle not found | Motive Motor Collection" };
  return {
    title: `${vehicle.year} ${vehicle.make} ${vehicle.model} | Motive`,
    description: vehicle.description,
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) notFound();

  const message = encodeURIComponent(`Hello Motive, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model}.`);
  const relatedVehicles = vehicles.filter((item) => item.slug !== vehicle.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f8f8f5] px-5 pb-20 pt-10 text-[#22251f] sm:px-8 sm:pt-14 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <Link href="/inventory" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7b7e74] transition hover:text-[#252820]"><ArrowLeft size={14} /> Back to the collection</Link>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <div>
            <div className="relative aspect-[1.4] overflow-hidden rounded-[22px] bg-[#e8e9e2] sm:aspect-[1.55]">
              <div role="img" aria-label={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${vehicle.image}")` }} />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#45493f] backdrop-blur">{vehicle.year} collection</span>
            </div>
            <div className="mt-8 border-t border-[#e6e6df] pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877e]">A closer look</p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#686c62]">{vehicle.description} Every detail is here to help you decide with confidence. Get in touch to arrange a personal viewing or ask us anything about this car.</p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Year", String(vehicle.year)],
                ["Mileage", `${vehicle.mileage.toLocaleString()} km`],
                ["Transmission", vehicle.transmission],
                ["Fuel", vehicle.fuel],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[#e7e7e0] bg-white p-4">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.13em] text-[#92948b]">{label}</span>
                  <span className="mt-2 block text-sm font-semibold text-[#34372f]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[22px] border border-[#e7e7e0] bg-white p-6 sm:p-8 lg:sticky lg:top-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877e]">Motive selection</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.06em] text-[#24271f]">{vehicle.make}<br /><span className="font-normal">{vehicle.model}</span></h1>
            <p className="mt-2 text-sm text-[#777970]">{vehicle.year} <span className="mx-1 text-[#d0d1ca]">/</span> {vehicle.body} <span className="mx-1 text-[#d0d1ca]">/</span> {vehicle.color}</p>
            <div className="my-6 border-t border-[#edede8]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#96988f]">Asking price</span>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.05em] text-[#24271f]">{formatPrice(vehicle.price)}</p>
            <div className="mt-6 space-y-3 text-xs text-[#696d63]">
              <p className="flex items-center gap-2"><Gauge size={15} className="text-[#858a78]" /> {vehicle.mileage.toLocaleString()} km driven</p>
              <p className="flex items-center gap-2"><MapPin size={15} className="text-[#858a78]" /> Available to view in Lusaka</p>
              <p className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#858a78]" /> Carefully selected by Motive</p>
            </div>
            <a href={`https://wa.me/260970785901?text=${message}`} target="_blank" rel="noreferrer" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#20231d] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#3a3e34]">
              Enquire about this car <MoveUpRight size={15} />
            </a>
            <a href="tel:+260970785901" className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#e4e5dd] px-5 py-3.5 text-sm font-semibold text-[#41443c] transition hover:bg-[#f6f6f2]">
              <Phone size={15} /> Call our team
            </a>
            <p className="mt-5 text-center text-[10px] leading-5 text-[#92948c]">Questions are welcome. Our team is happy to help you get to know this car.</p>
          </aside>
        </div>

        <section className="mt-20 border-t border-[#e6e6df] pt-10">
          <div className="mb-7 flex items-end justify-between">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877e]">A few more possibilities</p><h2 className="mt-2 text-2xl font-medium tracking-[-0.05em]">Also in the collection</h2></div>
            <Link href="/inventory" className="hidden items-center gap-2 text-xs font-semibold text-[#55594f] sm:flex">View all <ArrowRight size={14} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedVehicles.map((item) => (
              <Link key={item.slug} href={`/inventory/${item.slug}`} className="group flex items-center gap-4 rounded-2xl border border-[#e7e7e0] bg-white p-3 transition hover:shadow-md">
                <div className="h-20 w-24 shrink-0 rounded-xl bg-cover bg-center" role="img" aria-label={`${item.year} ${item.make} ${item.model}`} style={{ backgroundImage: `url("${item.image}")` }} />
                <div className="min-w-0"><p className="truncate text-sm font-semibold text-[#34372f]">{item.make} {item.model}</p><p className="mt-1 text-xs text-[#85877e]">{item.year} · {item.body}</p><p className="mt-2 text-xs font-semibold text-[#46493f]">{formatPrice(item.price)}</p></div>
                <ArrowRight size={14} className="ml-auto shrink-0 text-[#a1a795] transition group-hover:text-[#52603c]" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
