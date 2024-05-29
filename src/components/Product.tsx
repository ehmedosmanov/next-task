import { slugify } from '@/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductProps {
    title: string;
    price: number;
    description: string;
    image: string;
}

const Product = ({ id, title, image, description, price }: ProductProps) => {
    return (
        <div className="border-2 border-black p-4 h-[300px] flex flex-col justify-between">
            <div className="flex justify-center items-center mb-2">
                <Image width={100} height={100} src={image} alt={title} className="object-contain" />
            </div>
            <div className="mt-2 text-center">
                <Link href={`/products/${id}-${slugify(title)}`} className="truncate w-2/12 overflow-hidden text-lg font-semibold">
                    <h2 className="truncate block">{title}</h2>
                </Link>
                <p className="truncate">{description}</p>
                <span className="font-bold text-lg">{price}</span>
            </div>
        </div>
    )
}

export default Product