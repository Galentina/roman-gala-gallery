import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_1978_1988 = [
  {
    id: 'school',
    name: 'School',
    cover: albumCover('1978-1988', 'school', 42),
    images: fileNames({ album: 'school', n: 44, type: 'jpg', year: '1978-1988' }),
  },
  {
    id: 'figure_skating',
    name: 'Figure skating',
    cover: albumCover('1978-1988', 'figure_skating', 10),
    images: fileNames({ album: 'figure_skating', n: 19, type: 'jpg', year: '1978-1988' }),
  },
]