
import { cn } from '@/lib/utils';

export function SanskaraLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6 text-primary', className)}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <path
        d="M12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5Z"
        fill="currentColor"
      />
       <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
       <path d="M12 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M12 21V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M18 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M3 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M16.9497 7.05029L19.071 4.92908" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M4.92896 19.0711L7.05017 16.9499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M16.9497 16.9497L19.071 19.071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M4.92896 4.92896L7.05017 7.05017" stroke="currentColor" strokeWidth="1.s" strokeLinecap="round"/>
    </svg>
  );
}
