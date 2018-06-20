## VUE CLI 3.0 installation procedure
``` bash
$ vue create app-name
$ cd app-name
$ vue add nuxt-starter-template
$ npm un nuxt
$ npm i nuxt-edge --save
$ npm i nuxt-typescript typescript tslint --save-dev
```

[Follow these instructions for configuring nuxt.config.js.](https://github.com/wagerfield/nuxt-typescript) Don't worry about tsconfig.json if you configure vue cli to use typescript it should be configured correctly already.

``` bash
$ npm i mobx-vue --save
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Learn more
[Chris V. Fritz Vue Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
