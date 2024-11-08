import FormExampleComponent from '@/components/FormExampleComponent'
import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
    <section className='container mx-auto py-12'>
        <Heading title='Form Example' subTitle='Test subtitle' />
        <FormExampleComponent />
    </section>
  )
}

export default page