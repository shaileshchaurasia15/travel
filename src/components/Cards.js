import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

const Cards=(props)=> {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination</h1>
            <div className="cards__container">
                <div className="card__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the amzone jungle"
                        label ="Adventure"
                        path="/services"/>

                    <CardItems 
                        src="images/img-2.jpg"
                        text="Travel through the Icelands of Bali in a private cruise"
                        label ="Luxury"
                        path="/services"/>
                </ul>

                <ul className="cards__items">
                    <CardItems 
                        src="images/img-3.jpg"
                        text="Travel through the Icelands of Bali in a private cruise"
                        label ="Mystery"
                        path="/services"/>

                    <CardItems 
                        src="images/img-4.jpg"
                        text="Travel through the Icelands of Bali in a private cruise"
                        label ="Adventure"
                        path="/services"/>
                    <CardItems 
                        src="images/img-8.jpg"
                        text="Travel through the Icelands of Bali in a private cruise"
                        label ="Adrenaline"
                        path="/services"/>

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards
