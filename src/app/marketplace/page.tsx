import { ProductCard } from '@/components/marketplace/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mockProducts = [
  { id: '1', name: 'Upcycled Denim Tote', price: '45.00', artisan: 'Rural Weavers', image: PlaceHolderImages.find(img => img.id === 'product-1') },
  { id: '2', name: 'Patchwork Quilt Rug', price: '85.00', artisan: 'Creative Threads', image: PlaceHolderImages.find(img => img.id === 'product-2') },
  { id: '3', name: 'Hand-Dyed Silk Scarf', price: '30.00', artisan: 'Artisan Alliance', image: PlaceHolderImages.find(img => img.id === 'product-3') },
  { id: '4', name: 'Fabric Remnant Wallet', price: '22.00', artisan: 'Eco Crafters', image: PlaceHolderImages.find(img => img.id === 'product-4') },
  { id: '5', name: 'Woven Placemats', price: '25.00', artisan: 'Rural Weavers', image: PlaceHolderImages.find(img => img.id === 'product-5') },
  { id: '6', name: 'Cotton Scrap Teddy Bear', price: '18.00', artisan: 'Creative Threads', image: PlaceHolderImages.find(img => img.id === 'product-6') },
  { id: '7', name: 'Fabric Flower Bouquet', price: '35.00', artisan: 'Artisan Alliance', image: PlaceHolderImages.find(img => img.id === 'product-7') },
  { id: '8', name: 'Braided Fabric Coasters', price: '15.00', artisan: 'Eco Crafters', image: PlaceHolderImages.find(img => img.id === 'product-8') },
];

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Explore the Marketplace
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover unique, handcrafted products made from upcycled materials. Each
          purchase supports an artisan and helps the planet.
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
