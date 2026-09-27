
import type { CountryType } from '../../type';

export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country: CountryType) => void;
  handleVisitedFlag: (flag: string) => void;
  isVisited: boolean;
  isFlagVisited: boolean;
}

export default function Country({
  country,
  handleVisitedCountry,
  handleVisitedFlag,
  isVisited,
  isFlagVisited,
}: CountryProps) {
  

  const handleVisited = () => {
    handleVisitedCountry(country);
  };

  const handleFlag = () => {
    handleVisitedFlag(country.flags.flags.png);
  };

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border p-5 shadow-xl transition-all duration-300 ${
        isVisited
          ? 'border-emerald-400/40 bg-emerald-400/10 shadow-emerald-950/30'
          : 'border-white/10 bg-white/4 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/7'
      }`}
    >
      {/* Country name */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white">
            {country.name.common}
          </h3>

          <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
            {country.name.official}
          </p>
        </div>

        {isVisited && (
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            ✓ Visited
          </span>
        )}
      </div>

      {/* Flag */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <img
          src={country.flags.flags.png}
          alt={country.flags.flags.alt || `${country.name.common} flag`}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Information */}
      <div className="mt-5 space-y-3">
        <div className="rounded-xl bg-white/4 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Country Code
          </p>

          <p className="mt-1 font-semibold text-slate-200">
            {country.ccn3.ccn3}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
        <button
          onClick={handleVisited}
          className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
            isVisited
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400'
              : 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400'
          }`}
        >
          {isVisited ? '✓ Visited' : 'Mark Visited'}
        </button>

        <button
          onClick={handleFlag}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
            isFlagVisited
              ? 'border-purple-400/40 bg-purple-400/15 text-purple-300 hover:bg-purple-400/25'
              : 'border-white/10 bg-white/5 text-slate-300 hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-purple-300'
          }`}
        >
          {isFlagVisited ? '✓ Flag Added' : 'Add Flag'}
        </button>
      </div>
    </article>
  );
}