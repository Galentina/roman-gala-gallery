import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2009 = [
  {
    id: 'afsluitdijk',
    name: 'Afsluitdijk',
    cover: albumCover('2009', 'afsluitdijk', 1),
    images: fileNames({ album: 'afsluitdijk', n: 45, type: 'jpg', year: '2009' }),
  },
  {
    id: 'almere',
    name: 'Almere',
    cover: albumCover('2009', 'almere', 9),
    images: fileNames({ album: 'almere', n: 20, type: 'jpg', year: '2009' }),
  },
  {
    id: 'bloemencorso2009',
    name: 'Bloemencorso - 2009',
    cover: albumCover('2009', 'bloemencorso2009', 7),
    images: fileNames({ album: 'bloemencorso2009', n: 249, type: 'jpg', year: '2009' }),
  },
  {
    id: 'disneyland',
    name: 'Disneyland',
    cover: albumCover('2009', 'disneyland', 63),
    images: fileNames({ album: 'disneyland', n: 237, type: 'jpg', year: '2009' }),
  },
  {
    id: 'gay_pride',
    name: 'Gay pride',
    cover: albumCover('2009', 'gay_pride', 7),
    images: fileNames({ album: 'gay_pride', n: 129, type: 'jpg', year: '2009' }),
  },
  {
    id: 'ijburg',
    name: 'ijburg',
    cover: albumCover('2009', 'ijburg', 26),
    images: fileNames({ album: 'ijburg', n: 29, type: 'jpg', year: '2009' }),
  },
  {
    id: 'madam_tussaud_museum',
    name: 'Madam Tussaud museum',
    cover: albumCover('2009', 'madam_tussaud_museum', 138),
    images: fileNames({ album: 'madam_tussaud_museum', n: 138, type: 'jpg', year: '2009' }),
  },
]