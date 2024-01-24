import Image from 'next/image'
import React from 'react'

import { roboto } from '@/app/fonts'
import Link from 'next/link'

const FeaturedPrimary = ({article}) => {
  return (
    <div className='grid grid-cols-2 gap-4 mb-8'>
        <div className=''>
          <Link href="/"><Image src={article.thumb} alt=''/></Link>
        </div>
        
        <div className='mb-8'>
          <Link href={`articles/${article.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color`}>{article.title}</h3></Link>
          {/* <p className={'text-text_color text-base py-4'}>
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden ...
        </p> */}
          <h4 className={`font-semibold text-base mt-6`}>{article.author}</h4>
          <p className={`text-base text-text_color`}><span>{article.created_at} </span>- <span>4 min read</span></p>
        </div>
    </div>
  )
}

export default FeaturedPrimary