import React from 'react'
import { H1Form } from '../../components/StyleComponents'
import { BotonArriba } from '../../components/BotonArriba/BotonArriba'
import { AboutElement } from './About.element'

export const About = () => {
  return (<>
  <AboutElement>
    <H1Form>About us</H1Form>
    <section className='about'>


      <section className='sectionAbout'>
        <img className='imgAbout' src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702567631/l1bh3epztqs2gackdr4o.png" alt="" />
      <article className='articleAbout'>
        <h2>Our Story</h2>
        <p>Our final project is a snapshot of hard work, collaboration, and growth. From wild ideas to late-night debugging, each line of code represents our journey through this coding bootcamp. This showcase is more than a project; it's the story of a team that faced challenges and triumphed together.      
</p>
        </article>
        </section>
        <section className='sectionAboutL'>
        <img className='imgAbout' src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702569293/kr7w3hsdida5r2uk2t3z.avif" alt="" />
      <article className='articleAbout'>
        <h2>Our Mission</h2>
        <p>Our goal is to develop a housing app that simplifies the search for roommates. With this application, individuals can easily find compatible housemates based on shared preferences, lifestyles, and interests. The app aims to streamline the process of finding the perfect living arrangement, fostering connections and creating harmonious living environments</p>
        </article>
        </section>
       
         <article>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to <a href="#">contact us</a>.</p>
        <p>Neolandprogramacion@gmail.com</p>
        </article>
        <BotonArriba/>
    </section>
    </AboutElement>
    </>
  )
}
