var appShellFiles = [
  '/plantilla/index.html',
  '/plantilla/about.html',
  '/plantilla/images/favicon.png',
  '/plantilla/plugins/bootstrap/bootstrap.min.css',
  '/plantilla/plugins/slick/slick.css',
  '/plantilla/plugins/themify-icons/themify-icons.css',
  '/plantilla/css/style.css',
  '/plantilla/images/logo.png',
  '/plantilla/images/illustrations/leaf-bg.png',
  '/plantilla/images/illustrations/dots-cyan.png',
  '/plantilla/images/illustrations/leaf-orange.png',
  '/plantilla/images/illustrations/dots-orange.png',
  '/plantilla/images/illustrations/leaf-yellow.png',
  '/plantilla/images/illustrations/leaf-cyan.png',
  '/plantilla/images/illustrations/dots-group-orange.png',
  '/plantilla/images/illustrations/leaf-pink-round.png',
  '/plantilla/images/illustrations/leaf-cyan-2.png',
  '/plantilla/images/experience/icon-1.png',
  '/plantilla/images/experience/icon-2.png',
  '/plantilla/images/experience/icon-3.png',
  '/plantilla/images/portfolio/item-1.png',
  '/plantilla/images/portfolio/item-2.png',
  '/plantilla/images/portfolio/item-3.png',
  '/plantilla/images/portfolio/item-4.png',
  '/plantilla/images/portfolio/item-5.png',
  '/plantilla/images/testimonial/client-1.png',
  '/plantilla/images/backgrounds/education-bg.png',
  '/plantilla/plugins/jQuery/jquery.min.js',
  '/plantilla/plugins/bootstrap/bootstrap.min.js',
  '/plantilla/plugins/slick/slick.min.js',
  '/plantilla/plugins/shuffle/shuffle.min.js',
  '/plantilla/js/script.js',
];

self.addEventListener('install', event => {  

  const endInstall = caches.open('box').then( cache =>{  
    return cache.addAll(appShellFiles);
  });

  event.waitUntil( endInstall);

  //self.skipWaiting();
});

self.addEventListener('fetch', e =>{

  const respuesta = caches.open( 'box' ).then( cache => {

         fetch( e.request ).then( newRes => 
                 cache.put( e.request, newRes ));

         return cache.match( e.request );

     });

     e.respondWith( respuesta );
});