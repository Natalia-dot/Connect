import { useEffect, useState } from 'react';
import { ButtonPrimary, FlexDir, Form, MiniCards } from '../../components/StyleComponents'
<Link to="/register"></Link>

import { Link } from 'react-router-dom';
import { BotonArriba } from '../../components/BotonArriba/BotonArriba';
import styled from "@emotion/styled"
import { HomeElement } from './Home.element';
export const Home = () => {
 




  return (
<HomeElement>
<div className='home'>
  <section className='imagenPrincipal'>
  <article className='registrate'>
 
        <h2>Unlock Benefits:<br/> Register Now!</h2>
        <Link to="/register">
           <ButtonPrimary>Register Now</ButtonPrimary>
        </Link>
       
   
  </article>
  </section>
 
  <section className='articleSmallContainer'>
    <article className='articleSmall'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702551961/qelzk4orupgn409surv5.png" alt="Un mapa con una chincheta"/>
      <div className='parteTexto'>
        <h3 className='hHome'> Accurate location</h3>
        <p>Secure your room in the location you need.</p>
        <Link className="link"to={"/roomsearch"}>Get your room</Link>
      </div>
    
    </article>
    <article className='articleSmall'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702551960/bvy675olyeco90oxqshy.png" alt="Manos en un ordenador"/>
      <div className='parteTexto'>
        <h3 className='hHome'>Swift Search.</h3>
        <p>Find in minutes exactly what you need.</p>
        <Link className="link" to={"/roomSearch"}>Search</Link>
      </div>
    
    </article>
    
   
  </section>
  <section className='sectionGrande'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702552600/pl9dhup17rw7tibsisyw.png" alt="Dos mujeres riéndose"/>
  
      <article className='textoGrande'>
        <h3 className='hHome'>New flatmates!</h3>
       <p>Find someone to join your apartment or search for a flat to join.</p>
        <Link className="link" to={"/feed"}>Start now</Link>
      </article>

    </section>
  <section className='leftSection'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702557520/qfwylmwwiw6g76ykjmk8.jpg"alt="Grupo de amigos con el móvil"/>
  
      <article className='textoGrandeL'>
        <h3 className='hHome'>Chat and meet</h3>
       <p>Connect and discover. Join us for vibrant conversations and meaningful connections.
       </p>
        <Link className="link"to={"/messages"}>Go to chats</Link>
      </article>

    </section>
    <section className='sectionGrande'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702561445/f8yg29casftvtzs7f6bs.png" alt="Un piso lujoso"/>
  
      <article className='textoGrande'>
        <h3 className='hHome'>The room you need.</h3>
       <p>"Find the room that best suits your needs with our selective search engine. </p>
       <Link className="link"to={"/roomsearch"}>Get your room</Link>
      </article>

    </section>
   <BotonArriba/>
</div>
</HomeElement>
  )
}
