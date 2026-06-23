// app/products/[slug]/page.tsx

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string) {
    console.log("Fetching product details for slug:", slug);
  const response = await fetch(
    "http://localhost:2526/api/v4/user/product/details?company_key=TCC_TECH",
    {
      method: "POST",
      headers: {
        Authorization: 'PUBLIC_AUTHORIZATION_TOKEN',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug,
      }),
      cache: "no-store",
    }
  );

//   if (!response.ok) {
//     throw new Error("Failed to fetch product");
//   }

  return response.json();
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const productData = await getProduct(slug);

  const product = productData?.data?.products;
    const imagePath = product?.product_images?.[0]?.image_path;

console.log("Fetched product data:", product);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={imagePath
            ? `https://d36lexx08s5jva.cloudfront.net/${imagePath}`
            : "/placeholder.png"}
            alt={product?.name}
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">
            {product?.name}
          </h1>

          <p className="mt-2 text-gray-600">
            SKU: {product?.sku}
          </p>

          <p className="mt-4 text-lg">
            ₹{product?.PMO[0]?.Price}
          </p>

          <div className="mt-6">
            <button className="bg-black text-white px-6 py-3 rounded">
              Add To Cart
            </button>
          </div>

          <div className="mt-8">
            <h2 className="font-semibold text-xl">
              Description
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}