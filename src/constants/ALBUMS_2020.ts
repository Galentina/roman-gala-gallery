import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2020 = [
  {
    id: 'garden2020',
    name: 'Garden - 2020',
    cover: albumCover('2020', 'garden2020', 15),
    images: fileNames({ album: 'garden2020', n: 53, type: 'jpg', year: '2020' }),
  },
]