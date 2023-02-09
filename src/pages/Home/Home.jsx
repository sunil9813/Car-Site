import React, { useState } from "react"
import { mostSearched } from "../../components/assets/data/data"
import { FilterCard, PopularBrands, Sliders } from "../../router/router"

export const Home = () => {
  const [mostSearchData, setMostSearchData] = useState(mostSearched)

  console.log(setMostSearchData)

  return (
    <>
      <Sliders />
      <FilterCard title='The most searched cars' item={mostSearchData} show={true} />
      <FilterCard title='Latest Cars' item={mostSearchData} show={false} />
      <FilterCard title='Upcoming Cars' item={mostSearchData} show={false} />
      <FilterCard title='Trusted used cars by budget' item={mostSearchData} show={true} />
      <PopularBrands />
    </>
  )
}
