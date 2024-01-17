import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2018 = [
  {
    id: 'roma2018',
    name: 'Roma - 2018',
    cover: albumCover('2018', 'roma2018', 15),
    images: fileNames({ album: 'roma2018', n: 358, type: 'jpg', year: '2018' }),
  },
  {
    id: 'russia2018',
    name: 'Russia - 2018',
    cover: albumCover('2018', 'russia2018', 15),
    images: fileNames({ album: 'russia2018', n: 87, type: 'jpg', year: '2018' }),
  },
]