
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Feather,
  Users,
  Factory,
  ShoppingBag,
  Palette,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProductCard } from '@/components/marketplace/product-card';
import { SanskaraLogo } from '@/components/layout/sanskara-logo';

const features = [
  {
    icon: <Factory className="size-8 text-primary" />,
    title: 'Waste Stream Mapping',
    description:
      'Textile industries register and categorize their pre-consumer waste materials.',
  },
  {
    icon: <Feather className="size-8 text-primary" />,
    title: 'Artisan Skill Matching',
    description:
      'Tribal artisans create detailed profiles, showcasing their unique skills and production capacity.',
  },
  {
    icon: <SanskaraLogo className="size-8 text-primary" />,
    title: 'Intelligent Matching',
    description:
      'Our algorithm matches available textile waste with suitable artisans.',
  },
  {
    icon: <Palette className="size-8 text-primary" />,
    title: 'AI-Powered Design Templates',
    description:
      'Generate unique, upcycled product designs tailored to specific waste materials.',
  },
  {
    icon: <ShoppingBag className="size-8 text-primary" />,
    title: 'Online Marketplace',
    description:
      'A platform for artisans to list and sell their upcycled creations.',
  },
];

const mockProducts = [
  {
    id: '1',
    name: 'Upcycled Denim Tote',
    price: '3,800',
    artisan: 'Rural Weavers',
    image: PlaceHolderImages.find(img => img.id === 'product-1'),
  },
  {
    id: '2',
    name: 'Patchwork Quilt Rug',
    price: '7,200',
    artisan: 'Creative Threads',
    image: PlaceHolderImages.find(img => img.id === 'product-2'),
  },
  {
    id: '3',
    name: 'Hand-Dyed Silk Scarf',
    price: '2,500',
    artisan: 'Artisan Alliance',
    image: PlaceHolderImages.find(img => img.id === 'product-3'),
  },
  {
    id: '4',
    name: 'Fabric Remnant Wallet',
    price: '1,800',
    artisan: 'Eco Crafters',
    image: PlaceHolderImages.find(img => img.id === 'product-4'),
  },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

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
            From Waste to Wonder
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Sanskara connects textile waste from industries with talented
            artisans, transforming scraps into beautiful, sustainable products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/marketplace">
                Shop Upcycled Goods <ShoppingBag className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
              <Link href="/ai-designs">
                Create with AI <Palette className="ml-2" />
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
              How It Works
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process to empower artisans and reduce waste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
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
                Featured Creations
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Handcrafted with skill, passion, and a commitment to sustainability.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/marketplace">
                View All <ArrowRight className="ml-2" />
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
                For Artisans & SHGs
              </h3>
              <p className="mt-4 text-muted-foreground">
                Access a steady stream of materials, find new markets for your
                crafts, and gain economic independence. Join our community of
                creators.
              </p>
              <Button asChild className="mt-6">
                <Link href="/for-artisans">
                  Register as an Artisan <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="font-headline text-2xl md:text-3xl font-bold">
                For Textile Industries
              </h3>
              <p className="mt-4 text-muted-foreground">
                Responsibly manage your pre-consumer waste, meet sustainability
                goals, and contribute to social upliftment. Partner with us for a
                circular economy.
              </p>
              <Button asChild className="mt-6">
                <Link href="/for-industries">
                  Partner with Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
