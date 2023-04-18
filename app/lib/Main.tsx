

export default function Main() {
   const fruits = ['heracleum', 'clementiae', 'sambucus'];

   return (
      <main className="flex flex-col items-center justify-center mx-auto relative">
         { fruits.map((fruit, index) => (
            <div key={ index } className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
               <a href={ `/fruits/${fruit}` }>
                  { fruit }
               </a>
            </div>
         )) }
      </main>

   );
}