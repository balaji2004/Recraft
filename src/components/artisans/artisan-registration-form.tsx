'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ARTISAN_SKILLS } from '@/lib/constants';
import { useLanguage } from '@/context/language-context';
import { UserPlus } from 'lucide-react';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  age: z.coerce.number().min(18, 'You must be at least 18 years old.'),
  tribe: z.string().min(2, 'Please enter your tribe or community.'),
  specializedSkill: z.string().min(1, 'Please select a skill.'),
});

export function ArtisanRegistrationForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: undefined,
      tribe: '',
      specializedSkill: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSuccessAlertOpen(true);
    form.reset();
  }

  return (
    <>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t('artisan_details')}</CardTitle>
          <CardDescription>{t('artisan_details_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('artisan_name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('artisan_name_placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('artisan_age')}</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 35" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tribe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('artisan_tribe')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('artisan_tribe_placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specializedSkill"
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
              <Button type="submit" className="w-full">
                <UserPlus className="mr-2 h-4 w-4" />
                {t('submit_registration')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <AlertDialog open={isSuccessAlertOpen} onOpenChange={setIsSuccessAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('registration_submitted')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('registration_submitted_desc')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsSuccessAlertOpen(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
