import { createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    //Shopping Cart . Increment Quantity    
    const [Count, setCount] = useState(0)
    
    //Product Detail . Show product
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false)    
    
    //Product Detail . Open/Close
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail . Show Product
    const [ProductToShow, setProductToShow] = useState({})

    //Shopping Cart . Add product to cart
    const [CartProducts, setCartProducts] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            Count
            ,setCount
            ,openProductDetail
            ,closeProductDetail
            ,IsProductDetailOpen
            ,ProductToShow
            ,setProductToShow
            ,CartProducts
            ,setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}