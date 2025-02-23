
export default {
  basePath: 'https://miragepioneer.github.io/Proyecto',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
