import React from 'react'

interface HeadingProps {
    title: string
    subTitle?: string
}

const Heading = ({
    title,
    subTitle,
}: HeadingProps) => {
  return (
    <div className='mb-8'>
        <h1 className='heading-1'>{title}</h1>
        <p className='sub-title'>{subTitle}</p>
    </div>
  )
}

export default Heading