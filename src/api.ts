import { Property } from "./types";

enum StorageKeys {
  Properties = "properties",
}

export async function saveProperty(property: Property) {
  const properties = await getProperties();
  properties.push(property);
  localStorage.setItem(StorageKeys.Properties, JSON.stringify(properties));
}

export async function getProperties(): Promise<Property[]> {
  return JSON.parse(localStorage.getItem(StorageKeys.Properties) ?? "[]");
}

export async function getProperty(id: number): Promise<Property | undefined> {
  const properties = await getProperties();
  return properties.find((property) => property?.id === id) ?? undefined;
}

// Optional chaining operator (".?") and null coalscing operator ("??")
// const obj = foo?.bar?.baz ?? false
