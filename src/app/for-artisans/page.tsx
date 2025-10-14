'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

const benefits = [
  'benefit_artisans_1',
  'benefit_artisans_2',
  'benefit_artisans_3',
  'benefit_artisans_4',
  'benefit_artisans_5',
  'benefit_artisans_6',
];

export default function ForArtisansPage() {
  const pageImage = PlaceHolderImages.find(
    (img) => img.id === 'artisan-group'
  );
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          {t('artisans_page_title')}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('artisans_page_desc')}
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
            {t('why_join_sanskara')}
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="size-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{t(benefit as any)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 lg:mt-24 text-center bg-card p-8 md:p-12 rounded-lg border">
        <h2 className="font-headline text-3xl font-bold">
          {t('ready_to_turn_waste')}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {t('ready_to_turn_waste_desc')}
        </p>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/register-artisan">
            {t('register_as_artisan')} <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
