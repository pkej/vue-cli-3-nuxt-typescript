import hello from 'hellojs';
import Vue from 'vue';
const secretsImport = require('~/secrets/hellojs.json');
hello.init(secretsImport);

const HelloJS = {
  install(v) {
    Vue.prototype.$hello = hello;
  },
};

Vue.use(HelloJS);
