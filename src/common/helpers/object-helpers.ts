export const updateObjectInArray = (items: any[], itemId: number | string, objPropName: string, newObjProps: Record<string, any>) => {
  if (!items.length) {
    return []
  }

  return items.map((item: any) => {
    if (item[objPropName] === itemId) {
      return {...item, ...newObjProps}
    }
    return item;
  });
};
