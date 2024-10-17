import React from 'react'
import Navbar from '../_components/navbar'
import Packages from '../_components/packages'
import PackageHero from '../_components/package-hero'

const Pack = () => {
  return (
    <div>
         <PackageHero name={"Packages"}  img={"/assets/images/about-images/14.jpg"} data={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum dolores dicta, eaque id expedita totam ex provident molestiae cupiditate hic reprehenderit, non vel quaerat mollitia odio iusto sunt quisquam.'} />
       <Packages />

    </div>
  )
}

export default Pack