'use client';

import { ArtisanRegistrationForm } from '@/components/artisans/artisan-registration-form';
import { useLanguage } from '@/context/language-context';
import { Feather } from 'lucide-react';

export default function RegisterArtisanPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
          <Feather className="size-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          {t('register_as_artisan')}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('artisan_registration_desc')}
        </p>
      </div>

      <ArtisanRegistrationForm />
    </div>
  );
}
