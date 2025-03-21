
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web-portfolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 26170, hash: '720b408bcc3fa6aede9b21fff61a4fd6196f1cd76ab581f0f56020ae5fd03cb8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17127, hash: 'e422892e77a50695b69d3364e6d9cfd3ffe4c85449d6df20d4fffff9a95b02dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RWZALD6K.css': {size: 281303, hash: 'qWac6PQr0UY', text: () => import('./assets-chunks/styles-RWZALD6K_css.mjs').then(m => m.default)}
  },
};
