import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    count: '500+',
    title: 'Verified Properties',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    count: '50+',
    title: 'New Projects',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    count: '100+',
    title: 'Individual Houses/Villas',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 4,
    count: '200+',
    title: 'Luxury Properties',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop&q=80',
  },
];

export function CategoryCards() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        <div className="mb-section-header">
          <h2 className="mb-section-title">We've got properties for everyone</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/properties"
              className="mb-category-card aspect-[4/3]"
            >
              <img src={category.image} alt={category.title} />
              <div className="mb-category-overlay" />
              <div className="mb-category-content">
                <p className="text-2xl md:text-3xl font-bold">{category.count}</p>
                <p className="text-sm md:text-base font-medium">{category.title}</p>
                <span className="inline-flex items-center gap-1 text-sm mt-2 opacity-80 group-hover:opacity-100">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
