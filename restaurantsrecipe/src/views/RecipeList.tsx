import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";  

  async function getRecipes() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=recipe`, { cache: 'no-store' });
    
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
     let data = await res.json()
    return data;
  }
export default async function RecipeList() {
    let recipes = await getRecipes();
  return (
    <div className="m-10">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 shadow-lg">
     {
         recipes.items.map(( item:any) => (
             <div className="w-90 border border-spacing-2 px-5 pb-10" key={item.sys.id}>
                <div>
                    {
                    (recipes.includes.Asset.map((a:any) =>a.sys.id === item.fields.recipeImage.sys.id?
                 <Image key={a.sys.id} src={`https:${a.fields.file.url}`} height={200} width={400} alt={""}/>:<div key={a.sys.id}></div>
                   ))}
                </div>
                <div className="text-xl font-semibold text-orange-500 my-5">{item.fields.recipeName}</div>
                <div className="line-clamp-2">{documentToReactComponents(item.fields.recipeDescription)}</div>
                <div className="ml-5">{item.fields.ingredients.map((ingredient :any) => <ul key={`${Date.now}${ingredient}`} className="list-disc">
                    <li>
                    {ingredient}
                    </li>
                </ul>)}</div>
                <div className="text-3xl font-semibold mt-5 flex text-orange-500"><p>{item.fields.price}</p></div>
             
             </div>
         ))
     }
   </div>
  </div>
  );
}
