
'use client';
import { useEffect } from 'react';

export default function Error(
   { error, reset }: { error: Error; reset: () => void; }
) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   return (
      <div>

         <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            something went wrong...
         </h1>



      </div>
   );
}