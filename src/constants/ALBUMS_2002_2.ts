import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2002_2 = [
  {
    id: 'streets',
    name: 'Streets in Milan',
    cover: albumCover('2002', 'streets', 48),
    images: fileNames({ album: 'streets', n: 89, type: 'jpg', year: '2002' }),
  },
  {
    id: 'cars',
    name: 'Cars',
    cover: albumCover('2002', 'cars', 1),
    images: fileNames({ album: 'cars', n: 17, type: 'jpg', year: '2002' }),
  },
  {
    id: 'monza',
    name: 'Parсo di Monza - 2002',
    cover: albumCover('2002', 'monza', 1),
    images: fileNames({ album: 'monza', n: 13, type: 'jpg', year: '2002' }),
  },
  {
    id: 'lasilo',
    name: 'Lasilo - 2002',
    cover: albumCover('2002', 'lasilo', 9),
    images: fileNames({ album: 'lasilo', n: 25, type: 'jpg', year: '2002' }),
  },
  {
    id: 'forte_dei_marmi',
    name: 'Forte dei Marmi - 2002',
    cover: albumCover('2002', 'forte_dei_marmi', 11),
    images: fileNames({ album: 'forte_dei_marmi', n: 25, type: 'jpg', year: '2002' }),
  },
  {
    id: 'maiorca',
    name: 'Forte dei Marmi - 2002',
    cover: albumCover('2002', 'maiorca', 4),
    images: fileNames({ album: 'maiorca', n: 64, type: 'jpg', year: '2002' }),
  },
  {
    id: 'aquacity',
    name: 'Aquacity',
    cover: albumCover('2002', 'aquacity', 21),
    images: fileNames({ album: 'aquacity', n: 33, type: 'jpg', year: '2002' }),
  },
  {
    id: 'busto',
    name: 'Busto Arsizio',
    cover: albumCover('2002', 'busto', 14),
    images: fileNames({ album: 'busto', n: 29, type: 'jpg', year: '2002' }),
  },
  {
    id: 'lugano',
    name: 'Lugano',
    cover: albumCover('2002', 'lugano', 14),
    images: fileNames({ album: 'lugano', n: 16, type: 'jpg', year: '2002' }),
  },
]