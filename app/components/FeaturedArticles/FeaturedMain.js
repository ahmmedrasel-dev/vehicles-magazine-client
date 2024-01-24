import Image from 'next/image'
import React from 'react'
import thumbnail from '@/app/assets/thumbnail/main_thumb1.png'
import { roboto } from '@/app/fonts'
import Link from 'next/link'

const FeaturedMain = () => {
  return (
    <>
        <Link href={`articles/news_1`}><Image src={thumbnail} alt='' className='w-full' /></Link>
        <Link href={`articles/news_1`}><h3 className={`${roboto.className} text-xl text-heading_color py-4`}>How to Have Fun Travelling: 10 Best Travel Tips from a Pro</h3></Link>
        <p className={'text-text_color text-base'}>
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) ...
        </p>
        <div className='flex justify-between mt-4'>
          <h4 className={`font-semibold text-base`}>Darinka Kostelnik</h4>
          <p className={`text-base text-text_color`}><span>Oct 25 </span>- <span>4 min read</span></p>
        </div>
    </>
  )
}

export default FeaturedMain