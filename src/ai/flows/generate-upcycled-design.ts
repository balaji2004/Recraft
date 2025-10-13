'use server';

/**
 * @fileOverview AI-powered design template generator for upcycled products.
 *
 * - generateUpcycledDesign - A function that generates design templates based on available waste materials.
 * - GenerateUpcycledDesignInput - The input type for the generateUpcycledDesign function.
 * - GenerateUpcycledDesignOutput - The return type for the generateUpcycledDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateUpcycledDesignInputSchema = z.object({
  wasteMaterial: z
    .string()
    .describe('The type of waste material available (e.g., denim scraps, cotton remnants).'),
  artisanSkills: z
    .string()
    .describe('The skills of the artisan or SHG (e.g., sewing, weaving, knitting).'),
  productType: z
    .string()
    .describe('The desired type of upcycled product (e.g., bags, rugs, accessories).'),
});

export type GenerateUpcycledDesignInput = z.infer<typeof GenerateUpcycledDesignInputSchema>;

const GenerateUpcycledDesignOutputSchema = z.object({
  designTemplate: z
    .string()
    .describe('A detailed design template for the upcycled product, including instructions and material usage.'),
  imageUrl: z
    .string()
    .describe('A URL providing a visual representation of the design template.'),
  estimatedMaterialUsage: z
    .string()
    .describe('An estimate of the quantity of waste material required for the design.'),
});

export type GenerateUpcycledDesignOutput = z.infer<typeof GenerateUpcycledDesignOutputSchema>;

export async function generateUpcycledDesign(
  input: GenerateUpcycledDesignInput
): Promise<GenerateUpcycledDesignOutput> {
  return generateUpcycledDesignFlow(input);
}

const generateUpcycledDesignPrompt = ai.definePrompt({
  name: 'generateUpcycledDesignPrompt',
  input: {schema: GenerateUpcycledDesignInputSchema},
  output: {schema: GenerateUpcycledDesignOutputSchema},
  prompt: `You are an AI design assistant for upcycling textile waste.

You will generate a design template for an upcycled product, tailored to the specific waste materials and artisan skills available.

Waste Material: {{{wasteMaterial}}}
Artisan Skills: {{{artisanSkills}}}
Product Type: {{{productType}}}

Instructions:
1.  Provide a detailed design template, including step-by-step instructions and material usage guidelines.
2.  Include an estimate of the quantity of waste material required.
3.  Generate a URL for an image that represents the design template.

Ensure the design is practical and maximizes the use of the provided waste material.
`,
});

const generateUpcycledDesignFlow = ai.defineFlow(
  {
    name: 'generateUpcycledDesignFlow',
    inputSchema: GenerateUpcycledDesignInputSchema,
    outputSchema: GenerateUpcycledDesignOutputSchema,
  },
  async input => {
    const {output} = await generateUpcycledDesignPrompt(input);
    return output!;
  }
);
