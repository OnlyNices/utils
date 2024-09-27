const serialize = (value: any) => {
  if (typeof value === 'bigint') {
    return value.toString();
  } else if (typeof value === 'object' && value !== null) {
    Object.keys(value).forEach((key) => {
      value[key] = serialize(value[key]);
    });
  }
  return value;
};

export const serializeObject = (obj: any) => {
  return serialize(obj);
};
