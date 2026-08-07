import AboutBanner from '@/components/about/AboutBanner'
import AboutContentSections from '@/components/about/AboutContentSections'
import OurStory from '@/components/about/OurStory'
import WhyUs from '@/components/about/Whyus'
import CtaSection from '@/components/global/Ctasection'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutBanner/>
      <OurStory/>
      <AboutContentSections/>
      <WhyUs/>
      <CtaSection/>
    </>
  )
}

export default page
