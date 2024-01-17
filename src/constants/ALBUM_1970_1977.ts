import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_1970_1977 = [
  {
    id: 'old_photo',
    name: 'Old photos',
    cover: albumCover('1970-1977', 'old_photo', 1),
    images: fileNames({ album: 'old_photo', n: 7, type: 'jpg', year: '1970-1977' }),
  },
  {
    id: 'lasilo',
    name: 'Basic school',
    cover: albumCover('1970-1977', 'lasilo', 1),
    images: fileNames({ album: 'lasilo', n: 7, type: 'jpg', year: '1970-1977' }),
  },
  {
    id: 'first_photos',
    name: 'First photos',
    cover: albumCover('1970-1977', 'first_photos', 1),
    images: fileNames({ album: 'first_photos', n: 1, type: 'jpg', year: '1970-1977' }),
  },
]