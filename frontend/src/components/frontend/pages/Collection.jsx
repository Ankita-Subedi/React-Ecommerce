import React, { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import {assets} from '../../../assets/assets'
import Title from '../layouts/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      {/* filter options  */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        <img className={`h-3 sm:hidden ${showFilter? 'rotate-90': ''}`} src={assets.dropdown_icon} alt=""/>
        </p>
        {/* category filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Child"} />
              Child
            </p>
          </div>
        </div>

        {/* subcategory filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottom wear"} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side  */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl md:text-xl gap-6 mb-4 mt-2">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* product sort */}
          <select className="border-2 border-gray-300 text-sm px-2 py-1">
            <option value="relevent">Sort by: Relevent</option>
            <option value="high-low">Sort by: High-low</option>
            <option value="low-high">Sort by: Low-high</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Collection;