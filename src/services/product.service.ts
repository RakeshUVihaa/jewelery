export async function getAllSectionsHtml() {
  const response = await fetch(
    `${process.env.BACKEND_URL}/v4/user/template-seven/all-sections-html?company_key=${process.env.COMPANY_KEY}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `${process.env.PUBLIC_AUTHORIZATION_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

export async function getProducts() {
  console.log("Fetching products from API...",`${process.env.BACKEND_URL}/v4/user/product/list?company_key=${process.env.COMPANY_KEY}`);
  const response = await fetch(
    `${process.env.BACKEND_URL}/v4/user/product/list?company_key=${process.env.COMPANY_KEY}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `${process.env.PUBLIC_AUTHORIZATION_TOKEN}`,
        "Content-Type": "application/json",
      }
    }
  );
console.log("API Response Status:", response);
  return response.json();
}