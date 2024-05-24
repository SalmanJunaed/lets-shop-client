// import { useEffect, useState } from "react"
// import useProducts from "../../hooks/useProducts"
// import ProductCardInfo from "../Shared/ProductCardInfo/ProductCardInfo"
// import ProductCardInfo from "../../../Shared/ProductCardInfo/ProductCardInfo";
import useProducts from "../../hooks/useProducts"
import ProductCardInfo from "../Shared/ProductCardInfo/ProductCardInfo"
import ProductBanner from "./ProductBanner/ProductBanner"
import Select from 'react-select'

const Product = () => {

    const [products] = useProducts()
    // Sort by Category
    const category = [
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Fashion', label: 'Fashion' },
        { value: 'Furniture', label: 'Furniture' },
        { value: 'Kitchen', label: 'Kitchen' },
    ]

    // Sort by Brand Name
    const brand = [
        //Electronics
        { value: 'TechBrand', label: 'Tech Brand' },
        { value: 'GadgetPro', label: 'Gadget Pro' },
        { value: 'SoundWave', label: 'Sound Wave' },
        { value: 'TabTech', label: 'Tab Tech' },
        //Fashion
        { value: 'Fashionista', label: 'Fashionista' },
        { value: 'RunFast', label: 'Run Fast' },
        { value: 'StyleSavvy', label: 'Style Savvy' },
        { value: 'SunGuard', label: 'Sun Guard' },
        //Furniture
        { value: 'HomeComfort', label: 'Home Comfort' },
        { value: 'DiningDelight', label: 'Dining Delight' },
        { value: 'SleepWell', label: 'Sleep Well' },
        //Kitchen
        { value: 'CookEase', label: 'Cook Ease' },
        { value: 'vanilla', label: 'Brew Master' },
    ]

    // Sort by
    const sortBy = [
        { value: 'ratingHigh', label: 'Rating High to Low' },
        { value: 'priceHigh', label: 'Price High to Low' },
        { value: 'priceLow', label: 'Price Low to High' },
    ]

    return (
        <div className="py-4 pb-8">
            <ProductBanner></ProductBanner>
            <br />
            <div className="md:flex">
                <div className="w-80 md:min-h-screen bg-slate-200 mx-auto px-4 py-4 rounded-2xl">
                    {/* Sort By Category Type*/}
                    <span className="label-text">Sort By Category</span>
                    <Select options={category} />
                    <br />
                    {/* Sort By Brand Name*/}
                    <span className="label-text">Sort By Brand</span>
                    <Select options={brand} />
                    <br />
                    {/* Sort By */}
                    <span className="label-text">Sort By</span>
                    <Select options={sortBy} />
                    <br />
                </div>
                <div className=" mx-auto">
                    <div className="grid grid-cols lg:grid-cols-2 gap-4 place-content-center">
                    {
                        products.map((product, key) => (
                            <ProductCardInfo key={key} product={product}>
                            </ProductCardInfo>
                        ))
                    }
                    </div>
                    <div className="py-2 pt-8">
                        <h1 className="text-4xl text-center text-red-600">---Add Pagination To Show 10 products---</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Product
