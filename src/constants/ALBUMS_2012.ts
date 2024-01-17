import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2012 = [
  {
    id: 'greece_rodos',
    name: 'Greece - Rodos',
    cover: albumCover('2012', 'greece_rodos', 47),
    images: fileNames({ album: 'greece_rodos', n: 987, type: 'jpg', year: '2012' }),
  },
  {
    id: 'leiden',
    name: 'Leiden',
    cover: albumCover('2012', 'leiden', 24),
    images: fileNames({ album: 'leiden', n: 119, type: 'jpg', year: '2012' }),
  },
  {
    id: 'luxemburg',
    name: 'Luxemburg',
    cover: albumCover('2012', 'luxemburg', 299),
    images: fileNames({ album: 'luxemburg', n: 950, type: 'jpg', year: '2012' }),
  },
]