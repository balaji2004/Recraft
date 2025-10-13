'use server';

import {
  generateUpcycledDesign,
  type GenerateUpcycledDesignInput,
} from '@/ai/flows/generate-upcycled-design';
import { z } from 'zod';

const formSchema = z.object({
  wasteMaterial: z.string(),
  artisanSkills: z.string(),
  productType: z.string(),
});

export async function generateUpcycledDesignAction(
  input: GenerateUpcycledDesignInput
) {
  const parsedInput = formSchema.safeParse(input);

  if (!parsedInput.success) {
    console.error('Invalid input:', parsedInput.error);
    return null;
  }

  try {
    const result = await generateUpcycledDesign(parsedInput.data);
    return result;
  } catch (error) {
    console.error('Error generating upcycled design:', error);
    return null;
  }
}
