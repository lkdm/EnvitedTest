import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()

    const [eventName, setEventName] = useState("");
    const [eventHostName, setEventHostName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [fileUpload, setFileUpload] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log({
            eventName,
            eventHostName,
            startDate,
            endDate,
            location,
            fileUpload
        })
        navigate('/event', { state: {
            eventName,
            eventHostName,
            startDate,
            endDate,
            location,
            fileUpload
        } })
    }

    return <main role='main' className="create-wrapper">
        <header role="banner" className="create-heading">
            <h1>Create your dream <strong>Birthday</strong> event.</h1>
            <p>Easily host and share events with your friends across any social media.</p>
        </header>
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter event name"
                        onChange={(e) => setEventName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Event Host Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter host name"
                        onChange={(e) => setEventHostName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter start date"
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter start date"
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter location name"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="">Choose event photo:</Form.Label>
                    <Button
                        variant="btn btn-outline-primary m-1"
                        onChange={(e) => setFileUpload("EXAMPLE_FILE_ID")}>
                            Upload
                        </Button>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </section>
    </main>
}

export default Create