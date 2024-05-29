import { getById } from '@/services/products-services'
import Image from 'next/image'
import React from 'react'
interface Props {
    params: {
        slug: string
    }
}

const ProductDetail = async ({ params: { slug } }: Props) => {
    const id = slug.split('-')[0];
    const getProduct = await getById(id)
    console.log(getProduct);
    return (
        <section className='h-screen'>
            <div className='py-10 px-10'>
                <div className='grid  grid-cols-2 '>
                    <div>
                        <Image  src={getProduct.image} width={340} height={340} alt={getProduct.image} />
                    </div>
                    <div className='flex justify-center items-start flex-col'>
                        <h3 className=" text-lg font-semibold">{getProduct.title}</h3>
                        <p className="py-10">{getProduct.description}</p>
                        <span className="font-bold text-lg">{getProduct.price}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail