 [![Check our build status on Travis CI](https://travis-ci.org/ExchangeJS/exchangejs.com.svg?branch=master)](https://travis-ci.org/ExchangeJS/exchangejs.com) [![Join the chat at https://gitter.im/ExchangeJS/exchangejs.github.io](https://badges.gitter.im/ExchangeJS/exchangejs.github.io.svg)](https://gitter.im/ExchangeJS/exchangejs.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is repo for the [ExchangeJS website](http://www.exchangejs.com).

We are tracking all issues on the [exchangejs.github.io repository](https://github.com/ExchangeJS/exchangejs.github.io/issues).

## Getting Started

Before trying to get started, make sure you've installed:

 * [Node.js](https://nodejs.org/en/download/)
 * [Yarn package manager](https://yarnpkg.com/en/docs/install)
 * [Mongodb](https://www.mongodb.com/)

 Mongodb needs to be running before you can start things up. If you installed it with Homebrew then you can do this with:

    brew services start mongodb

Next, install your dependencies:

    yarn install

Crop here create a copy of the `.env` that configures environmental variables for your app:

    cp .env_example .env

Edit it and update your MONGODB, COOKIE_SECRET, and URL settings.

The last thing you need to do is update the admin user that will be created the first time you start your app. For now, this is set in `/updates/0.0.1-admins.js`. Ideally, we will prompt for admin user settings on first run. [(See issue #94)](https://github.com/ExchangeJS/exchangejs-org/issues/94).

You can then run the local development server with:

    yarn dev

To deploy your changes just push to GitHub. Once they're merged into master
they'll deploy to Heroku and our site automatically in a few minutes.
