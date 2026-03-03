import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">handwerkstellenangebote.de</h3>
            <p className="text-sm leading-6 max-w-md">
              Die spezialisierte Stellenbörse für das deutsche Handwerk. Wir verbinden Tradition mit Zukunft und bringen Fachbetriebe mit den besten Talenten zusammen.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Für Bewerber</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('search')} className="hover:text-secondary">Jobsuche</button></li>
              <li><button onClick={() => onNavigate('candidates')} className="hover:text-secondary">Ratgeber</button></li>
              <li><button onClick={() => onNavigate('candidates')} className="hover:text-secondary">Gehaltsvergleich</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('impressum')} className="hover:text-secondary">Impressum</button></li>
              <li><button onClick={() => onNavigate('impressum')} className="hover:text-secondary">Datenschutz</button></li>
              <li><button onClick={() => onNavigate('impressum')} className="hover:text-secondary">AGB</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} handwerkstellenangebote.de. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};