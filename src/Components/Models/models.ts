export type Nutrition = {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
}

export type ProductModel = {
    genus: string;
    name: string;
    id: number;
    family: string;
    order: string;
    nutritions: Nutrition;
}

export type CartModel = {
    genus: string;
    quantity: number;
    name: string;
    id: number;
    family: string;
    order: string;
    nutritions: Nutrition;
}