import Image from "next/image";
import MenuHeader from "./MenuHeader";
import RecipeList from "./RecipeList";
  

export default async function Menu() {
    let header = await MenuHeader();
    let recipeList = await RecipeList();
  return (
    <div className="">
        <div className="">
        {header}
        </div>
     <div className="mt-28">
        {recipeList}
     </div>
  </div>
  );
}
