import useProducts from "../../../hooks/useProducts";
import ProductCardInfo from "../../Shared/ProductCardInfo/ProductCardInfo";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Featured = () => {
    const [products] = useProducts();
    const electronics = products.filter(product => product.category === 'Electronics')
    const fashion = products.filter(product => product.category === 'Fashion')
    const furniture = products.filter(product => product.category === 'Furniture')
    const kitchen = products.filter(product => product.category === 'Kitchen')
    return (
        <div className="py-4 pb-8">
            <div>
                <h1 className="text-4xl font-bold text-center text-red-500">
                    This is Featured section inside Home Page
                </h1>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow " placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <div role="tablist" className="tabs tabs-lifted">
                    {/* Tab-1 */}
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Electronics" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
                        { 
                            electronics.map(product=><ProductCardInfo 
                                key={product.productId} 
                                product={product}
                                > </ProductCardInfo>)
                        }
                        </div>
                    </div>
                    {/* Tab-2 */}
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Fashion" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
                        { 
                            fashion.map(product=><ProductCardInfo 
                                key={product.productId} 
                                product={product}
                                > </ProductCardInfo>)
                        }
                        </div>
                    </div>
                    {/* Tab-3 */}
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Furniture" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
                        { 
                            furniture.map(product=><ProductCardInfo 
                                key={product.productId} 
                                product={product}
                                > </ProductCardInfo>)
                        }
                        </div>
                    </div>
                    {/* Tab-4 */}
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Kitchen" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
                        { 
                            kitchen.map(product=><ProductCardInfo 
                                key={product.productId} 
                                product={product}
                                > </ProductCardInfo>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
