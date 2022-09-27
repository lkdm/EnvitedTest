import React from "react"
import { Link } from "react-router-dom"
import AppDemoImage from "../assets/images/app-demo-pic.png"

const Index = () => {
    return <main role='main' className="landing-wrapper">
        <header role="banner" className="landing-heading">
            <h1>Imagine if <strong>Snapchat</strong> had events.</h1>
            <p>Easily host and share events with your friends across any social media.</p>
        </header>
        <section className="landing-image">
            <img src={AppDemoImage} className="landing-demoimage" alt="Image showing the application." />
        </section>
        <section className="landing-calltoaction">
            <Link to="create" className="landing-button" aria-role="button">🎉 Create my event</Link>
        </section>
        </main>
}

export default Index