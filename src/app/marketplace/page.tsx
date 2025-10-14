'use client';

import { ProductCard } from '@/components/marketplace/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

const mockProducts = [
  { id: '1', name: 'product_denim_tote', price: '3,800', artisan: 'artisan_rural_weavers', image: PlaceHolderImages.find(img => img.id === 'product-1') },
  { id: '2', name: 'product_patchwork_rug', price: '7,200', artisan: 'artisan_creative_threads', image: PlaceHolderImages.find(img => img.id === 'product-2') },
  { id: '3', name: 'product_silk_scarf', price: '2,500', artisan: 'artisan_artisan_alliance', image: PlaceHolderImages.find(img => img.id === 'product-3') },
  { id: '4', name: 'product_remnant_wallet', price: '1,800', artisan: 'artisan_eco_crafters', image: PlaceHolderImages.find(img => img.id === 'product-4') },
  { id: '5', name: 'product_woven_placemats', price: '2,100', artisan: 'artisan_rural_weavers', image: PlaceHolderImages.find(img => img.id === 'product-5') },
  { id: '6', name: 'product_teddy_bear', price: '1,500', artisan: 'artisan_creative_threads', image: PlaceHolderImages.find(img => img.id === 'product-6') },
  { id: '7', name: 'product_fabric_bouquet', price: '2,900', artisan: 'artisan_artisan_alliance', image: PlaceHolderImages.find(img => img.id === 'product-7') },
  { id: '8', name: 'product_fabric_coasters', price: '1,200', artisan: 'artisan_eco_crafters', image: PlaceHolderImages.find(img => img.id === 'product-8') },
];

export default function MarketplacePage() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          {t('marketplace_title')}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('marketplace_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
