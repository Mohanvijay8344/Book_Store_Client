import React from "react";
import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <div className="px-4 lg:px-24 bg-teal-200 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black ">
            Buy and Sell Your Books <span className="text-blue-700">for the Best Price</span>
          </h2>
          <p className="md:w-4/5">
            A bookstore is a store that sells books, and where people can buy
            them. A used bookstore or second-hand bookshop sells and often buys
            used books
          </p>
          <div>
            <input
              type="search"
              placeholder="search a book"
              id="search"
              className="py-2 px-2 rounded-sm-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
          </div>
        </div>

        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}
