import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './index.css'

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

            <div className="instagram-feed">
               <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
               <iframe src="//lightwidget.com/widgets/b7330e225ad05574a3c26a9ead3c1514.html" scrolling="yes" allowtransparency="true" class="lightwidget-widget"></iframe>
            </div>
            /*urls.map( u => {
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
            })*/

        );
    }
}

export default Media;