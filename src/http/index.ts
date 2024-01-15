import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

async function getDataURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function getCategories() {
  return getDataURL<ICategory[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
}

export async function getRecipes() {
  return getDataURL<IRecipe[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}
