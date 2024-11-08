import FormExampleComponent from '@/components/FormExampleComponent'
import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
    <section className='container mx-auto py-12'>
        <Heading title='Form Example' subTitle='Test subtitle' />
        <FormExampleComponent user={{
          id: "test-ID",
          username: 'sheesh',
          email: 'sheesh@example.com',
          password: 'password123',
        }} />
    </section>
  )
}

export default page