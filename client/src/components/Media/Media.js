import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InstagramFeedGallery from './InstagramFeedGallery'


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
            // <h1>
            //     Hello
            // </h1>
            <InstagramFeedGallery/>
        );
    }
}

export default Media;