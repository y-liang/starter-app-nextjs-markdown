





import NotFound from '@/app/not-found';
import Heracleum from '../content/Heracleum.mdx';
import Clementiae from '../content/Clementiae.mdx';
import Sambucus from '../content/Sambucus.mdx';



export default function FruitPage(
   { params }: { params: { title: string; }; }
) {
   const { title } = params;

   switch (title) {
      case 'heracleum':
         return <Heracleum />;
      case 'clementiae':
         return <Clementiae />;
      case 'sambucus':
         return <Sambucus />;


      default:
         return NotFound();
   }
}

