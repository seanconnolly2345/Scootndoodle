import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './index.css'
//import './instafeed-project/css/jCirclize.css'
//import'./instafeed-project/js/jCirclize.js'
//import './instafeed-project/js/instafeed.min.js'
//import './instafeed-project/js/custom.js'
//import Script from 'react-load-script'
//import InstagramFeedGallery from './InstagramFeedGallery'

import InstagramEmbed from 'react-instagram-embed'


const urls = [
    'https://www.instagram.com/p/B4gqBaVHy_S/',
    'https://www.instagram.com/p/B4gqAv1nuA8/',
    'https://www.instagram.com/p/B4gpufIHX_t/',
    'https://www.instagram.com/p/B4gpbNOnFRI/',
    'https://www.instagram.com/p/B4f1H_cHgVp/'
]

class Media extends React.Component {
    
    render() {
        return (
            urls.map( u => {
                return (
                    <div className="centered">
                        <InstagramEmbed
                        url={u}
                        maxWidth={500}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                    </div>
                )
            })

        );
    }
}

export default Media;