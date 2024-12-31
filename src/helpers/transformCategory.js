export const transformCategory = (arr) => {
  return arr.map((item) => ({
    id: item._id,
    title: item.name,
    value: item.name.toLowerCase(),
  }));
};
