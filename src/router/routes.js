
const routes = [
  {
    path: '/',
    redirect: '/quasar'
  },
  {
    path: '/quasar',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { name: 'Quasar', path: '', component: () => import('pages/Index.vue') }
    ]
  },
  // add layouts alphabetically after Quasar
  {
    path: '/googlenews',
    component: () => import('layouts/LayoutGoogleNews.vue'),
    children: [
      { name: 'GoogleNews', path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/googlephotos',
    component: () => import('layouts/LayoutGooglePhotos.vue'),
    children: [
      { name: 'GooglePhotos', path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/googleplay',
    component: () => import('layouts/LayoutGooglePlay.vue'),
    children: [
      { name: 'GooglePlay', path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/youtube',
    component: () => import('layouts/LayoutYoutube.vue'),
    children: [
      { name: 'YouTube', path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  })
}

export default routes
