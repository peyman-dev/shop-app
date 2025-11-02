import { arrayMap } from '@/core/features/array-map'
import React from 'react'
import StoryCard from './fragments/story-card'

const Stories = () => {
  return (
    <section className='container my-6 flex-ic gap-4'>
        {arrayMap(10, <StoryCard />)}
    </section>
  )
}

export default Stories