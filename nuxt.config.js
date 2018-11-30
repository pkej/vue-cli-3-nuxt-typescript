import parseArgs from 'minimist';
require('dotenv').config();

const pkg = require('./package');
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: 'hostname',
    p: 'port',
  },
  string: ['H'],
  unknown: parameter => false,
});

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  '3000';
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  'localhost';

export const env = {
  baseUrl: process.env.BASE_URL || `http://${host}:${port}`,
};
export const head = {
  title: `${pkg.name}`,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: `${pkg.description}`,
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
};

/*
** Customize the progress-bar color
*/
export const loading = { color: '#3B8070' };

/*
** Build configuration
*/
export const css = ['~styles/global.styl'];
export const build = {};
export const modules = [
  '@nuxtjs/axios',
  'nuxt-typescript',
  '@nuxtjs/style-resources',
  '@nuxtjs/vuetify',
  //'@nuxtjs/localtunnel',
];
export const axios = {};
export const styleResources = {
  stylus: ['~styles/default/variables/*.styl'],
};
export const vuetify = {
  materialIcons: true,
  css: true,
};
export const localtunnel = {
  subdomain: 'serversapminrk',
  port: `${port}`,
};
export const plugins = [{ src: '~/plugins/hello.js', ssr: false }];
