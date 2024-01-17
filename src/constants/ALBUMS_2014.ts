import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2014 = [
  {
    id: 'cherry_garden',
    name: 'Cherry Garden',
    cover: albumCover('2014', 'cherry_garden', 52),
    images: fileNames({ album: 'cherry_garden', n: 82, type: 'jpg', year: '2014' }),
  },
  {
    id: 'dima_diploma',
    name: 'Dima diploma',
    cover: albumCover('2014', 'dima_diploma', 12),
    images: fileNames({ album: 'dima_diploma', n: 47, type: 'jpg', year: '2014' }),
  },
  {
    id: 'ibc',
    name: 'IBC',
    cover: albumCover('2014', 'ibc', 6),
    images: fileNames({ album: 'ibc', n: 55, type: 'jpg', year: '2014' }),
  },
  {
    id: 'japanese_festival',
    name: 'Japanese festival',
    cover: albumCover('2014', 'japanese_festival', 4),
    images: fileNames({ album: 'japanese_festival', n: 29, type: 'jpg', year: '2014' }),
  },
  {
    id: 'koningsdag',
    name: 'Koningsdag',
    cover: albumCover('2014', 'koningsdag', 25),
    images: fileNames({ album: 'koningsdag', n: 74, type: 'jpg', year: '2014' }),
  },
  {
    id: 'amstelveen',
    name: 'Amstelveen - 2014',
    cover: albumCover('2014', 'amstelveen', 5),
    images: fileNames({ album: 'amstelveen', n: 19, type: 'jpg', year: '2014' }),
  },
  {
    id: 'london2014',
    name: 'London 2014',
    cover: albumCover('2014', 'london2014', 10),
    images: fileNames({ album: 'london2014', n: 491, type: 'jpg', year: '2014' }),
  },
  {
    id: 'naturalisatie',
    name: 'Naturalisatie',
    cover: albumCover('2014', 'naturalisatie', 19),
    images: fileNames({ album: 'naturalisatie', n: 32, type: 'jpg', year: '2014' }),
  },
  {
    id: 'prague',
    name: 'Prague',
    cover: albumCover('2014', 'prague', 87),
    images: fileNames({ album: 'prague', n: 482, type: 'jpg', year: '2014' }),
  },
  {
    id: 'spain',
    name: 'Spain',
    cover: albumCover('2014', 'spain', 206),
    images: fileNames({ album: 'spain', n: 684, type: 'jpg', year: '2014' }),
  },
]