import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${context.IsProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}><XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer"  /></div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.ProductToShow.images} alt={context.ProductToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.ProductToShow.price}</span>
                <span className='font-medium text-md'>{context.ProductToShow.title}</span>
                <span className='font-medium text-sm'>{context.ProductToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail

