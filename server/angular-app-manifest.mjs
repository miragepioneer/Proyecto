
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Proyecto/',
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
    'index.csr.html': {size: 4948, hash: '93648ad01b7ab6e43fd23da9ea1a0eef54ab95742d4770a5352e25b4b4ed1944', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1064, hash: 'a679bfe81586b6a8b8a64eb6d0330d82540d810b40021b2eddd3f8e34cfb9288', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Detalles/index.html': {size: 5034, hash: '1d84f84164bbaf1b8193e69ad90cf865d3700e83b326898ab681895c027ff878', text: () => import('./assets-chunks/Detalles_index_html.mjs').then(m => m.default)},
    'Listado/index.html': {size: 5034, hash: '1d84f84164bbaf1b8193e69ad90cf865d3700e83b326898ab681895c027ff878', text: () => import('./assets-chunks/Listado_index_html.mjs').then(m => m.default)},
    'Formulario/index.html': {size: 15888, hash: '0636e57f4a0dd8f45bc2ea0816d5e3520eea7dffa422bed720079eb20eac22a7', text: () => import('./assets-chunks/Formulario_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
