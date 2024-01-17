import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_1995_2000 = [
  {
    id: 'spain_1999',
    name: 'Spain - 1999',
    cover: albumCover('1995-2000', 'spain_1999', 38),
    images: fileNames({ album: 'spain_1999', n: 77, type: 'jpg', year: '1995-2000' }),
  },
  {
    id: 'russia_2000',
    name: 'Russia - 2000',
    cover: albumCover('1995-2000', 'russia_2000', 1),
    images: fileNames({ album: 'russia_2000', n: 15, type: 'jpg', year: '1995-2000' }),
  },
  {
    id: 'first_days',
    name: 'First days in Milan - 2000',
    cover: albumCover('1995-2000', 'first_days', 7),
    images: fileNames({ album: 'first_days', n: 21, type: 'jpg', year: '1995-2000' }),
  },
]