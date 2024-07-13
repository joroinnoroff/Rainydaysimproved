// getProducts.js
export const fetchData = async () => {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
