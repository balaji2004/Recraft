import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, Recycle, Users, ShoppingBag } from 'lucide-react';
import { ImpactChart } from '@/components/impact/impact-chart';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const impactStats = [
  {
    icon: <Recycle className="size-8 text-primary" />,
    value: '12.5 tons',
    label: 'Waste Diverted from Landfills',
    description: 'Fabric that has been given a new life instead of being thrown away.',
  },
  {
    icon: <Users className="size-8 text-primary" />,
    value: '300+',
    label: 'Artisans Empowered',
    description: 'Individuals and SHGs earning a sustainable livelihood through our platform.',
  },
  {
    icon: <ShoppingBag className="size-8 text-primary" />,
    value: '5,000+',
    label: 'Products Created',
    description: 'Unique, handcrafted items sold through the ReCraft Marketplace.',
  },
];

export default function ImpactPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'impact-hero');

  return (
    <div>
      <section className="relative h-[40vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Our Collective Impact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Transforming waste into worth, one thread at a time. See the
            difference we&apos;re making together.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <CardTitle className="font-headline text-xl">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
             <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
               <BarChart2 className="size-8 text-primary" />
             </div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Waste Diversion Over Time
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Tracking our progress in reducing textile waste, month by month.
            </p>
          </div>
          <div className="mt-12 h-[400px]">
            <ImpactChart />
          </div>
        </div>
      </section>
    </div>
  );
}
