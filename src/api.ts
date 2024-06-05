import { PropertyFace } from "./types";

enum StorageKeys {
  Properties = "propertiesStorage",
}

export async function saveProperty(property: PropertyFace) {
  const propertiesStorage = await getProperties();
  property.id = propertiesStorage.length + 1;
  propertiesStorage.push(property);
  localStorage.setItem(
    StorageKeys.Properties,
    JSON.stringify(propertiesStorage)
  );
}

export async function getProperties(): Promise<PropertyFace[]> {
  return JSON.parse(localStorage.getItem(StorageKeys.Properties) ?? "[]");
}

export async function getProperty(): Promise<PropertyFace[]> {
  const properties = await getProperties();
  properties.forEach((property) => {
    console.log(property.id, property);
  });
  return properties;
}

export async function getPropertyById(
  id: number
): Promise<PropertyFace | undefined> {
  const properties = await getProperties();
  return properties.find((property: PropertyFace) => property.id === id);
}
