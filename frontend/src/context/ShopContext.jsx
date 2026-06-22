import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cardItems, setCardItems] = useState({});

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cardItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size]++;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCardItems(cartData)
    }
    useEffect(() => {
        console.log(cardItems);
    }, [cardItems])
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cardItems, addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
export { ShopContext }
