import React from 'react'

function SectionTilte({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-3xl text-notso'>{title}</h1>
        <div className='w-60 h-[1px] bg-tertiary'>

        </div>
    </div>
  )
}

export default SectionTilte
