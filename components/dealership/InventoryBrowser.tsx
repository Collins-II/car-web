"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDownUp, ArrowRight, Gauge, SlidersHorizontal } from "lucide-react";
import { formatPrice, vehicles } from "@/data/inventory";

type InventoryBrowserProps = {
  initialQuery?: string;
  initialMake?: string;
  initialBody?: string;
};

const makes = Array.from(new Set(vehicles.map((vehicle) => vehicle.make))).sort();

export default function InventoryBrowser({ initialQuery = "", initialMake = "", initialBody = "" }: InventoryBrowserProps) {
  const [query, setQuery] = useState(initialQuery);
  const [make, setMake] = useState(initialMake);
  const [body, setBody] = useState(initialBody);
  const [sort, setSort] = useState("featured");

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();
    const filtered = vehicles.filter((vehicle) => {
      const matchesSearch = !search || `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.body}`.toLowerCase().includes(search);
      return matchesSearch && (!make || vehicle.make === make) && (!body || vehicle.body === body);
    });

    if (sort === "price-low") return filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-high") return filtered.sort((a, b) => b.price - a.price);
    if (sort === "newest") return filtered.sort((a, b) => b.year - a.year);
    return filtered;
  }, [body, make, query, sort]);

  function clearFilters() {
    setQuery("");
    setMake("");
    setBody("");
    setSort("featured");
  }

  return (
    <div>
      <div className="grid gap-3 rounded-2xl border border-[#e6e6df] bg-white p-4 shadow-[0_12px_40px_rgba(32,35,29,0.04)] md:grid-cols-[1fr_180px_160px_180px] md:p-5">
        <label className="flex items-center gap-3 rounded-xl bg-[#f5f5f1] px-4 py-3">
          <SlidersHorizontal size={16} className="shrink-0 text-[#8a8c83]" />
          <span className="sr-only">Search by make or model</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Make, model or keyword"
            className="min-w-0 flex-1 bg-transparent text-sm text-[#262920] outline-none placeholder:text-[#9b9d94]"
          />
        </label>
        <label className="rounded-xl bg-[#f5f5f1] px-4 py-3">
          <span className="sr-only">Filter by make</span>
          <select value={make} onChange={(event) => setMake(event.target.value)} className="w-full bg-transparent text-sm text-[#464940] outline-none">
            <option value="">All makes</option>
            {makes.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label className="rounded-xl bg-[#f5f5f1] px-4 py-3">
          <span className="sr-only">Filter by body style</span>
          <select value={body} onChange={(event) => setBody(event.target.value)} className="w-full bg-transparent text-sm text-[#464940] outline-none">
            <option value="">All body styles</option>
            {["SUV", "Sedan", "Coupe", "Wagon"].map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label className="flex items-center gap-2 rounded-xl bg-[#f5f5f1] px-4 py-3">
          <ArrowDownUp size={15} className="shrink-0 text-[#8a8c83]" />
          <span className="sr-only">Sort inventory</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-transparent text-sm text-[#464940] outline-none">
            <option value="featured">Curated order</option>
            <option value="newest">Newest year</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className="mb-5 mt-8 flex items-center justify-between">
        <p className="text-sm text-[#777970]"><span className="font-semibold text-[#292c25]">{results.length} vehicles</span> selected with care</p>
        {(query || make || body) && <button onClick={clearFilters} className="text-xs font-semibold text-[#55594f] underline underline-offset-4">Clear filters</button>}
      </div>

      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((vehicle) => (
            <article key={vehicle.slug} className="group overflow-hidden rounded-[20px] border border-[#e8e8e2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(32,35,29,0.1)]">
              <Link href={`/inventory/${vehicle.slug}`} className="block">
                <div
                  role="img"
                  aria-label={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="relative aspect-[1.48] overflow-hidden bg-[#efefeb] bg-cover bg-center transition duration-500 group-hover:bg-[length:105%]"
                  style={{ backgroundImage: `url("${vehicle.image}")` }}
                >
                  {vehicle.badge && <span className="absolute left-4 top-4 rounded-full bg-[#f5f7ed] px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-[#4d5a37]">{vehicle.badge}</span>}
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#888a81]">{vehicle.year} <span className="mx-1 text-[#c5c6bf]">/</span> {vehicle.body}</p>
                    <span className="text-[10px] text-[#8b8d85]">{vehicle.color}</span>
                  </div>
                  <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.04em] text-[#24271f]">{vehicle.make} <span className="font-normal">{vehicle.model}</span></h3>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#797c73]">
                    <Gauge size={14} /> {vehicle.mileage.toLocaleString()} km <span className="text-[#d0d1ca]">·</span> {vehicle.transmission}
                  </div>
                  <div className="mt-5 flex items-end justify-between border-t border-[#edede8] pt-4">
                    <div>
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#96988f]">Asking price</span>
                      <span className="mt-1 block text-[17px] font-semibold tracking-[-0.03em] text-[#24271f]">{formatPrice(vehicle.price)}</span>
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f4ed] text-[#44483d] transition group-hover:bg-[#d3ed88]"><ArrowRight size={16} /></span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#d8d9d1] bg-white px-6 py-20 text-center">
          <h2 className="text-xl font-semibold text-[#272a23]">No exact match just yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#777970]">Try another make or body style, or speak with our team and we’ll help find the right car for you.</p>
          <button onClick={clearFilters} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#20231d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3a3e34]">Reset filters <ArrowRight size={15} /></button>
        </div>
      )}
    </div>
  );
}
