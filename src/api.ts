import { PropertyFace } from "./types";

enum StorageKeys {
  Properties = "propertiesStorage",
}

export async function saveProperty(property: PropertyFace) {
  const propertiesStorage = await getProperties();
  (property.id = property.streetNumber), property.streetAddress;
  propertiesStorage.push(property);
  localStorage.setItem(
    StorageKeys.Properties,
    JSON.stringify(propertiesStorage)
  );
}

export async function getProperties(): Promise<PropertyFace[]> {
  return JSON.parse(localStorage.getItem(StorageKeys.Properties) ?? "[]");
}

export async function getProperty() {
  const properties = await getProperties();
  return properties.forEach((property) => {
    console.log(property.id, property);
  });
}

// Optional chaining operator (".?") and null coalscing operator ("??")
// const obj = foo?.bar?.baz ?? false
