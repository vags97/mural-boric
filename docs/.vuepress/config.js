const path = require('path');
const dirTree = require('directory-tree');
const MarkdownIt = require('markdown-it');
const meta = require('markdown-it-meta');
const fs = require('fs');

function fileToMdMetaFileName(file){
  const fileName = path.parse(file.name).name;
  const filePath = file.path;
  const md = new MarkdownIt();
  md.use(meta);
  const fileRead = fs.readFileSync(filePath, 'utf8');
  md.render(fileRead);
  return {
    fileName,
    mdMeta: md.meta
  }
}

function getFiles (pathRead) {
  return dirTree(path.join(__dirname, pathRead), {extensions: /\.md/}).children;
}

function getFilesA (pathRead) {
    return dirTree(path.join(__dirname, pathRead), {extensions: /\.jpg|\.png|\.jpeg/}).children;
}

const afiches = getFilesA('public/media/afiches').map(el => el.name);

const materiales = getFiles('../materiales')
    .map(file => {
      const fileInfo = fileToMdMetaFileName(file);
      if ( fileInfo.fileName === 'README') return;
      const mdMeta = fileInfo.mdMeta;
      return {
        route: '/materiales/' + fileInfo.fileName + '.html',
        title: mdMeta.title,
        description: mdMeta.description,
        image: mdMeta.image,
        date: mdMeta.date,
      }
    })
    .sort((a,b) => Date.parse(b.date)- Date.parse(a.date))

const mainPages = [
    {route: '/'}
]

const allPages = [
    ...mainPages,
    ...materiales
]

const googleAnalyticsId = 'G-HX30FV5WLV'

module.exports = {
  plugins: [
      ['sitemap', {
          hostname: 'https://mural.boricpresidente.cl/',
          urls: allPages.map(page=> {
              return {
                  url: page.route,
                  changeFreq: 'daily'
              }
          })
      }],
  ],
  locales: {
      /* This is where you place your general locale config */
      '/': {
          lang: 'es',
      },
  },
  shouldPrefetch: () => false,
  title: "El Mural de Boric",
  description: "Mural de aportes ciudadanos por Boric Presidente",
  image: "/media/BoricLogo.svg",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/media/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/media/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/media/favicons/favicon-16x16.png"}],
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0"} ],
    [
        'script',
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id='+googleAnalyticsId,
        },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '" + googleAnalyticsId + "');",
        ],
    ],
  ],
  themeConfig: {
    author: 'Seguimos',
    title: "Mural por Boric",
    email: 'aportes@boricpresidente.cl',
    nav: [
    ],
    materiales,
    afiches,
    domain: "https://mural.boricpresidente.cl",
    logo: '/media/BoricLogo.svg',
    facebook: 'gabrielboric',
    twitter: 'gabrielboric',
    instagram: 'gabrielboric',
    wikipedia: 'https://es.wikipedia.org/wiki/Gabriel_Boric',
    gkey: 'AIzaSyDXVzczbFe4QYKecXDGZPEfIH3UI3VdFsQ',
    jsonLd: {
        boric: {
            "@type": "Person",
            "id": "candidatoBoric",
            "name": "Gabriel Boric",
            "url": "https://www.boricpresidente.cl",
            "image": "/media/gabriel-boric.jpg",
            "sameAs": [
                "https://www.facebook.com/gabrielboric",
                "https://twitter.com/gabrielboric",
                "https://www.instagram.com/gabrielboric",
                "https://boricpresidente.cl/",
                "https://www.youtube.com/user/gabrielboric",
                "https://es.wikipedia.org/wiki/Gabriel_Boric",
                "https://www.tiktok.com/@gabrielboric"
            ],
            "jobTitle": ["Diputado",  "Candidato Presidente", 'Militante Político'],
        },
        chile: {
            "@type": "Organization",
            "name": "Chile",
            "id": "paisChile",
            "alternateName": "República de Chile",
            "sameAs": [
                'https://es.wikipedia.org/wiki/Chile',
                'https://www.gob.cl/'
            ]
        },
        aprueboDignidad: {
            "@type": "Organization",
            "name": "Apruebo Dignidad",
            "id": "aprueboDignidad",
            "alternateName": "Conglomerado Apruebo Dignidad",
            "url": "https://www.apruebo-dignidad.cl",
            "logo": "https://www.apruebo-dignidad.cl/media/logo-apruebo-dignidad.png",
            "sameAs": [
                "https://www.facebook.com/ADignidadCL",
                "https://www.twitter.com/ADignidadCL",
                "https://www.instagram.com/adignidadcl",
                "https://es.wikipedia.org/wiki/Apruebo_Dignidad",
            ]
        },
        frenteAmplio: {
            "@type": "Organization",
            "name": "Frente Amplio",
            "id": "frenteAmplio",
            "alternateName": "Conglomerado Frente Amplio",
            "url": 'https://www.frente-amplio.cl/',
            "logo": 'https://www.frente-amplio.cl/sites/default/files/logowebfa.png',
            "sameAs": [
                'https://www.facebook.com/FrenteAmpliodeChile',
                'https://twitter.com/elfrente_amplio',
                'https://www.youtube.com/channel/UC35UWpLZQchdul3lT4l1soQ/featured',
                'https://www.instagram.com/frenteamplio_chile/',
                'https://es.wikipedia.org/wiki/Frente_Amplio_(Chile)'
            ]
        }
    }
  },
};
