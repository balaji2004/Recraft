'use client';

import { DesignGenerator } from '@/components/ai/design-generator';
import { Palette } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function AiDesignsPage() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
          <Palette className="size-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          {t('ai_designs_title')}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('ai_designs_desc')}
        </p>
      </div>

      <DesignGenerator />
    </div>
  );
}
