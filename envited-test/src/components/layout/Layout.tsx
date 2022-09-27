import React, { ReactElement } from "react"
import { Container } from "react-bootstrap"

interface Props {
    children: ReactElement | ReactElement[]
}

const Layout = ({children}: Props) => {
    return <Container>
        {children}
    </Container>
}

export default Layout