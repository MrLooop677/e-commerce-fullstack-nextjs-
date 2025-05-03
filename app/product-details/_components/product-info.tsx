'use client'
import React, { useContext } from 'react'
import { ShoppingCart, BadgeCheck, AlertOctagon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import SkeletonProductInfo from './skelton-product-info'
import { useUser } from '@clerk/nextjs'
import { Product } from '@/app/types/product'
import { addToCart } from '@/app/_apis/cart'
function ProductInfo({ product }:{product:Product}) {
	const router = useRouter();
	const {user} =useUser()
	
const handleClick=()=>{
if(user){
	console.log(user);
	
const data={
	data:{
		username:user?.fullName,
email:user?.primaryEmailAddress?.
emailAddress,
products:[product?.documentId]

	}
}
	addToCart(data)
}else{
	router.push("/sign-in")

}
}
	return (
		<div>
			
				<div>
					<h2 className='text-[20px]'>{product?.title}</h2>
					<h2 className='text-[15px] text-gray-400'>{product?.category}</h2>
					<h2 className='text-[11px] mt-2'>{product?.description}</h2>
					<h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'>{product?.instantDelivery ? <BadgeCheck className='w-5 h-5 text-green-500' /> : <AlertOctagon />} Eligible For Instant Delivery</h2>
					<h2 className='text-[24px] text-primary mt-2'>$ {product?.price}</h2>

					<button onClick={handleClick}  className='flex gap-2 p-2 text-white rounded-lg bg-primary hover:bg-teal-600'><ShoppingCart /> Add To Cart</button>
				</div>
				
			

		</div>
	)
}

export default ProductInfo