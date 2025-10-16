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
import {
  WASTE_MATERIALS,
  ARTISAN_SKILLS,
  PRODUCT_TYPES,
} from '@/lib/constants';
import { Loader2, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

// Hardcoded design templates
type GenerateUpcycledDesignOutput = {
  designTemplate: string;
  imageSearchHint: string;
  estimatedMaterialUsage: string;
};

const HARDCODED_DESIGNS: Record<string, GenerateUpcycledDesignOutput> = {
  'Wool Pieces-Dyeing-Rugs': {
    designTemplate: `Patchwork Wool Rug Design

MATERIALS NEEDED:
- Assorted wool fabric pieces (minimum 2-3 kg)
- Natural dyes (indigo, turmeric, madder root)
- Cotton backing fabric
- Heavy-duty thread
- Rug binding tape

STEP-BY-STEP INSTRUCTIONS:

1. PREPARATION (Day 1-2)
   - Sort wool pieces by size and weight
   - Wash and dry all fabric pieces
   - Prepare natural dye baths in large pots

2. DYEING PROCESS (Day 2-3)
   - Separate wool into three batches
   - Dye first batch with indigo (deep blue)
   - Dye second batch with turmeric (golden yellow)
   - Dye third batch with madder root (warm red)
   - Rinse thoroughly and dry completely

3. CUTTING AND ARRANGEMENT (Day 4)
   - Cut dyed wool into uniform squares (10cm x 10cm)
   - Arrange in alternating color pattern
   - Create a border with darkest color

4. ASSEMBLY (Day 5-6)
   - Attach cotton backing to work surface
   - Hand-stitch wool pieces to backing using overcast stitch
   - Ensure tight, secure stitching between pieces
   - Work from center outward

5. FINISHING (Day 7)
   - Trim excess backing fabric
   - Attach rug binding tape around all edges
   - Final press with steam iron
   - Quality check all seams

CARE INSTRUCTIONS:
- Vacuum regularly
- Spot clean with mild soap
- Professional cleaning recommended annually`,
    imageSearchHint: 'patchwork rug',
    estimatedMaterialUsage: '2.5-3 kg of wool fabric pieces, approximately 100-120 individual pieces for a standard 90cm x 120cm rug'
  },
  default: {
    designTemplate: `Upcycled Product Design Template

MATERIALS NEEDED:
- Selected waste material
- Thread and needles
- Basic sewing supplies
- Optional: Buttons, zippers, or decorative elements

STEP-BY-STEP INSTRUCTIONS:

1. PREPARATION
   - Clean and sort all materials
   - Iron or press fabrics if needed
   - Create pattern pieces

2. CUTTING
   - Cut materials according to pattern
   - Mark all seam allowances
   - Label all pieces

3. ASSEMBLY
   - Pin pieces together
   - Sew main seams
   - Reinforce stress points

4. FINISHING
   - Add closures or hardware
   - Hem all edges
   - Final pressing

5. QUALITY CHECK
   - Inspect all seams
   - Test functionality
   - Make any needed adjustments

CARE INSTRUCTIONS:
- Follow material-specific care guidelines
- Store in cool, dry place
- Repair promptly when needed`,
    imageSearchHint: 'handmade craft',
    estimatedMaterialUsage: 'Varies depending on product size - typically 0.5-1.5 kg of material'
  }
};

function getHardcodedDesign(wasteMaterial: string, artisanSkills: string, productType: string): GenerateUpcycledDesignOutput {
  const key = `${wasteMaterial}-${artisanSkills}-${productType}`;
  return HARDCODED_DESIGNS[key] || HARDCODED_DESIGNS.default;
}

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
  const { t } = useLanguage();

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
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get hardcoded design based on form values
      const result = getHardcodedDesign(
        values.wasteMaterial,
        values.artisanSkills,
        values.productType
      );
      
      setGenerationResult(result);
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
  
  // Determine which image to show based on form inputs
  const getGeneratedDesignImage = () => {
    if (!generationResult) return null;
    
    const formValues = form.getValues();
    
    // Check for Wool Pieces + Dyeing + Rugs combination
    if (
      formValues.wasteMaterial === 'Wool Pieces' &&
      formValues.artisanSkills === 'Dyeing' &&
      formValues.productType === 'Rugs'
    ) {
      return PlaceHolderImages.find(img => img.id === 'ai-generated-design-rugs');
    }
    
    // Default to the mittens image
    return PlaceHolderImages.find(img => img.id === 'ai-generated-design');
  };
  
  const generatedDesignImage = getGeneratedDesignImage();
  const generatedImageUrl = generatedDesignImage?.imageUrl || '';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t('create_your_design')}</CardTitle>
          <CardDescription>
            {t('create_your_design_desc')}
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
                    <FormLabel>{t('available_waste_material')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('select_a_material')} />
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
                    <FormLabel>{t('primary_artisan_skill')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('select_a_skill')} />
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
                    <FormLabel>{t('desired_product_type')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('select_a_product_type')} />
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
                {t('generate_design')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center justify-center p-4">
        {isLoading && (
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <Loader2 className="size-12 animate-spin text-primary" />
            <p className="font-headline text-xl">{t('generating_design')}</p>
            <p>{t('ai_weaving_magic')}</p>
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
            <p className="font-headline text-xl">{t('design_will_appear_here')}</p>
          </div>
        )}
        {generationResult && (
          <CardContent className="p-6 w-full">
            <CardTitle className="font-headline text-2xl mb-4">{t('generated_design')}</CardTitle>
            <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-lg border">
              <Image
                src={generatedImageUrl}
                alt="Generated design"
                data-ai-hint={generatedDesignImage?.imageHint || generationResult.imageSearchHint}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold font-headline text-lg">{t('instructions')}</h3>
                <Textarea
                  readOnly
                  value={generationResult.designTemplate}
                  className="mt-2 h-48 resize-none bg-secondary/30"
                />
              </div>
              <div>
                <h3 className="font-bold font-headline text-lg">{t('estimated_material_usage')}</h3>
                <p className="text-muted-foreground">{generationResult.estimatedMaterialUsage}</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
