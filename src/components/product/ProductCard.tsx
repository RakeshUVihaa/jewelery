"use client";

interface ProductCardProps {
  product: {
    id: number;
    sku: string;
    title: string;
    product_images: any;
    video?: string;
   
      price: any;
  };
}
export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = product?.product_images?.[0]?.image_path;
  
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center gap-3 max-w-sm">
      
      {/* IMAGE */}
      <img
        src={
          imagePath
            ? `${imagePath}`
            : "/placeholder.png"
        }
        alt={product.title}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />

      {/* TEXT BELOW IMAGE */}
      <div className="text-center flex flex-col gap-1">
        <h3 className="font-semibold">{product.title}</h3>

        <p className="text-sm text-gray-600">
          SKU: {product.sku}
        </p>

        <p className="font-medium">
          ${product?.price}
        </p>

        <button className="mt-2 px-4 py-2 bg-black text-white rounded">
          Add To Cart
        </button>
      </div>
    </div>
  );
}