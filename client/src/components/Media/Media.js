import React from 'react'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Helmet from 'react-helmet'

// export const Media = () => (
//     <Container>
//         This will be the media section.
//         <Instagram />
//         <Facebook />
//     </Container>
// )

class Media extends React.Component {
    render() {
        return (
            <Helmet>
                <script async
                    src='https://www.instagram.com/embed.js'
                />
            </Helmet>
        );
    }
}

export default Media;