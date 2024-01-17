import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2001_2 = [
  {
    id: 'duomo',
    name: 'Duomo - July 2001',
    cover: albumCover('2001', 'duomo', 1),
    images: fileNames({ album: 'duomo', n: 38, type: 'jpg', year: '2001' }),
  },
  {
    id: 'como',
    name: 'Como - July 2001',
    cover: albumCover('2001', 'como', 1),
    images: fileNames({ album: 'como', n: 38, type: 'jpg', year: '2001' }),
  },
  {
    id: 'roma',
    name: 'Roma - August 2001',
    cover: albumCover('2001', 'roma', 1),
    images: fileNames({ album: 'roma', n: 92, type: 'jpg', year: '2001' }),
  },
  {
    id: 'vatican',
    name: 'Vatican - August 2001',
    cover: albumCover('2001', 'vatican', 1),
    images: fileNames({ album: 'vatican', n: 66, type: 'jpg', year: '2001' }),
  },
  {
    id: 'elba',
    name: 'Elba - Sept. 2001',
    cover: albumCover('2001', 'elba', 10),
    images: fileNames({ album: 'elba', n: 63, type: 'jpg', year: '2001' }),
  },
  {
    id: 'ferrari',
    name: 'Ferrari show - Sept. 2001',
    cover: albumCover('2001', 'ferrari', 1),
    images: fileNames({ album: 'ferrari', n: 10, type: 'jpg', year: '2001' }),
  },
  {
    id: 'gardaland',
    name: 'Gardaland park - Sept. 2001',
    cover: albumCover('2001', 'gardaland', 47),
    images: fileNames({ album: 'gardaland', n: 52, type: 'jpg', year: '2001' }),
  },
]