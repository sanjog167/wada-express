import React from 'react'
import Hero from './_components/Hero'
import BottomBanner from './_components/BottomBanner'
import { About } from './_components/About'
import { Blog } from './_components/Blog'

function page() {
  return (
    <>
    <Hero />
    <BottomBanner />
    <About />
    <Blog />
    </>
  )
}

export default page