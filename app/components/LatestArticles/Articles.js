import { roboto } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Articles = ({article}) => {
  return (
    <div>
        <Link href={`articles/${article.slug}`}><Image src={article.thumb} alt='' className='w-full' /></Link>
        <Link href={`articles/${article.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color py-4`}>{article.title}</h3></Link>
        <p className={'text-text_color text-base'}>
        {article.summary} ...
        </p>
        <div className='flex justify-between mt-4'>
          <h4 className={`font-semibold text-base`}>{article.author}</h4>
          <p className={`text-base text-text_color`}><span>{article.created_at} </span>- <span>4 min read</span></p>
        </div>
    </div>
  )
}

export default Articles