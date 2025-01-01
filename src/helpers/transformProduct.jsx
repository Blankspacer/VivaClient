export const transformProducts = (productsData) => {
  if (!productsData?.data) return [];

  return productsData.data.map((product) => ({
    id: product._id, // Use _id as id
    name: product.name,
    category: product.category.name,
    image: product.images[0] || "https://via.placeholder.com/150",
  }));
};

export const generateTabs = (productsData) => {
  if (!productsData?.data) return [];

  // Extract unique categories
  const categories = [
    ...new Set(productsData.data.map((product) => product.category.name)),
  ];

  // Create tabs array
  const tabs = categories.map((category) => ({
    id: category,
    label: category,
  }));

  // Add "SHOW ALL" tab at the beginning
  tabs.unshift({ id: "SHOW_ALL", label: "SHOW ALL" });

  return tabs;
};
