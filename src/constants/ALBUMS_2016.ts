import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2016 = [
  {
    id: 'daria_diploma',
    name: 'Daria - Diploma',
    cover: albumCover('2016', 'daria_diploma', 23),
    images: fileNames({ album: 'daria_diploma', n: 26, type: 'jpg', year: '2016' }),
  },
  {
    id: 'england2016',
    name: 'England - 2016',
    cover: albumCover('2016', 'england2016', 85),
    images: fileNames({ album: 'england2016', n: 229, type: 'jpg', year: '2016' }),
  },
  {
    id: 'latvia_lithuania',
    name: 'Latvia - Lithuania',
    cover: albumCover('2016', 'latvia_lithuania', 30),
    images: fileNames({ album: 'latvia_lithuania', n: 299, type: 'jpg', year: '2016' }),
  },
  {
    id: 'london2016',
    name: 'London - 2016',
    cover: albumCover('2016', 'london2016', 10),
    images: fileNames({ album: 'london2016', n: 233, type: 'jpg', year: '2016' }),
  },
  {
    id: 'oxford2016',
    name: 'Oxford - 2016',
    cover: albumCover('2016', 'oxford2016', 6),
    images: fileNames({ album: 'oxford2016', n: 159, type: 'jpg', year: '2016' }),
  },
  {
    id: 'russia2016',
    name: 'Russia - 2016',
    cover: albumCover('2016', 'russia2016', 68),
    images: fileNames({ album: 'russia2016', n: 335, type: 'jpg', year: '2016' }),
  },
  {
    id: 'sicily',
    name: 'Sicily',
    cover: albumCover('2016', 'sicily', 136),
    images: fileNames({ album: 'sicily', n: 832, type: 'jpg', year: '2016' }),
  },
  {
    id: 'vienna',
    name: 'Vienna',
    cover: albumCover('2016', 'vienna', 24),
    images: fileNames({ album: 'vienna', n: 325, type: 'jpg', year: '2016' }),
  },
]