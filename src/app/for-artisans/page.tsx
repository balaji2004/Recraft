import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Access a consistent supply of diverse textile materials.',
  'Reach a wider market for your handcrafted goods.',
  'Receive fair prices for your skills and products.',
  'Utilize AI-powered design tools to spark creativity.',
  'Become part of a supportive community of creators.',
  'Contribute to a sustainable, circular economy.',
];

export default function ForArtisansPage() {
  const pageImage = PlaceHolderImages.find(
    (img) => img.id === 'artisan-group'
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Empowering Artisans, Preserving Craft
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
          Join a movement that values your skill, provides sustainable income,
          and connects your craft to the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
          {pageImage && (
            <Image
              src={pageImage.imageUrl}
              alt={pageImage.description}
              data-ai-hint={pageImage.imageHint}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div>
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-6">
            Why Join Sanskara Marketplace?
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="size-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 lg:mt-24 text-center bg-card p-8 md:p-12 rounded-lg border">
        <h2 className="font-headline text-3xl font-bold">
          Ready to Turn Waste into Wonder?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Register today to start receiving materials, creating new products,
          and earning from your craft. We handle the logistics, so you can focus
          on what you do best: creating.
        </p>
        <Button size="lg" className="mt-8">
          Register as an Artisan <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
