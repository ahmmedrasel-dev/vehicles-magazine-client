import React from 'react'
import Articles from './Articles'
import thumbnail from '@/app/assets/thumbnail/main_thumb1.png'

const LatestArticles = () => {
  const latestArticles = [
    {
      title: 'How to Have Fun Travelling: 10 Best Travel Tips from a Pro',
      thumb: thumbnail,
      slug: 'news-1',
      summary: 'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)',
      author: 'Anisur Rahman',
      created_at: 'Oct 25'
    },
    {
      title: 'How to Have Fun Travelling: 10 Best Travel Tips from a Pro',
      thumb: thumbnail,
      slug: 'news-2',
      summary: 'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)',
      author: 'Anisur Rahman',
      created_at: 'Dec 12'
    },
    {
      title: 'How to Have Fun Travelling: 10 Best Travel Tips from a Pro',
      thumb: thumbnail,
      slug: 'news-3',
      summary: 'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)',
      author: 'Rasel Ahmmed',
      created_at: 'Dec 12'
    },
    {
      title: 'How to Have Fun Travelling: 10 Best Travel Tips from a Pro',
      thumb: thumbnail,
      slug: 'news-4',
      summary: 'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)',
      author: 'Anisur Rahman',
      created_at: 'Dec 12'
    },
    {
      title: 'How to Have Fun Travelling: 10 Best Travel Tips from a Pro',
      thumb: thumbnail,
      slug: 'news-5',
      summary: 'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)',
      author: 'Rasel Ahmmed',
      created_at: 'Dec 12'
    },
  ]
  return (
    <div className='grid grid-cols-2 gap-4 mt-8'>
      {
        latestArticles.map((item, index) => <Articles key={index} article={item} />)
      }
    </div>
  )
}

export default LatestArticles