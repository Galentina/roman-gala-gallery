import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2006 = [
  {
    id: 'roma',
    name: 'Roma - 2006',
    cover: albumCover('2006', 'roma', 184),
    images: fileNames({ album: 'roma', n: 204, type: 'jpg', year: '2006' }),
  },

]