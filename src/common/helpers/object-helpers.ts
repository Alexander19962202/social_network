export const updateObjectInArray = <T>(items: T[], uniqueFieldValue: number | string, uniqueFieldName: keyof T, newFieldsValues: Partial<T>) => {
  if (!items.length) {
    return [];
  }

  return items.map((item) => {
    if (item[uniqueFieldName] === uniqueFieldValue) {
      return {...item, ...newFieldsValues}
    }
    return item;
  });
};
