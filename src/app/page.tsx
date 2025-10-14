
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Feather,
  Factory,
  ShoppingBag,
  Palette,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProductCard } from '@/components/marketplace/product-card';
import { SanskaraLogo } from '@/components/layout/sanskara-logo';
import { useLanguage } from '@/context/language-context';

const features = [
  {
    icon: <Factory className="size-8 text-primary" />,
    title: 'feature_waste_stream',
    description: 'feature_waste_stream_desc',
  },
  {
    icon: <Feather className="size-8 text-primary" />,
    title: 'feature_artisan_skill',
    description: 'feature_artisan_skill_desc',
  },
  {
    icon: <SanskaraLogo className="size-8 text-primary" />,
    title: 'feature_intelligent_matching',
    description: 'feature_intelligent_matching_desc',
  },
  {
    icon: <Palette className="size-8 text-primary" />,
    title: 'feature_ai_design',
    description: 'feature_ai_design_desc',
  },
  {
    icon: <ShoppingBag className="size-8 text-primary" />,
    title: 'feature_marketplace',
    description: 'feature_marketplace_desc',
  },
];

const mockProducts = [
  {
    id: '1',
    name: 'product_denim_tote',
    price: '3,800',
    artisan: 'artisan_rural_weavers',
    image: PlaceHolderImages.find(img => img.id === 'product-1'),
  },
  {
    id: '2',
    name: 'product_patchwork_rug',
    price: '7,200',
    artisan: 'artisan_creative_threads',
    image: PlaceHolderImages.find(img => img.id === 'product-2'),
  },
  {
    id: '3',
    name: 'product_silk_scarf',
    price: '2,500',
    artisan: 'artisan_artisan_alliance',
    image: PlaceHolderImages.find(img => img.id === 'product-3'),
  },
  {
    id: '4',
    name: 'product_remnant_wallet',
    price: '1,800',
    artisan: 'artisan_eco_crafters',
    image: PlaceHolderImages.find(img => img.id === 'product-4'),
  },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {t('slogan')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            {t('slogan_description')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/marketplace">
                {t('shop_upcycled_goods')} <ShoppingBag className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
              <Link href="/ai-designs">
                {t('create_with_ai')} <Palette className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              {t('how_it_works')}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('how_it_works_description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{t(feature.title as any)}</h3>
                  <p className="mt-1 text-muted-foreground">{t(feature.description as any)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div className='max-w-xl'>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                {t('featured_creations')}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                {t('featured_creations_desc')}
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/marketplace">
                {t('view_all')} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="font-headline text-2xl md:text-3xl font-bold">
                {t('for_artisans_title')}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {t('for_artisans_desc')}
              </p>
              <Button asChild className="mt-6">
                <Link href="/register-artisan">
                  {t('register_as_artisan')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="font-headline text-2xl md:text-3xl font-bold">
                {t('for_industries_title')}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {t('for_industries_desc')}
              </p>
              <Button asChild className="mt-6">
                <Link href="/for-industries">
                  {t('partner_with_us')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
