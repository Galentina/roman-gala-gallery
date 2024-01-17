import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2002_1 = [
  {
    id: 'skate',
    name: 'Ice skate, Milano',
    cover: albumCover('2002', 'skate', 7),
    images: fileNames({ album: 'skate', n: 20, type: 'jpg', year: '2002' }),
  },
  {
    id: 'euro_fest',
    name: 'Euro Fest, Milano',
    cover: albumCover('2002', 'euro_fest', 7),
    images: fileNames({ album: 'euro_fest', n: 29, type: 'jpg', year: '2002' }),
  },
  {
    id: 'christmas',
    name: 'Christmas in Milano',
    cover: albumCover('2002', 'christmas', 19),
    images: fileNames({ album: 'christmas', n: 24, type: 'jpg', year: '2002' }),
  },
  {
    id: 'marathon',
    name: 'Marathon in Milano',
    cover: albumCover('2002', 'marathon', 1),
    images: fileNames({ album: 'marathon', n: 16, type: 'jpg', year: '2002' }),
  },
  {
    id: 'shops',
    name: 'Shops in Milano',
    cover: albumCover('2002', 'shops', 30),
    images: fileNames({ album: 'shops', n: 67, type: 'jpg', year: '2002' }),
  },
  {
    id: 'carnevale',
    name: 'Carnevale',
    cover: albumCover('2002', 'carnevale', 1),
    images: fileNames({ album: 'carnevale', n: 18, type: 'jpg', year: '2002' }),
  },
  {
    id: 'compleanno',
    name: 'Festa di compleanno',
    cover: albumCover('2002', 'compleanno', 1),
    images: fileNames({ album: 'compleanno', n: 20, type: 'jpg', year: '2002' }),
  },
  {
    id: 'parco_sempione',
    name: 'Parco Sempione',
    cover: albumCover('2002', 'parco_sempione', 6),
    images: fileNames({ album: 'parco_sempione', n: 14, type: 'jpg', year: '2002' }),
  },
  {
    id: 'people',
    name: 'People of Milan',
    cover: albumCover('2002', 'people', 4),
    images: fileNames({ album: 'people', n: 14, type: 'jpg', year: '2002' }),
  },
]