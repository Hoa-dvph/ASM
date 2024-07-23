import React from 'react'
import BestSeller from './BestSeler'
import Kategorien from './Kategorien'
import Service from './Service'
import About from './About'
import Slide from '../Header/Slide'

type Props = {}

const Main = (props: Props) => {
  return (
    <>
    <Slide/>
    <BestSeller/>
    <Service/>
    <Kategorien/>
    <About/>
    </>
  )
}

export default Main