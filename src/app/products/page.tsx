import ProductCard from "@/src/components/product/ProductCard";
import { getProducts } from "@/src/services/product.service";
import Link from "next/dist/client/link";

export default async function CollectionsPage() {
  const response = await getProducts();

  const collections =
    response?.data?.productList?.filter(
      (item: any) => Array.isArray(item?.product_images) && item.product_images.length > 0
    ) || [];

  return (
    <div className="px-6 md:px-12 lg:px-20">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Collections
      </h1>
      {collections.length === 0 ? (
        <p className="text-gray-500">No collections available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {collections.map((collection: any) => (
            <Link href={`/products/${collection.slug}`} prefetch={false}>
              <ProductCard
                key={collection.id || collection.sku}
                product={collection}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}