const BASE_URL = 'http://localhost:8000';

const getData = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();
  return data;
};

export const getProducts = () => getData('/');

export const getProductImage = (id) => getData(`/product/${id}`);