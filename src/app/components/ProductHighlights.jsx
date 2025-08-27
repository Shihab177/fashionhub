import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductHighlights() {
  const productCollection = dbConnect(collectionNameObj.productCollection);
  const data = await productCollection
    .find({ category: "Clothing"})
    .limit(3)
    .toArray();
  console.log("products Highlights", data);
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Products Highlights
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {data.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-300"
          >
            <div className="relative w-[70%] mx-auto h-66">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className=""
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-900 truncate">
                {product.name}
              </h2>
             
              <p className="text-blue-600 font-bold text-lg">
                ${product.price}
              </p>

              <Link
                href={`/products/${product._id}`}
                className="mt-3 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}