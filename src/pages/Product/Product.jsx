// import { useEffect, useState } from "react"
// import useProducts from "../../hooks/useProducts"
// import ProductCardInfo from "../Shared/ProductCardInfo/ProductCardInfo"
// import ProductCardInfo from "../../../Shared/ProductCardInfo/ProductCardInfo";
import { useLoaderData } from "react-router-dom"
import useProducts from "../../hooks/useProducts"
import ProductCardInfo from "../Shared/ProductCardInfo/ProductCardInfo"
import ProductBanner from "./ProductBanner/ProductBanner"
import Select from 'react-select'
import { useState } from "react"

const Product = () => {

    const [products] = useProducts()
    
    //pagination
    const { count } = useLoaderData();

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    
    const pages = [...Array(numberOfPages).keys()];

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val)
        setCurrentPage(0)
    }
    const handlePreviousPage = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if(currentPage < pages.length){
            setCurrentPage(currentPage + 1);
        }
    }
    

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
                    <p className="pt-24 text-center">Current Page : {currentPage + 1}</p>
                    <div className="mt-6 flex justify-center gap-1"> 
                        <button onClick={handlePreviousPage} className="btn btn-success">Prev</button>
                        {
                            pages.map(page => <button
                                onClick={() => setCurrentPage(page)}
                                key={page} 
                                className={currentPage === page && 'selected'}
                                // className=""
                            ><span className="btn btn-info">{page+1}</span></button>)
                        }
                        <button onClick={handleNextPage} className="btn btn-success">Next</button>
                        <select className="border-2 px-4" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Product
