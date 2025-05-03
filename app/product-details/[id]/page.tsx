import { filterProducts, getProductDetails } from '@/app/_apis/product';
import React from 'react';
import ProductBanner from '../_components/product-banner';
import BreadCrumb from '@/app/_component/bread-crumb';
import ProductList from '@/app/_component/product-list';
import ProductInfo from '../_components/product-info';

async function page({ params }: { params: { id: string } }) {
  const {id}=await params
try {
  const productDetais=await getProductDetails(id)
  const semilarProduct=await filterProducts(productDetais?.data?.data?.category)
 
  return (
    <div>
       <div className="px-10 py-8 md:px-28">
       <BreadCrumb  />
       <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
         <ProductBanner product={productDetais} />
         <ProductInfo product={productDetais?.data?.data} />
       </div>
       <div>
         <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
         <ProductList productList={semilarProduct?.data?.data} />
       </div>
       </div>
       </div>
  );
} catch (error) {
  console.log("error",error);
  
}

 
}

export default page;


