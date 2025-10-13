import { Heart, Recycle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Recycle className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground font-headline">
            Jugaad
          </p>
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          &copy; {new Date().getFullYear()}. Made with{' '}
          <Heart className="size-4 text-accent fill-accent" /> for a better
          planet.
        </p>
      </div>
    </footer>
  );
}
