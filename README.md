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
### This setup
[Using Vue-Cli](https://medium.com/js-dojo/vue-cli-3-a-game-changer-for-frontend-development-a11b56a301a8)
[Vue Cli Plugin Nuxt Starter Template](https://github.com/andoshin11/vue-cli-plugin-nuxt-starter-template)
[Using Nuxt-Edge](https://medium.com/nuxt/nuxt-2-is-coming-oh-yeah-212c1a9e1a67)
[mobx-vue](https://github.com/mobxjs/mobx-vue)
[nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)
[nuxt-class-component](https://github.com/nuxt-community/nuxt-class-component)
### TypeScript
[TypeScript documentation](http://www.typescriptlang.org/docs/home.html)
[Basarat's TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)

### TypesScript and Vue
[This video helped me get rid of TSLint errors when it came to props](https://egghead.io/lessons/vue-js-define-props-on-a-vue-class-with-vue-property-decorator)

### General Vue/Nuxt resources

[Chris V. Fritz Vue Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
