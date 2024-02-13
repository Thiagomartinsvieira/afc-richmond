import { IContact } from '../interfaces/IContact';

class ContactService {
  checkRequiredFields(fields: IContact): string[] {
    const fieldsRequired: Array<keyof IContact> = Object.keys(fields) as Array<
      keyof IContact
    >;
    const missingFields: string[] = [];

    for (const field of fieldsRequired) {
      if (!fields[field]) {
        missingFields.push(field);
      }
    }

    return missingFields;
  }
}

export default new ContactService();
