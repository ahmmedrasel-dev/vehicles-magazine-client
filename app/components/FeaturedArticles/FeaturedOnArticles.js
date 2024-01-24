import React from 'react'
import ArticlesHeading from '../Shared/ArticlesHeading'
import FeaturedMain from './FeaturedMain'
import FeaturedPrimary from './FeaturedPrimary'
import thumbnail1 from '@/app/assets/thumbnail/1.png'
import thumbnail2 from '@/app/assets/thumbnail/2.png'
import thumbnail3 from '@/app/assets/thumbnail/3.png'
import thumbnail4 from '@/app/assets/thumbnail/4.png'
import FeatureSecondary from './FeatureSecondary'

export const FeaturedOnArticles = () => {

  const featurePrimary = [
    {
      title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
      thumb: thumbnail1,
      slug: 'news-1',
      summary: '',
      author: 'Anisur Rahman',
      created_at: 'Oct 25'
    },
    {
      title: 'Slams Bayern  Authorities Over Flight Delay to World Cup',
      thumb: thumbnail2,
      slug: 'news-2',
      summary: '',
      author: 'Rasel Ahmmed',
      created_at: 'Dec 12'
    }
  ]
  const featureSecondary = [
    {
      title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
      thumb: thumbnail3,
      slug: 'news-1',
      summary: '',
      author: 'Anisur Rahman',
      created_at: 'Oct 25'
    },
    {
      title: 'Slams Bayern  Authorities Over Flight Delay to World Cup',
      thumb: thumbnail4,
      slug: 'news-2',
      summary: '',
      author: 'Rasel Ahmmed',
      created_at: 'Dec 12'
    },
    {
      title: 'Slams Bayern  Authorities Over Flight Delay to World Cup',
      thumb: thumbnail3,
      slug: 'news-3',
      summary: '',
      author: 'Rasel Ahmmed',
      created_at: 'Dec 12'
    }
  ]
  return (
    <div className='py-6'>
      <ArticlesHeading title="Featured on  Articles" />
      <div className='grid grid-cols-3 gap-4 mt-8'>
          <div>
            <FeaturedMain />
          </div>
          <div className=''>
            {
              featurePrimary.map((item, index) =>  <FeaturedPrimary key={index} article={item} />)
            }
          </div>
          <div>
            {
              featureSecondary.map((item, index) =>  <FeatureSecondary key={index} article={item} />)
            }
          </div>
      </div>
    </div>
  )
}
