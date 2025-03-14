import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Currency } from 'lucide-react';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {


  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === parseInt(productId)) {
        setProductData(item);
        setImage(item.image[0]);
      }
    })
  }

  // const fetchProductData = async () => {
  //   const foundProduct = products.find((item) => item.id === productId);
  //   if (foundProduct) {
  //     setProductData(foundProduct);
  //     setImage(foundProduct.image[0]);
  //   }
  // }


  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData();
    }
  }, [productId, products])

  return productData ? (
    <div className='border-y-2 border-gray-300 py-10 transition-opacity ease-in duration-500 mt-30 opacity-100'>
      {/*----------- Product Data -------------*/}
      <div className='flex flex-col gap-12 sm:flex-row'>

        {/* -------------Product Image --------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img
                  src={item}
                  onClick={() => setImage(item)}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '
                  key={index}
                  alt={`Thumbnail-${index}`}
                />

              ))
            }
          </div>
          <div className='w-full  sm:w-[80%]'>
            <img
              src={image}
              className='w-full h-auto'
              alt='Product_Image' />
          </div>
        </div>

        {/* ----------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flext items-center gap-1 mt-2'>
            {/* <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/> */}
            ⭐⭐⭐⭐⭐<p className='pl=2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 mt-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border border-gray-100 py-2 px-4 rounded-sm bg-gray-100 ${item === size ? 'border-orange-400 bg-orange-100' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 text-gray-500' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is avialable on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>


      {/* -------------Description & Review Section------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border border-gray-200 px-5 py-3 text-sm'>Description</p>
          <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce platform is a digital marketplace that enables businesses and individuals to buy and sell products or services online. It provides customers with a seamless shopping experience through features like product catalogs, secure payment gateways, order tracking, and customer reviews. </p>
          <p>For businesses, e-commerce offers a cost-effective way to reach a global audience without the limitations of physical stores. Advanced analytics help sellers understand customer behavior, optimize pricing, and improve inventory management.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='mt-26 mx-28 text-center border-y-2 border-gray-300 py-30 w-4/5'>
    <p>This product is unavailable</p>
  </div>
}

export default Product;
