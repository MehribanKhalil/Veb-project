import React from 'react'
import Header from '../../layouts/Header'
import Navbar from '../../layouts/Navbar'
import { IntroSection } from '../../components/IntroSection'
import MovieCardsSection from '../../components/MovieCardsSection'
import FestivalProgram from '../../components/FestivalProgram'
import AudienceChoice from '../../components/AudienceChoice'
import PopularMovies from '../../components/PopularMovies'
import Magazine from '../../components/Magazine'
import Speakers from '../../components/Speakers'
import './index.scss'
import Brands from '../../components/Brands'
import TicketSection from '../../components/TicketsSection'
import MobileNav from '../../layouts/MobileNav'
import Footer from '../../layouts/Footer'

export const Home = () => {
  return (


    <div>
      <Navbar/>
      <MobileNav/>
      <div className="wrapper">
        <IntroSection />
        <MovieCardsSection />
        <FestivalProgram />
        <AudienceChoice />
        <PopularMovies />
        <Magazine />
        <Speakers />
        <TicketSection/>
        <Brands/>
        <Footer/>
      </div>

    </div>
  )
}
