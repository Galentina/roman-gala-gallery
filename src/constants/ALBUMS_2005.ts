import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2005 = [
  {
    id: 'bergamo',
    name: 'Bergamo - 2005',
    cover: albumCover('2005', 'bergamo', 1),
    images: fileNames({ album: 'bergamo', n: 225, type: 'jpg', year: '2005' }),
  },
  {
    id: 'pavia',
    name: 'Pavia - 2005',
    cover: albumCover('2005', 'pavia', 83),
    images: fileNames({ album: 'pavia', n: 141, type: 'jpg', year: '2005' }),
  },
]