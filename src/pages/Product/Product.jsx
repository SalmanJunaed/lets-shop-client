import { useEffect, useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import useProducts from "../../hooks/useProducts"
import ProductCardInfo from "../Shared/ProductCardInfo/ProductCardInfo"
import ProductBanner from "./ProductBanner/ProductBanner"
// import ProductCardInfo from "../../../Shared/ProductCardInfo/ProductCardInfo";
// import useProducts from "../../../../hooks/useProducts";

const Product = () => {
    const [tabindex, setTabIndex] = useState(0)
    const [products] = useProducts()
    const [electronics, setElectronics] = useState([])
    const [fashion, setFashion] = useState([])
    const [furniture, setFurniture] = useState([])
    const [kitchen, setKitchen] = useState([])
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const allProducts = products.filter(
            (product) => product.category === "Electronics"
        )
        setAllProducts(allProducts)
        const electronics = products.filter(
            (product) => product.category === "Electronics"
        )
        setElectronics(electronics)
        const fashion = products.filter((product) => {
            product.category === "Fashion"
        })
        setFashion(fashion)
        const furniture = products.filter(
            (product) => product.category === "Furniture"
        )
        setFurniture(furniture)
        const kitchen = products.filter(
            (product) => product.category === "Kitchen"
        )
        setKitchen(kitchen)
    }, [products])

    const handleSearch = (e) => {
        if (e.target.value.length > 0) {
            const allProducts = products.filter((product) =>
                product?.product_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
            setAllProducts(allProducts)
            const product1 = products.filter((product) =>
                product?.product_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
            setElectronics(product1)
            const product2 = fashion.filter((product) =>
                product?.product_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
            setFashion(product2)
            const product3 = furniture.filter((product) =>
                product?.product_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
            setFurniture(product3)
            const product4 = kitchen.filter((product) =>
                product?.product_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
            setKitchen(product4)
        } else {
            const allProducts = products.filter(
                (product) => product.category === "Electronics"
            )
            setAllProducts(allProducts)
            const electronics = products.filter(
                (product) => product.category === "Electronics"
            )
            setElectronics(electronics)
            const fashion = products.filter((product) => {
                product.category === "Fashion"
            })
            setFashion(fashion)
            const furniture = products.filter(
                (product) => product.category === "Furniture"
            )
            setFurniture(furniture)
            const kitchen = products.filter(
                (product) => product.category === "Kitchen"
            )
            setKitchen(kitchen)
        }
    }

    return (
        <div className="py-4 pb-8">
            <ProductBanner></ProductBanner>
            <br />
            <div>
                <label className="input input-bordered flex items-center gap-2 max-w-60">
                    <input
                        onChange={handleSearch}
                        type="text"
                        className="grow "
                        placeholder="Search"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
                <br />

                <Tabs
                    defaultIndex={tabindex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList>
                        <Tab>All Products</Tab>
                        <Tab>Electronics</Tab>
                        <Tab>Fashion</Tab>
                        <Tab>Furniture</Tab>
                        <Tab>Kitchen</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {allProducts.map((product, key) => (
                                <ProductCardInfo key={key} product={product}>
                                    {" "}
                                </ProductCardInfo>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {electronics.map((product, key) => (
                                <ProductCardInfo key={key} product={product}>
                                    {" "}
                                </ProductCardInfo>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {fashion.map((product, key) => (
                                <ProductCardInfo key={key} product={product}>
                                    {" "}
                                </ProductCardInfo>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {furniture.map((product, key) => (
                                <ProductCardInfo key={key} product={product}>
                                    {" "}
                                </ProductCardInfo>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {kitchen.map((product, key) => (
                                <ProductCardInfo key={key} product={product}>
                                    {" "}
                                </ProductCardInfo>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default Product
