import Link from "next/link";

// export default function TailwindPractice() {
//   const menus = [
//     { name: "Home", href: "/" },
//     { name: "Products", href: "/products" },
//     { name: "Collections", href: "/collections" },
//   ];
//   return (
//     <>
//       <div className="flex justify-between items-center px-6 py-4 bg-gray-100">
//         <img src="/logo.png" alt="Logo" width={120}
//           height={40} />
//         <div className="hidden md:flex gap-4">
//           {menus.map((menu) => (
//             <Link
//               key={menu.href}
//               href={menu.href}
//               className="hover:text-blue-600 transition-colors"
//             >
//               {menu.name}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden md:flex items-center gap-4">
//           <Link href="/login" className="hover:text-blue-600">
//             Login
//           </Link>

//           <button
//             className="font-medium hover:text-blue-600"
//           >
//             Cart
//           </button>
//         </div>
//         <div className="md:hidden text-2xl">

//           ☰

//         </div>
//       </div>
//     </>
//   );
// }

export default function TailwindPractice() {
  return <>
  {/* <div className="group flex flex-col justify-center items-center border:1px solid rounded shadow-xl w-1/4 p-4 m-4 hover:scale-105 transition-transform duration-300">
    <img src="/product-image.jpg" alt="Product" width={200} height={200} />
    <div>Name</div>
    <div>Price</div>
    <button className="opacity-0 group-hover:opacity-100 transition-opacity mt-4
      bg-blue-500
      text-white
      px-4
      py-2 rounded-lg shadow-xl">Add to Cart</button>
  </div> */}
  </>
}