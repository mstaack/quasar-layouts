
const routes = [
  {
    path: '/',
    redirect: { name: 'Quasar' },
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: 'google',
        name: 'Google',
        component: () => import('layouts/EmptyLayout.vue'),
        children: [
          {
            path: 'news',
            component: () => import('layouts/LayoutGoogleNews.vue'),
            children: [
              { name: 'Google News', path: '', component: () => import('pages/Index.vue') }
            ]
          },
          {
            path: 'photos',
            component: () => import('layouts/LayoutGooglePhotos.vue'),
            children: [
              { name: 'Google Photos', path: '', component: () => import('pages/Index.vue') }
            ]
          },
          {
            path: 'play',
            component: () => import('layouts/LayoutGooglePlay.vue'),
            children: [
              { name: 'Google Play', path: '', component: () => import('pages/Index.vue') }
            ]
          },
          {
            path: 'youtube',
            component: () => import('layouts/LayoutYoutube.vue'),
            children: [
              { name: 'YouTube', path: '', component: () => import('pages/Index.vue') }
            ]
          }
        ]
      },
      {
        path: 'other',
        name: 'Other',
        component: () => import('layouts/EmptyLayout.vue'),
        redirect: { name: 'Quasar' },
        children: [
          {
            path: 'quasar',
            component: () => import('layouts/MyLayout.vue'),
            children: [
              { name: 'Quasar', path: '', component: () => import('pages/Index.vue') }
            ]
          },
          {
            path: 'github',
            component: () => import('layouts/LayoutGitHub.vue'),
            children: [
              { name: 'GitHub', path: '', component: () => import('pages/Index.vue') }
            ]
          },
          {
            path: '/softwareasaservice',
            component: () => import('layouts/LayoutSoftwareAsAService.vue'),
            children: [
              { name: 'Software As A Service', path: '', component: () => import('pages/Index.vue') }
            ]
          }
        ]
      }
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
