import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const productCollection = dbConnect(collectionNameObj.productCollection);
  const data = await productCollection.findOne({
    _id: new ObjectId(params.id),
  });

  console.log("data", data);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
      {/* Product Image */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-indigo-200 transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
          <Image
            src={data.image}
            alt={data.name}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          {/* Subtle shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 pointer-events-none"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3 text-gray-900">
          {data.name}
        </h1>
        <p className="text-gray-500 mb-1 sm:mb-2 uppercase tracking-wide text-xs sm:text-sm">
          Category: {data.category}
        </p>
        <p className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
          ${data.price}
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Owner Info */}
      <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-gray-400 text-xs sm:text-sm uppercase mb-2 sm:mb-3 font-medium">
          Product Owner
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <Image
            src={data.ownerimage}
            alt={data.ownername}
            width={60}
            height={60}
            className="rounded-full border-2 border-indigo-200"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900 text-base sm:text-lg truncate">
              {data.ownername}
            </p>
            <p className="text-gray-500 text-sm sm:text-base truncate">
              {data.owneremail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}