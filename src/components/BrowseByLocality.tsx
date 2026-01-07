import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const localities = [
  { name: 'Gachibowli', count: 45 },
  { name: 'Hitech City', count: 62 },
  { name: 'Kondapur', count: 38 },
  { name: 'Jubilee Hills', count: 28 },
  { name: 'Banjara Hills', count: 22 },
  { name: 'Madhapur', count: 55 },
  { name: 'Kukatpally', count: 41 },
  { name: 'Miyapur', count: 33 },
  { name: 'Financial District', count: 29 },
  { name: 'Kompally', count: 25 },
];

export function BrowseByLocality() {
  return (
    <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container">
        <div className="mb-section-header">
          <h2 className="mb-section-title">Top Localities in Hyderabad</h2>
          <Link to="/properties" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {localities.map((locality) => (
            <Link
              key={locality.name}
              to={`/properties?area=${encodeURIComponent(locality.name)}`}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all group"
            >
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                {locality.name}
              </p>
              <p className="text-sm text-muted-foreground">{locality.count} Properties</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
