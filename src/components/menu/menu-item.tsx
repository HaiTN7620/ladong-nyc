import { MenuItemType } from "@/types/menu";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="flex justify-between">
      <div>
        <h3>{item.name}</h3>
        <p className="text-neutral-500 text-sm">{item.description}</p>
      </div>

      <div>{item.price}</div>
    </div>
  );
}
