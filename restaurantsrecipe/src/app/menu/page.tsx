import Menu from "@/views/Menu";

export default async function page() {
    let menu = await Menu();
  return (
    <div>
        {menu}
    </div>
  )
}
