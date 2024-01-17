import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_1988_1995 = [
  {
    id: 'univer',
    name: 'After school',
    cover: albumCover('1988-1995', 'univer', 8),
    images: fileNames({ album: 'univer', n: 18, type: 'jpg', year: '1988-1995' }),
  },
]