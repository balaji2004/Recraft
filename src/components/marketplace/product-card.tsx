'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

type Product = {
  id: string;
  name: string;
  price: string;
  artisan: string;
  image?: ImagePlaceholder;
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          {product.image ? (
            <Image
              src={product.image.imageUrl}
              alt={product.name}
              data-ai-hint={product.image.imageHint}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-secondary" />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg mb-1">{t(product.name as any)}</CardTitle>
        <CardDescription>by Lambani tribe</CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="font-bold text-lg font-sans">₹{product.price}</p>
        <Button size="sm">
          <ShoppingBag className="mr-2 h-4 w-4" /> {t('add_to_cart')}
        </Button>
      </CardFooter>
    </Card>
  );
}
