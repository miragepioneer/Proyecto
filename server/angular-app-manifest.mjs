
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://miragepioneer.github.io/Proyecto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Proyecto/Listado",
    "route": "/Proyecto"
  },
  {
    "renderMode": 2,
    "route": "/Proyecto/Listado"
  },
  {
    "renderMode": 2,
    "route": "/Proyecto/Detalles"
  },
  {
    "renderMode": 2,
    "route": "/Proyecto/Formulario"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4979, hash: '4ac851728022c1e0ad26c4f148229c2e06f5acbb735de22f46c644f43f39e2ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1095, hash: '3acd61965c957fe057a91c21f6838b5470b47fb4d6f424e587b62d1310f488a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Detalles/index.html': {size: 5065, hash: '71f0328f372f7bebf2adf75ac8f7358355346e96e0896ff2d7fa7cfb76209d1e', text: () => import('./assets-chunks/Detalles_index_html.mjs').then(m => m.default)},
    'Listado/index.html': {size: 5065, hash: '71f0328f372f7bebf2adf75ac8f7358355346e96e0896ff2d7fa7cfb76209d1e', text: () => import('./assets-chunks/Listado_index_html.mjs').then(m => m.default)},
    'Formulario/index.html': {size: 15919, hash: '4b8176dc35e5c2172427c10bcfad750f0470cb93cd971bffb93703a48761c709', text: () => import('./assets-chunks/Formulario_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
