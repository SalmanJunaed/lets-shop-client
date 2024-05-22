import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch("product.json")
        fetch("http://localhost:5000/products")
            .then((res) =>res.json())
            .then((data) =>{
                setProducts(data);
                setLoading(false);
            })
    },[])
    return [products, loading];
};

export default useProducts;