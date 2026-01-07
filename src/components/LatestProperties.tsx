import { PropertyCard, Property } from './PropertyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const latestProperties: Property[] = [
  {
    id: '6',
    title: 'Spacious 4 BHK in Kondapur',
    type: 'Flat',
    city: 'Hyderabad',
    area: 'Kondapur',
    price: 22000000,
    priceUnit: 'onwards',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
    imageCount: 15,
    isVerified: true,
  },
  {
    id: '7',
    title: 'Independent House in Banjara Hills',
    type: 'Villa',
    city: 'Hyderabad',
    area: 'Banjara Hills',
    price: 120000000,
    priceUnit: 'negotiable',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8000,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
    imageCount: 24,
    isVerified: true,
  },
  {
    id: '8',
    title: 'Ready to Move 2 BHK in Kukatpally',
    type: 'Flat',
    city: 'Hyderabad',
    area: 'Kukatpally',
    price: 6500000,
    priceUnit: 'all inclusive',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=80',
    imageCount: 9,
    isVerified: true,
  },
  {
    id: '9',
    title: 'Commercial Plot in Financial District',
    type: 'Commercial',
    city: 'Hyderabad',
    area: 'Financial District',
    price: 50000000,
    priceUnit: 'per acre',
    sqft: 500,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80',
    imageCount: 6,
  },
  {
    id: '10',
    title: 'Gated Community Villa in Kompally',
    type: 'Villa',
    city: 'Hyderabad',
    area: 'Kompally',
    price: 35000000,
    priceUnit: 'onwards',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80',
    imageCount: 14,
    isVerified: true,
  },
  {
    id: '11',
    title: 'Affordable 1 BHK in Miyapur',
    type: 'Flat',
    city: 'Hyderabad',
    area: 'Miyapur',
    price: 3800000,
    priceUnit: 'negotiable',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop&q=80',
    imageCount: 7,
  },
];

export function LatestProperties() {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="mb-section-header">
          <h2 className="mb-section-title">Latest Properties</h2>
          <Link to="/properties" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {latestProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/properties">
            <Button className="mb-btn-outline">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
