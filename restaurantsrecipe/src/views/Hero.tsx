import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

async function getHeroPart() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=hero`, { cache: 'no-store' });
    
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
     let data  = await res.json()
    return data;
  }
export default async function Hero() {

    let response = await getHeroPart();
  return (
    <div>
    {
      response.items.map((item: HeroItems) => (
        <>
          {/* <div>{documentToReactComponents(item.fields.description)}</div> */}
          <div>{response.includes.Asset.map((a: HeroAsset) => (
            <div key={a.sys.id} className="relative">
              {item.fields.heroImage.sys.id == a.sys.id? 
              <Image className="absolute -z-10" src={`https:${a.fields.file.url}`} alt="" width={1440} height={756}/>: <div></div>}
            
             <div className="text-2xl pt-10 font-medium lg:text-9xl 
              text-yellow-500 lg:font-bold italic lg:ml-20 lg:pt-28
              md:text-6xl md:font-semibold md:ml-10 md:pt-20">{item.fields.mainHeading}</div>
            <div className="lg:ml-20  lg:mt-10 text-white lg:text-3xl mt-5
            md:ml-10 md:mt-10 md:text-xl ">{item.fields.tagLine}</div>
            <div className="lg:mt-28 lg:ml-20 mt-5 md:mt-10 md:ml-10">
            <Link href={'/menu'}>
            <span className="border lg:px-12  border-yellow-400 lg:p-4 md:p-3 p-2 text-white bg-transparent hover:bg-yellow-300 hover:bg-opacity-10 hover:text-white">
                Check more..
            </span>
            </Link>
            </div>
                
            </div>
          ))}
          </div>
          {/* <div>{blogs.includes.Entry.map((entry: any) => (
            <div>
              {item.fields.creator.sys.id == entry.sys.id? 
              <div>Author: {entry.fields.name}</div>: <div></div>}
            </div>
          ))}
          </div> */}
          <br/>
          <br/>
          <br/>
        </>
    ))}
  </div>
  )
}
