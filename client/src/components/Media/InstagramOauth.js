const expressRouter = require('express').Router()

const instagram = require('./instagramOauthCodeExchange')

const {
  instagramClientId,
  instagramClientSecret,
  instagramRedirectURI,
  isThereValue,
  sendErrorReport
} = require('./utility')

expressRouter.post('/feed', (req, res) => {
  instagram.getGalleryFeed()
  .then(response => {
    const items = response.data.map(item => ({image: item.images.standard_resolution.url, caption: item.caption.text, id: item.id, url: item.link}))
    res.json({status: true, items})
  })
  .catch(err => {
    if (err) {
      sendErrorReport(`backend/api/instagram - /feed - Error while calling the getGalleryFeed-function within the backend/helper/instagram-script | Err: ${err}`)
    }
    res.json({status: false})
  })
})

expressRouter.get('/oauthCode', (req, res) => {
  const code = req.query.code
  if (isThereValue(code)) {
    instagram.oauth(instagramClientId, instagramClientSecret, code, instagramRedirectURI)
      .then(() => res.send('access_token successfully refreshed'))
      .catch(err => {
        if (err) {
          sendErrorReport(`backend/api/instagram - /oauthCode - Error while calling the oauth-function within the backend/helper/instagram-script | Err: ${err}`)
        }
        res.send('Error while refreshing the access_token')
      })
  } else {
    res.send(`call: https://api.instagram.com/oauth/authorize/?client_id=${instagramClientId}&redirect_uri=${instagramRedirectURI}&response_type=code`)
  }
})

module.exports = expressRouter