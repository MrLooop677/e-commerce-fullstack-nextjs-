
import ProductItem from './product-item';
import { getLatestProducts } from '../_apis/product';
import ProductList from './product-list';
import { ArrowRightCircle } from 'lucide-react';
import { Product } from '../types/product';



export default async function ProductSection() {
  try {
    const response = await getLatestProducts();
    const productListItems: Product[] = response.data?.data;

    return (

      	<div className='px-10 md:px-20'>
          <h2 className='font-bold text-[20px] my-3'>Brand New 
          <span className='font-normal text-[14px]
           float-right text-primary flex 
           items-center cursor-pointer hover:text-teal-600'>
            View All Collection <ArrowRightCircle className='h-4' /> </span></h2>			 
                   <ProductList productList={productListItems}/>

              </div>
    );
  } catch (err) {
    return <div>⚠️ Failed to fetch products</div>;
  }
}
