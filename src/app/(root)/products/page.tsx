import Product from '@/components/Product';
import { getAllProducts } from '@/services/products-services';
import { GetStaticProps, Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Products Page",
    description: "Next Js Task with TS",
};



//! "getStaticProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching
// export const getStaticProps: GetStaticProps = async () => {
//     const products = await getAllProducts()
//     return {
//         props: {
//             products
//         }
//     }
// }


const Products = async () => {
    const allProducts = await getAllProducts()
    return (
        <section className="">
            <div className='py-10 px-10'>
                <div className="grid grid-cols-3">
                    {allProducts.map(item => <Product key={item.id} {...item} />)}
                </div>
            </div>
        </section>
    )
}

export default Products