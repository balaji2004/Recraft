import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Achieve your corporate sustainability and circular economy goals.',
  'Responsibly manage and find value in pre-consumer textile waste.',
  'Receive detailed reports on waste diversion and social impact.',
  'Enhance your brand image by supporting local communities.',
  'Reduce landfill costs and environmental footprint.',
  'Gain a transparent and traceable supply chain for your waste materials.',
];

export default function ForIndustriesPage() {
  const pageImage = PlaceHolderImages.find(
    (img) => img.id === 'industry-waste'
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Partner for a Sustainable Future
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
          Transform your textile waste into a powerful asset for social good and
          environmental responsibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-6">
            Benefits of Partnering with Sanskara
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
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
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
      </div>

      <div className="mt-16 lg:mt-24 text-center bg-card p-8 md:p-12 rounded-lg border">
        <h2 className="font-headline text-3xl font-bold">
          Join Us in the Circular Economy
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Let's work together to create a closed-loop system for textiles.
          Register your industry to start mapping your waste streams and making a
          measurable impact.
        </p>
        <Button size="lg" className="mt-8">
          Partner With Us <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
