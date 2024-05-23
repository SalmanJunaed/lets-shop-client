import useProducts from "../../hooks/useProducts";
import ProductBanner from "./ProductBanner/ProductBanner";


const Product = () => {
    const [products] = useProducts();
    const electronics = products.filter(product => product.category === 'Electronics' )
    const fashion = products.filter(product => product.category === 'Fashion' )
    const furniture = products.filter(product => product.category === 'Furniture')
    const kitchen = products.filter(product => product.category === 'Kitchen' )
    return (
        <div>
            <ProductBanner></ProductBanner>
            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
                    
                </div>
            </div>
            
        </div>
    );
};

export default Product;