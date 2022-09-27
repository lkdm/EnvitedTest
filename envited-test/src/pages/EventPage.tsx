import React, { useEffect } from "react"
import { useLocation } from "react-router"
import EventImage from "../assets/images/event-image.png"


const EventPage = () => {
    const { state } = useLocation()
    if (!state) return <>Please submit some data</>

    return <div className="event-container">
        <img src={EventImage} className="event-image img-responsive w-100" alt="Image showing the application." />
        <main role='main' className="event-wrapper">
        <header role="banner" className="event-heading mt-5 mb-3">
            <h1>{state.eventName}</h1>
            <p>Hosted by <b>{state.eventHostName}</b></p>
        </header>
        <section className="event-details">
            <ul>
                <li>
                    {state.startDate}
                    &nbsp;
                    to
                    &nbsp;
                    {state.endDate}
                </li>
                <li>
                    {state.location}
                </li>
            </ul>
        </section>
        </main>
    </div>
}

export default EventPage