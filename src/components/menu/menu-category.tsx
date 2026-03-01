import { MenuCategoryType } from "@/types/menu";
import MenuItem from "./menu-item";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryType;
}) {
  return (
    <div className="mb-16">
      <h2 className="font-serif text-3xl mb-6">{category.name}</h2>

      <div className="space-y-4">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
