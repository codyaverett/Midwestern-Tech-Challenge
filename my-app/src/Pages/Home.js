import React from 'react'
import { Footer, Header, Info } from '../Containers';


const Home = () => {
    return (
        <div className='home-pg'>
              <Header tag='contact' link='/contact'/>
              <Info />
              <Footer />
        </div>
    )
}

export default Home
