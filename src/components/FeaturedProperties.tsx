import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PropertyCard, Property } from './PropertyCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3 BHK Apartment in Gachibowli',
    type: 'Flat',
    city: 'Hyderabad',
    area: 'Gachibowli',
    price: 15000000,
    priceUnit: 'onwards',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    imageCount: 12,
    isFeatured: true,
    isVerified: true,
  },
  {
    id: '2',
    title: 'Premium Villa in Jubilee Hills',
    type: 'Villa',
    city: 'Hyderabad',
    area: 'Jubilee Hills',
    price: 85000000,
    priceUnit: 'negotiable',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    imageCount: 18,
    isVerified: true,
  },
  {
    id: '3',
    title: 'Modern 2 BHK in Hitech City',
    type: 'Flat',
    city: 'Hyderabad',
    area: 'Hitech City',
    price: 9500000,
    priceUnit: 'all inclusive',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1350,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    imageCount: 8,
    isVerified: true,
  },
  {
    id: '4',
    title: 'HMDA Approved Plot in Shamirpet',
    type: 'Plot',
    city: 'Hyderabad',
    area: 'Shamirpet',
    price: 4500000,
    priceUnit: 'per acre',
    sqft: 200,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80',
    imageCount: 5,
  },
  {
    id: '5',
    title: 'Commercial Space in Madhapur',
    type: 'Commercial',
    city: 'Hyderabad',
    area: 'Madhapur',
    price: 25000000,
    priceUnit: 'onwards',
    sqft: 3000,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
    imageCount: 10,
    isVerified: true,
  },
];

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container">
        <div className="mb-section-header">
          <div>
            <h2 className="mb-section-title">Popular Owner Properties</h2>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/properties" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              See all Properties <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="hidden md:flex gap-1">
              <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full h-9 w-9">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full h-9 w-9">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {featuredProperties.map((property) => (
            <div key={property.id} className="flex-shrink-0 w-[280px] md:w-[300px]">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
