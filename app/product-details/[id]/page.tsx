import { getProductDetails } from '@/app/_apis/product';
import React from 'react';
import ProductBanner from '../_components/product-banner';
import BreadCrumb from '@/app/_component/bread-crumb';
import ProductList from '@/app/_component/product-list';

async function page({ params }: { params: { id: string } }) {
  const {id}=await params
try {
  const productDetais=await getProductDetails(id)
  return (
    <div>
       <div className="px-10 py-8 md:px-28">
       <BreadCrumb  />
       <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
         <ProductBanner product={productDetais} />
         {/* <ProductInfo product={productDetails} /> */}
       </div>
       {/* <div>
         <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
         <ProductList productList={productList} />
       </div> */}
       </div>
       </div>
  );
} catch (error) {
  console.log("error",error);
  
}

 
}

export default page;
