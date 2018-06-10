# Dribblr

Infinite scroll web app with images from Behance API. User can favorite/un-favorite each image shot.

## How to run

- Pre-requisites: Node.js 8+, yarn
- `$ yarn install`
- `$ API_KEY=xxxxxxx yarn dev`

  `API_KEY` refers to Behance API key which can be acquired by registering an app
via https://www.behance.net/dev)

## Acknowledgements

- The app was originally meant for Dribble API. v1, however, is retired. And v2 does not provide public endpoints to 
list public media (functionality is only provided for selected customers). Switched to Behance API as the best closest 
alternative from the content point of view. Note that Behance API has 150 hourly request limit.
- Even though requirements state Vanilla JS-only, 'bonus points' contradicts as it gives bonus points for Redux usage. 
Made an assumption that Redux-related libraries are OK. Everything else is Vanilla JS, except for dev dependencies.
