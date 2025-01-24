import React, { useRef } from 'react';
import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';
import { menuItems } from '../data/MenuItems.jsx';
import { Hero3 } from '../components/Hero3';
import { Hero2 } from '../components/Hero2.jsx';
import { Hero4 } from '../components/Hero4.jsx';

export function Home() {
  const featureCardRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero featureCardRef={featureCardRef}/>
      <Hero2 />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div ref={featureCardRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <FeatureCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </main>
      <Hero4 />
      <Hero3 featureCardRef={featureCardRef} />
    </div>
  );
}

export default Home;
