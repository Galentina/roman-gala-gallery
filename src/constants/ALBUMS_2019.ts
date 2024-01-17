import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2019 = [
  {
    id: 'darias_graduation',
    name: 'Daria - graduation',
    cover: albumCover('2019', 'darias_graduation', 15),
    images: fileNames({ album: 'darias_graduation', n: 41, type: 'jpg', year: '2019' }),
  },
  {
    id: 'oxford_london2019',
    name: 'Oxford - London - 2019',
    cover: albumCover('2019', 'oxford_london2019', 15),
    images: fileNames({ album: 'oxford_london2019', n: 339, type: 'jpg', year: '2019' }),
  },
  {
    id: 'russia2019',
    name: 'Russia - 2019',
    cover: albumCover('2019', 'russia2019', 15),
    images: fileNames({ album: 'russia2019', n: 262, type: 'jpg', year: '2019' }),
  },
  {
    id: 'turkey',
    name: 'Turkey',
    cover: albumCover('2019', 'turkey', 15),
    images: fileNames({ album: 'turkey', n: 226, type: 'jpg', year: '2019' }),
  },
]