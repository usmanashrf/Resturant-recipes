
import Hero from '@/views/Hero';


export default async function Home() {
  let hero = await Hero();
  return (
   <>
   {hero}
   </>
  )
}