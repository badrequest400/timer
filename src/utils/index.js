
export const toArray = val => {
  if (!Array.isArray(val))
    return [ val ];
  return val;
};

export const omit = (keys, obj) => {
  const result = {};
  Object.entries(obj).forEach(([ k, v ]) => {
    if (!toArray(keys).includes(k)) result[k] = v;
  });
  return result;
};
