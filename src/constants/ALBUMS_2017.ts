import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2017 = [
  {
    id: 'gallipoli2017',
    name: 'Gallipoli - 2017',
    cover: albumCover('2017', 'gallipoli2017', 25),
    images: fileNames({ album: 'gallipoli2017', n: 145, type: 'jpg', year: '2017' }),
  },
  {
    id: 'milan2017',
    name: 'Milan - 2017',
    cover: albumCover('2017', 'milan2017', 15),
    images: fileNames({ album: 'milan2017', n: 176, type: 'jpg', year: '2017' }),
  },
  {
    id: 'zeeland-gent',
    name: 'Zeeland - Gent',
    cover: albumCover('2017', 'zeeland-gent', 35),
    images: fileNames({ album: 'zeeland-gent', n: 189, type: 'jpg', year: '2017' }),
  },
]