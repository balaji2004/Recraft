'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateUpcycledDesignAction } from '@/app/ai-designs/actions';
import {
  WASTE_MATERIALS,
  ARTISAN_SKILLS,
  PRODUCT_TYPES,
} from '@/lib/constants';
import type { GenerateUpcycledDesignOutput } from '@/ai/flows/generate-upcycled-design';
import { Loader2, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  wasteMaterial: z.string().min(1, 'Please select a waste material.'),
  artisanSkills: z.string().min(1, 'Please select an artisan skill.'),
  productType: z.string().min(1, 'Please select a product type.'),
});

export function DesignGenerator() {
  const [generationResult, setGenerationResult] = useState<GenerateUpcycledDesignOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const placeholderImage = PlaceHolderImages.find(img => img.id === 'ai-design-placeholder');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wasteMaterial: '',
      artisanSkills: '',
      productType: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGenerationResult(null);
    try {
      const result = await generateUpcycledDesignAction(values);
      if (result) {
        setGenerationResult(result);
      } else {
        throw new Error('Failed to generate design.');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred.',
        description: 'Failed to generate design. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const generatedImageUrl = generationResult?.imageSearchHint 
    ? `https://picsum.photos/seed/${generationResult.imageSearchHint.replace(/\s/g, '')}/600/600` 
    : '';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create Your Design</CardTitle>
          <CardDescription>
            Fill out the details below to generate a unique upcycling template.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="wasteMaterial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Waste Material</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {WASTE_MATERIALS.map(material => (
                          <SelectItem key={material} value={material}>
                            {material}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="artisanSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Artisan Skill</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a skill" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ARTISAN_SKILLS.map(skill => (
                          <SelectItem key={skill} value={skill}>
                            {skill}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Product Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PRODUCT_TYPES.map(type => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Design
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center justify-center p-4">
        {isLoading && (
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <Loader2 className="size-12 animate-spin text-primary" />
            <p className="font-headline text-xl">Generating your design...</p>
            <p>The AI is weaving its magic!</p>
          </div>
        )}
        {!isLoading && !generationResult && placeholderImage && (
          <div className="text-center text-muted-foreground">
            <div className="relative aspect-square w-full max-w-sm mx-auto mb-4 overflow-hidden rounded-lg">
               <Image
                src={placeholderImage.imageUrl}
                alt={placeholderImage.description}
                data-ai-hint={placeholderImage.imageHint}
                fill
                className="object-cover"
               />
            </div>
            <p className="font-headline text-xl">Your generated design will appear here.</p>
          </div>
        )}
        {generationResult && (
          <CardContent className="p-6 w-full">
            <CardTitle className="font-headline text-2xl mb-4">Generated Design</CardTitle>
            <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-lg border">
              <Image
                src={generatedImageUrl}
                alt="Generated design"
                data-ai-hint={generationResult.imageSearchHint}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold font-headline text-lg">Instructions</h3>
                <Textarea
                  readOnly
                  value={generationResult.designTemplate}
                  className="mt-2 h-48 resize-none bg-secondary/30"
                />
              </div>
              <div>
                <h3 className="font-bold font-headline text-lg">Estimated Material Usage</h3>
                <p className="text-muted-foreground">{generationResult.estimatedMaterialUsage}</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
