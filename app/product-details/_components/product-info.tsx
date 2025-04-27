'use client'
import React, { useContext } from 'react'
import { ShoppingCart, BadgeCheck, AlertOctagon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import SkeletonProductInfo from './skelton-product-info'
function ProductInfo({ product }) {
	// const router = useRouter();

	return (
		<div>
			
				<div>
					<h2 className='text-[20px]'>{product?.title}</h2>
					<h2 className='text-[15px] text-gray-400'>{product?.category}</h2>
					<h2 className='text-[11px] mt-2'>{product?.description}</h2>
					<h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'>{product?.instantDelivery ? <BadgeCheck className='w-5 h-5 text-green-500' /> : <AlertOctagon />} Eligible For Instant Delivery</h2>
					<h2 className='text-[24px] text-primary mt-2'>$ {product?.price}</h2>

					<button  className='flex gap-2 p-2 text-white rounded-lg bg-primary hover:bg-teal-600'><ShoppingCart /> Add To Cart</button>
				</div>
				
			

		</div>
	)
}

export default ProductInfo