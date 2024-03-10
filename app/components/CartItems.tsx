import Image from "next/image";
import React from "react";
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import ProductSize from "./ProductSize";

export default function PickleSweet({
  item,
}: {
  item: {
    name: string;
    description: string;
    imageSrc: string;
    dprice: number;
    price: number;
    discount: string;
  }[];
}) {
  return (
    <section className='py-4'>
      <div className='container flex items-center justify-center'>
        <Card className='py-5 flex items-center justify-center'>
          <CardBody className='overflow-auto py-2'>
            <div className='flexbox gap-7'>
              <Image alt='Chicken pickle' className='flex-1 object-cover ' src={item.imageSrc} width={200} height={200} />
              <div className='flex-1'>
                <h2 className='text-lg font-bold uppercase'>
                  {item.name}
                </h2>
                <p className='text-sm text-default-500'>
                  {item.description}
                </p>

                <div className='mb-6 mt-2 flex gap-4'>
                  <span className='font-bold'>Rs.{item.dprice}</span>
                  <span className='text-default-600 line-through'>{item.price}</span>
                  <span className='text-success'>{item.discount}</span>
                </div>

                <ProductSize />

                <div className='mt-6 flex gap-7'>
                  <Button color='primary'>Buy now</Button>
                  <Button color='primary' variant='bordered' >
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}