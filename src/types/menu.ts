export type MenuItemType = {
     name: string;
     description: string;
     price: string;
};

export type MenuCategoryType = {
     name: string;
     items: MenuItemType[];
};