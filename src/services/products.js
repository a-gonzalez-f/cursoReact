const BASE_URL = "https://68e44eff8e116898997b8579.mockapi.io/productos";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async (categoria) => {
  let url = BASE_URL;
  if (categoria) {
    url = `${BASE_URL}?categoria=${categoria}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al listar productos");
  }

  const results = await res.json();
  return results;
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener el producto");
  }
  return await res.json();
};
