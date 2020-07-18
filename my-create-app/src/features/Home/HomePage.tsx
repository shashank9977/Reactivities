import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (       
        <Container style={{marginTop:'7em'}}>
             <h1>This is Home page2422423</h1>
             <h2>go to <Link to="/activities">Activities</Link> </h2>
        </Container>       
    )
}
