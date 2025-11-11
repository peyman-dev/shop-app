import { Divider } from '@mantine/core'
import React from 'react'

const SectionLabel = ({text}: {text: string}) => {
  return (
    <div className='mb-10 space-y-10'>
        <h3 className='font-YekanBakh-Black! text-primary-light text-center text-2xl! mb-4'>
            {text}
        </h3>

        <Divider />
    </div>
  )
}

export default SectionLabel