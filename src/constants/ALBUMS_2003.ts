import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2003 = [
  {
    id: 'ju_jitsu',
    name: 'Ju Jitsu',
    cover: albumCover('2003', 'ju_jitsu', 10),
    images: fileNames({ album: 'ju_jitsu', n: 47, type: 'jpg', year: '2003' }),
  },
  {
    id: 'venezia',
    name: 'Venezia - 2003',
    cover: albumCover('2003', 'venezia', 8),
    images: fileNames({ album: 'venezia', n: 89, type: 'jpg', year: '2003' }),
  },
  {
    id: 'different',
    name: 'Different photos',
    cover: albumCover('2003', 'different', 9),
    images: fileNames({ album: 'different', n: 19, type: 'jpg', year: '2003' }),
  },
]