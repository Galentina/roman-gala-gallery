import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2008 = [
  {
    id: 'amsterdam2008',
    name: 'Amsterdam - 2008',
    cover: albumCover('2008', 'amsterdam2008', 20),
    images: fileNames({ album: 'amsterdam2008', n: 36, type: 'jpg', year: '2008' }),
  },
  {
    id: 'bloemencorso',
    name: 'Bloemencorso - 2008',
    cover: albumCover('2008', 'bloemencorso', 1),
    images: fileNames({ album: 'bloemencorso', n: 169, type: 'jpg', year: '2008' }),
  },
  {
    id: 'driemond_weesp_muiden',
    name: 'Driemond - Weesp - Muiden',
    cover: albumCover('2008', 'driemond_weesp_muiden', 1),
    images: fileNames({ album: 'driemond_weesp_muiden', n: 259, type: 'jpg', year: '2008' }),
  },
  {
    id: 'haarlem',
    name: 'Haarlem',
    cover: albumCover('2008', 'haarlem', 20),
    images: fileNames({ album: 'haarlem', n: 180, type: 'jpg', year: '2008' }),
  },
  {
    id: 'trasloco',
    name: 'Trasloco',
    cover: albumCover('2008', 'trasloco', 83),
    images: fileNames({ album: 'trasloco', n: 83, type: 'jpg', year: '2008' }),
  },
]