import { roboto } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const PArticles = ({article}) => {
  return (
    <div className='grid grid-cols-4 gap-4 mb-4'>
        <div className='col-1'>
          <Image src={article.thumb} className='w-full' alt=''/>
        </div>
        
        <div className='col-span-3'>
          <h3 className={`${roboto.className} text-xl text-heading_color`}>{article.title}</h3>
          {/* <p className={'text-text_color text-base py-4'}>
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden ...
        </p> */}
          <h4 className={`font-semibold text-base mt-4`}>{article.author}</h4>
          <p className={`text-base text-text_color`}><span>{article.created_at} </span>- <span>4 min read</span></p>
        </div>
    </div>
  )
}

export default PArticles