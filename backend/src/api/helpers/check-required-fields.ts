/**
 * Checks for missing required fields in an object and returns an array of their names.
 * 
 * @param {T} fields - The object to check for required fields.
 * @returns {string[]} - An array containing the names of the missing required fields.
 * 
 * This function is designed to work with objects where the value types of the fields are unknown.
 * It ensures that required fields, defined by the presence of truthy values, are not missing.
 * The result is an array of string names representing the fields that are missing or falsy in the provided object.
 * Type parameters allow flexibility for the input object's structure while maintaining type safety.
 */
export function checkRequiredFields<T extends Record<string, unknown>>(
  fields: T
): string[] {
  const fieldsRequired: Array<keyof T> = Object.keys(fields) as Array<keyof T>;
  const missingFields: string[] = [];

  for (const field of fieldsRequired) {
    if (!fields[field]) {
      missingFields.push(field as string);
    }
  }

  return missingFields;
}
