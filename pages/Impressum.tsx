import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <h2 className="text-xl font-semibold mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
        <p>
          HandwerkStellenangebote GmbH<br />
          Meisterstraße 123<br />
          10115 Berlin<br />
          Deutschland
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Vertreten durch</h2>
        <p>
          Max Mustermann (Geschäftsführer)
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
        <p>
          Telefon: +49 (0) 30 12345678<br />
          E-Mail: kontakt@handwerkstellenangebote.de
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Registereintrag</h2>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Charlottenburg<br />
          Registernummer: HRB 123456
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE123456789
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Haftungsausschluss (Disclaimer)</h2>
        <h3 className="font-semibold mt-4">Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        
        <h3 className="font-semibold mt-4">Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>
    </div>
  );
};