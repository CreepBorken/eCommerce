import { PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {  
    const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) =>{    
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductToCart = (productDetail) =>{
    context.setCount(context.Count + 1)
    context.setCartProducts([...context.CartProducts, productDetail])
    console.log("🚀 ~ file: index.jsx:16 ~ addProductToCart ~ context.CartProducts:", context.CartProducts)
  }

  return (
    <div 
      onClick={() => showProduct(data.data)}
      className='bg-white cursor-pointer w-56 h-60'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.data.images[0]}
          alt={data.data.title}
        ></img>
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        > 
          <PlusIcon onClick={() => addProductToCart(data.data)} className="h-6 w-6 text-black-500" />
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>$ {data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
