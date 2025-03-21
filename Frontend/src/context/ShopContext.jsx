import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";
import { toast } from "react-toastify";


export const ShopContext=createContext();

const ShopContextProvider=(props)=>{


    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch]=useState();
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const navigate=useNavigate();


    let addToCart = async(itemId,size)=>{


        if(!size){
            toast.error('Select Product Size');
            return;
        }
        
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]++;
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);
    }


    const getCartAmount=()=>{

        let totalAmount=0;
        for(const itemId in cartItems){
            let productInfo=products.find((product)=>product._id===parseInt(itemId));
            for(const item in cartItems[itemId]){
                try{
                    if(cartItems[itemId][item]>0){
                        totalAmount+=productInfo.price * cartItems[itemId][item];
                    }
                }catch(e){
                    console.log(e);
                }
            }
        }
        return totalAmount;

    }


    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount +=cartItems[items][item];
                    }
                }catch(e){
                    console.log(e);
                }
            }
        
        }
        return totalCount;
    }


    const updateQuantity=async(itemId,size,quantity)=>{

        let cartData=structuredClone(cartItems);

        cartData[itemId][size]=quantity;
        setCartItems(cartData);
    }




    const value={
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;