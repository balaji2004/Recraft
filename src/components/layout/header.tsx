
'use client';

import Link from 'next/link';
import { Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAV_LINKS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SanskaraLogo } from './sanskara-logo';
import { useLanguage } from '@/context/language-context';

export function Header() {
  const pathname = usePathname();
  const { t, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SanskaraLogo className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl">
            {t('sanskara')}
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {t(link.label as any)}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="mr-2" />
                  {t('translate')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>{t('english')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('kn')}>{t('kannada')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('hi')}>{t('hindi')}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <SanskaraLogo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">{t('sanskara')}</span>
                  </Link>
                </SheetClose>
                {NAV_LINKS.map(link => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-4 px-2.5 transition-colors hover:text-primary',
                        pathname === link.href
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      )}
                    >
                      {t(link.label as any)}
                    </Link>
                  </SheetClose>
                ))}
                <div className="border-t pt-4 mt-4">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className='w-full justify-start'>
                        <Globe className="mr-2" />
                        {t('translate')}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLanguage('en')}>{t('english')}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage('kn')}>{t('kannada')}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage('hi')}>{t('hindi')}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
