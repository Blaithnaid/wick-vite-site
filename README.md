# wick website

to run the site:

- install all dependencies with `npm install`
- run the dev server `npx vite`

to deploy the site (only for developers):

- install the firebase CLI with `npm install -g firebase-tools`
- log in with `firebase login`
- build the site after making changes with `npx vite build`
- deploy the site with `firebase deploy --only hosting`
