import { SearchTabs } from './SearchTabs';

export function HeroSection() {
  return (
    <section className="bg-background py-10 md:py-16">
      <div className="container">
        {/* Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-light text-foreground">
            Properties for the{' '}
            <span className="font-bold italic text-primary" style={{ fontFamily: 'Georgia, serif' }}>
              Global Indian!
            </span>
          </h1>
        </div>

        {/* Search Component */}
        <SearchTabs />
      </div>
    </section>
  );
}
