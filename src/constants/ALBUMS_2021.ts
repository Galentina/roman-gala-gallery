import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2021 = [
  {
    id: 'garden2021',
    name: 'Garden - 2021',
    cover: albumCover('2021', 'garden2021', 16),
    images: fileNames({ album: 'garden2021', n: 36, type: 'jpg', year: '2021' }),
  },
  {
    id: 'maastricht',
    name: 'Maastricht',
    cover: albumCover('2021', 'maastricht', 1),
    images: fileNames({ album: 'maastricht', n: 46, type: 'jpg', year: '2021' }),
  },
  {
    id: 'russia',
    name: 'Russia - 2021',
    cover: albumCover('2021', 'russia', 1),
    images: fileNames({ album: 'russia', n: 175, type: 'jpg', year: '2021' }),
  },
]