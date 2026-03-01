import { menuData } from "@/lib/data/menu";
import MenuCategory from "@/components/menu/menu-category";

export default function MenuPage() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <h1 className="font-serif text-5xl mb-16">Menu</h1>

      {menuData.map((category) => (
        <MenuCategory key={category.name} category={category} />
      ))}
    </div>
  );
}
