import React from 'react';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 312, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 245, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 289, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 178, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 156, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 198, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 134, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 97, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 112, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 89, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 104, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 118, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 67, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 82, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 56, slug: 'freiburg' },
  { name: 'Luebeck', region: 'Schleswig-Holstein', jobs: 43, slug: 'luebeck' },
  { name: 'Heidelberg', region: 'Baden-Wuerttemberg', jobs: 48, slug: 'heidelberg' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 52, slug: 'muenster' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 38, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 64, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Handwerk-Jobs in deutschen Staedten</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Finden Sie Stellenangebote im Handwerk in Ihrer Naehe. Wir bieten Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <a
              key={city.slug}
              href={`#/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-secondary hover:shadow-md transition-all group"
            >
              <MapPin className="h-4 w-4 text-secondary flex-shrink-0 group-hover:text-primary" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800 text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-400">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">Handwerk-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Deutschland ist das Land des Handwerks. Mit ueber einer Million Handwerksbetrieben und rund 5,6 Millionen Beschaeftigten gehoert das Handwerk zu den staerksten Wirtschaftssektoren. Von der Sanitaer- und Heizungstechnik in Berlin ueber den Fahrzeugbau in Stuttgart bis hin zum traditionellen Holzhandwerk im Schwarzwald - jede Region hat ihre Staerken.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Besonders gefragt sind Fachkraefte in Grossstaedten wie Berlin, Muenchen, Hamburg, Koeln und Frankfurt. Aber auch Staedte wie Nuernberg, Stuttgart und Hannover verzeichnen eine stark steigende Nachfrage nach qualifizierten Handwerkern, Meistern und Gesellen.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ob Elektriker, Anlagenmechaniker SHK, Tischler, Maler, Dachdecker oder Metallbauer - auf handwerkstellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um Handwerk-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
