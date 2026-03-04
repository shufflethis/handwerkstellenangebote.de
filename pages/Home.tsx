import React, { useState } from 'react';
import { Search, MapPin, Wrench, Zap, Truck, Hammer, Droplets, ArrowRight, CheckCircle, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { JobCard } from '../components/JobCard';
import { JobPosting } from '../types';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Data
  const jobs: JobPosting[] = [
  {
    id: '1',
    title: 'Steuerfachangestellter / Steuerfachwirt (m/w/d)',
    company: 'Kreh - Hofmann - Widmer Wirtschaftsprüfer und SteuerberaterSofort-Bewerbung',
    location: 'Babenhausen/Hessen',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '2',
    title: 'Fachkraft für Lagerlogistik (m/w/d) in Vollzeit',
    company: 'ProGlass GmbHSofort-Bewerbung',
    location: 'Weilheim an der Teck',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '3',
    title: 'Lagermitarbeiter / Kommissionierer als Vorarbeiter Lager / Logistik (m/w/d)',
    company: 'CEVA Logistics GmbH',
    location: 'Greven/Westfalen',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '4',
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Löhne',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '5',
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Espelkamp',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '6',
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Lübbecke',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '7',
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Hüllhorst',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '8',
    title: 'Zahntechniker (m/w/d) für den Bereich CAD / CAM',
    company: 'DELABO.GROUPSofort-Bewerbung',
    location: 'Klein Rönnau',
    type: 'Vollzeit',
    tags: [],
    postedDate: '2026-03-04'
  },
  {
    id: '9',
    title: 'Fachkraft Stuckateur-Handwerk m/w/d',
    company: 'Mauer Stuckateur GmbH',
    location: 'Wangen im Allgäu',
    type: 'Vollzeit',
    tags: ['Stuckateur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '10',
    title: 'Handwerker (m/w/d)',
    company: 'TJ-Montageservice Küchenmontage',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    tags: ['Tischler/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '11',
    title: 'Mitarbeiter (m/w/d) im Gartenservice und Handwerk',
    company: 'Norden gartenservice',
    location: 'Husum, Nordsee',
    type: 'Vollzeit',
    tags: ['Helfer/in - Gartenbau'],
    postedDate: '2026-03-03'
  },
  {
    id: '12',
    title: 'MetallbauermeisterB. Prof. Metallbauer-Handwerk (m/w/d)',
    company: 'E.D.E.L. Zeitarbeit GmbH',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    tags: ['Metallbauermeister/in/Bachelor Professional im Metallbauer-Handwerk'],
    postedDate: '2026-03-03'
  },
  {
    id: '13',
    title: 'Kaufmann/-frau für Büromanagement im Handwerk',
    company: 'Werner & Sohn GmbH',
    location: 'Fuldatal',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Büromanagement'],
    postedDate: '2026-03-03'
  },
  {
    id: '14',
    title: 'Büroleiterin - Handwerk',
    company: 'OSNEBAU GmbH',
    location: 'Obertshausen',
    type: 'Vollzeit',
    tags: ['Büroleiter/in - Handwerk'],
    postedDate: '2026-03-02'
  },
  {
    id: '15',
    title: 'Elektroniker Automatisierungstechnik Handwerk (m/w/d)',
    company: 'Arena Personal Management GmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    tags: ['Elektroniker/in - Automatisierungstechnik (Handwerk)'],
    postedDate: '2026-03-02'
  },
  {
    id: '16',
    title: 'Metallbauer Handwerk m/w/d',
    company: 'Arena Personal Management GmbH',
    location: 'Heidelberg, Neckar',
    type: 'Vollzeit',
    tags: ['Metallbauer/in - Konstruktionstechnik'],
    postedDate: '2026-03-02'
  },
  {
    id: '17',
    title: 'Allrounder – Handwerk (m/w/d)',
    company: 'STÜWA Konrad Stükerjürgen GmbH',
    location: 'Rietberg',
    type: 'Vollzeit',
    tags: ['Helfer/in - Tiefbau'],
    postedDate: '2026-03-02'
  },
  {
    id: '18',
    title: 'Malerhelfer (m/w/d) Handwerk',
    company: 'WEISS Personalmanagement GmbH - Darmstadt',
    location: 'Darmstadt',
    type: 'Vollzeit',
    tags: ['Helfer/in - Malerei, Lackiererei'],
    postedDate: '2026-03-02'
  },
  {
    id: '19',
    title: 'Helfer Handwerk m/w/d',
    company: 'Actief Personalmanagement GmbH',
    location: 'Biebelried',
    type: 'Vollzeit',
    tags: ['Helfer/in - Feinmechanik, Werkzeugbau'],
    postedDate: '2026-03-02'
  },
  {
    id: '20',
    title: 'Mitarbeiter im Handwerk (m/w/d)',
    company: 'AlphaConsult KG - Magdeburg',
    location: 'Magdeburg',
    type: 'Vollzeit',
    tags: ['Helfer/in - Metallbau'],
    postedDate: '2026-03-01'
  },
  {
    id: '21',
    title: 'Fachhelfer Handwerk (m/w/d)',
    company: 'AlphaConsult KG - BS Mannheim',
    location: 'Mannheim',
    type: 'Vollzeit',
    tags: ['Helfer/in - Metallbau'],
    postedDate: '2026-02-27'
  },
  {
    id: '22',
    title: 'Mitarbeiter im Handwerk (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Trier',
    type: 'Vollzeit',
    tags: ['Kunsthandwerker/in'],
    postedDate: '2026-02-26'
  },
  {
    id: '23',
    title: 'Produktionsmitarbeiter (m/w/d) Handwerk',
    company: 'Walter-Fach-Kraft Personal GmbH',
    location: 'Syke',
    type: 'Vollzeit',
    tags: ['Beton- und Stahlbetonbauer/in'],
    postedDate: '2026-02-26'
  },
  {
    id: '24',
    title: 'Maler im Handwerk (m/w/d)',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Sarstedt',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Maler/in'],
    postedDate: '2026-02-25'
  },
  {
    id: '25',
    title: 'Quereinsteiger m/w/d im Handwerk',
    company: 'Isolierungen Leipzig GmbH Abt. P',
    location: 'Leipzig',
    type: 'Vollzeit',
    tags: ['Industrie-Isolierer/in'],
    postedDate: '2026-02-24'
  }
];

  const trades = [
    { name: 'Sanitär, Heizung, Klima', icon: Droplets, jobs: 1450, desc: 'Von Wärmepumpen bis zum Traumbad.' },
    { name: 'Elektrotechnik', icon: Zap, jobs: 2300, desc: 'Smart Home, PV-Anlagen und Installation.' },
    { name: 'Bau & Ausbau', icon: Hammer, jobs: 3100, desc: 'Maurer, Maler, Stuckateure und mehr.' },
    { name: 'KFZ & Mobilität', icon: Truck, jobs: 980, desc: 'Mechatroniker für PKW und Nutzfahrzeuge.' },
    { name: 'Holz & Metall', icon: Wrench, jobs: 1200, desc: 'Tischler, Metallbauer und Konstrukteure.' },
    { name: 'Lebensmittel', icon: Users, jobs: 500, desc: 'Bäcker, Konditoren und Fleischer.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://picsum.photos/seed/handwerk1/1920/1080" alt="Handwerk Hintergrund" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Karriere mit <span className="text-secondary">Zukunft</span>. <br />
            Jobs im Handwerk.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            Finde jetzt passende Stellenangebote in deiner Region. Vom Azubi bis zum Meister – wir bringen Handwerk und Fachkräfte zusammen.
          </p>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-4 shadow-lg flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Beruf, Stichwort (z.B. Elektriker)" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Ort oder PLZ" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
              />
            </div>
            <Button size="lg" className="md:w-auto">Jobs finden</Button>
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Aktuelle Top-Jobs</h2>
              <p className="text-gray-600 mt-2">Die neuesten Stellenangebote geprüfter Handwerksbetriebe.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex">Alle Jobs ansehen <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">Alle Jobs ansehen</Button>
          </div>
        </div>
      </section>

      {/* TRADE CATEGORIES (Gewerkeüberblick) */}
      <section className="py-16 bg-white" id="trades">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Gewerke im Überblick</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Das Handwerk ist vielfältig. Mit über 130 Ausbildungsberufen bietet es für jedes Talent den richtigen Platz. Hier sind die beliebtesten Fachbereiche.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.map((trade, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-gray-100 hover:border-secondary bg-white shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <trade.icon className="w-6 h-6 text-gray-700 group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trade.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{trade.desc}</p>
                <span className="text-secondary font-medium text-sm group-hover:underline">{trade.jobs} offene Stellen</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO / SEO CONTENT SECTION */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700">
          
          <h2 className="text-3xl font-bold text-primary mb-6">Warum eine Karriere im Handwerk wählen?</h2>
          <p>
            Das deutsche Handwerk ist der Motor der Wirtschaft. Mit einem Jahresumsatz von mehreren hundert Milliarden Euro und Millionen Beschäftigten bietet es krisensichere Arbeitsplätze. Doch warum lohnt sich eine Bewerbung über <strong>handwerkstellenangebote.de</strong>?
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Vorteile für Bewerber</h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
              <span><strong>Krisensicherheit:</strong> Handwerk hat „goldenen Boden“. Gebaut, repariert und installiert wird immer – unabhängig von der Konjunktur.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
              <span><strong>Karrierechancen:</strong> Vom Azubi zum Gesellen, dann zum Meister oder Techniker. Viele Betriebe suchen dringend Nachfolger für die Geschäftsführung.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
              <span><strong>Sinnstiftende Arbeit:</strong> Am Ende des Tages sieht man, was man geschaffen hat. Sei es ein neues Bad, ein gedecktes Dach oder ein funktionierendes Stromnetz.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
              <span><strong>Attraktive Gehälter:</strong> Fachkräfte sind rar. Entsprechend steigen die Löhne. Meistergehälter können oft mit akademischen Berufen mithalten.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Wichtige Berufsbilder im Detail</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary my-6">
            <h4 className="text-xl font-bold mb-2">Anlagenmechaniker SHK</h4>
            <p className="text-sm">
              Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik sind die Helden der Energiewende. Sie installieren Wärmepumpen, moderne Bäder und komplexe Lüftungssysteme. Ein Beruf mit Hightech-Anspruch und viel Kundenkontakt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary my-6">
            <h4 className="text-xl font-bold mb-2">Elektroniker für Energie- und Gebäudetechnik</h4>
            <p className="text-sm">
              Ohne Strom läuft nichts. Elektroniker planen und installieren die elektrische Versorgung, von der Steckdose bis zur PV-Anlage auf dem Dach. Smart Home und E-Mobilität sind die großen Zukunftsthemen.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Häufig gestellte Fragen (FAQ)</h3>
          
          <div className="space-y-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg">
                <span>Kann ich als Quereinsteiger im Handwerk anfangen?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Ja! Viele Betriebe suchen händeringend motivierte Mitarbeiter. Oft ist eine Umschulung möglich, oder man startet als Helfer und qualifiziert sich on-the-job weiter.
              </p>
            </details>
            
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg">
                <span>Wie finde ich Ausbildungsplätze für 2025?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Nutzen Sie unsere Suchfunktion und filtern Sie nach "Ausbildung". Die meisten Ausbildungen starten im August oder September, aber Bewerbungen sollten frühzeitig versendet werden.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg">
                <span>Was verdient man als Meister?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Das Gehalt hängt stark vom Gewerk und der Region ab. Im Durchschnitt liegen Meistergehälter in Deutschland zwischen 45.000 € und 70.000 € brutto im Jahr, bei Selbstständigkeit oft deutlich höher.
              </p>
            </details>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-primary/80 mb-8 text-lg max-w-2xl mx-auto">
            Registrieren Sie sich jetzt kostenlos und finden Sie Ihren Traumjob oder die besten Mitarbeiter für Ihren Betrieb.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">Job suchen</Button>
            <Button size="lg" className="bg-primary text-white hover:bg-slate-800">Für Arbeitgeber</Button>
          </div>
        </div>
      </section>
    </div>
  );
};