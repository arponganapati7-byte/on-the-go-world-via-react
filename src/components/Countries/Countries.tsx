import { use, useEffect, useState } from 'react';
import type { CountryType } from '../../type';
import Country from '../Country/Country';

interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

const VISITED_COUNTRIES_KEY = 'world-on-the-go-visited-countries';
const VISITED_FLAGS_KEY = 'world-on-the-go-visited-flags';

export default function Countries({
  countriesPromise,
}: CountriesProps) {
  const countries = use(countriesPromise);

  // Load saved countries from localStorage
  const [visitedCountries, setVisitedCountries] = useState<string[]>(() => {
    const saved = localStorage.getItem(VISITED_COUNTRIES_KEY);

    return saved ? JSON.parse(saved) : [];
  });

  // Load saved flags from localStorage
  const [visitedFlags, setVisitedFlags] = useState<string[]>(() => {
    const saved = localStorage.getItem(VISITED_FLAGS_KEY);

    return saved ? JSON.parse(saved) : [];
  });

  // Save visited countries whenever the state changes
  useEffect(() => {
    localStorage.setItem(
      VISITED_COUNTRIES_KEY,
      JSON.stringify(visitedCountries)
    );
  }, [visitedCountries]);

  // Save visited flags whenever the state changes
  useEffect(() => {
    localStorage.setItem(
      VISITED_FLAGS_KEY,
      JSON.stringify(visitedFlags)
    );
  }, [visitedFlags]);

  const handleVisitedCountry = (country: CountryType) => {
    const countryName = country.name.common;

    setVisitedCountries((current) => {
      if (current.includes(countryName)) {
        return current.filter((name) => name !== countryName);
      }

      return [...current, countryName];
    });
  };

  const handleVisitedFlag = (flag: string) => {
    setVisitedFlags((current) => {

      if (current.includes(flag)) {
        return current.filter((item) => item !== flag);
      }

      return [...current, flag];
    });
  };

  return (
    <div>
      {/* Statistics */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/3 p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl 
          text-center">
            <p className="text-sm text-slate-400">
              Total Countries
            </p>

            <p className="mt-1 text-2xl font-bold text-white">
              {countries.length}
            </p>
          </div>

          <div className="rounded-xl bg-white/4 p-4 text-center">
            <p className="text-sm text-slate-400">
              Visited Countries
            </p>

            <p className="mt-1 text-2xl font-bold text-emerald-400">
              {visitedCountries.length}
            </p>
          </div>

          <div className="rounded-xl bg-white/4 p-4 text-center">
            <p className="text-sm text-slate-400">
              Visited Flags
            </p>

            <p className="mt-1 text-2xl font-bold text-purple-400">
              {visitedFlags.length}
            </p>
          </div>

        </div>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            isVisited={visitedCountries.includes(country.name.common)}
            isFlagVisited={visitedFlags.includes(country.flags.flags.png)}
          />
        ))}

      </div>
    </div>
  );
}

