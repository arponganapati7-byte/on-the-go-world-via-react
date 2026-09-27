import { Suspense } from 'react';
import './App.css';
import type { CountryType } from './type';
import Countries from './components/Countries/Countries';

const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/all'
  );

  const data = await res.json();

  return data.countries;
};

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        
        {/* Background glow */}
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-10">
          
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
            🌍 Explore the world
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            World on the{' '}
            <span className="inline-block bg-linear-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              GO
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Discover countries, explore their flags, and keep track of
            the places you've visited.
          </p>

        </div>
      </section>

      {/* Countries */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Explore Countries
          </h2>

          <p className="mt-2 text-slate-400">
            Browse countries from around the world.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex min-h-64 items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-blue-400" />

                <p className="text-sm text-slate-400">
                  Loading countries...
                </p>
              </div>
            </div>
          }
        >
          <Countries countriesPromise={countriesPromise()} />
        </Suspense>
      </section>

    </main>
  );
}

export default App;