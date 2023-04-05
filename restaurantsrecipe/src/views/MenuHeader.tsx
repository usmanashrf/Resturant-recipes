import Image from "next/image";
  

async function getMenuItems() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=menuPageItems`, { cache: 'no-store' });
    
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
     let data:MenuItems  = await res.json()
    return data;
  }

 
export default async function MenuHeader() {

    let menuItemData = await getMenuItems();
  return (
    <div>
      {menuItemData?.items?.map((item) => (
        <div key={item.sys.id} className="relative">
            { (menuItemData.includes.Asset.map(a => (a.sys.id === item.fields.bannerImage.sys.id)?
            <Image key={a.sys.id} className="object-cover w-full h-full" src={`https:${a.fields.file.url}`} height={300} width={1400} alt={""}/>:<></> 
            ))}
          <div className="absolute -mt-36 z-10 left-1/2 transform -translate-x-1/2  flex items-center text-yellow-500 text-7xl font-bold">
            {item?.fields?.title}
          </div>
        </div>
      ))}
    </div>
  );
}
