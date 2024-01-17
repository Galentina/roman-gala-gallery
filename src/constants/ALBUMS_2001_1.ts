import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2001_1 = [
  {
    id: 'genova2001',
    name: 'Genova - April 2001',
    cover: albumCover('2001', 'genova2001', 1),
    images: fileNames({ album: 'genova2001', n: 21, type: 'jpg', year: '2001' }),
  },
  {
    id: 'street_fest',
    name: 'Street fest in Milan - May 2001',
    cover: albumCover('2001', 'street_fest', 1),
    images: fileNames({ album: 'street_fest', n: 10, type: 'jpg', year: '2001' }),
  },
  {
    id: 'liguria',
    name: 'Liguria - May 2001',
    cover: albumCover('2001', 'liguria', 33),
    images: fileNames({ album: 'liguria', n: 49, type: 'jpg', year: '2001' }),
  },
  {
    id: 'san_remo',
    name: 'San Remo - May 2001',
    cover: albumCover('2001', 'san_remo', 8),
    images: fileNames({ album: 'san_remo', n: 25, type: 'jpg', year: '2001' }),
  },
  {
    id: 'dinosaurs',
    name: 'Parco dei dinosauri - June 2001',
    cover: albumCover('2001', 'dinosaurs', 12),
    images: fileNames({ album: 'dinosaurs', n: 18, type: 'jpg', year: '2001' }),
  },
  {
    id: 'pizzeria',
    name: 'Pizzeria - 2001',
    cover: albumCover('2001', 'pizzeria', 1),
    images: fileNames({ album: 'pizzeria', n: 6, type: 'jpg', year: '2001' }),
  },
  {
    id: 'beer',
    name: 'Beer - July 2001',
    cover: albumCover('2001', 'beer', 1),
    images: fileNames({ album: 'beer', n: 7, type: 'jpg', year: '2001' }),
  },
]