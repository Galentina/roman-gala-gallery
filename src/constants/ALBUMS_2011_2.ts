import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2011_2 = [
  {
    id: 'potsdam',
    name: 'Potsdam',
    cover: albumCover('2011', 'potsdam', 87),
    images: fileNames({ album: 'potsdam', n: 203, type: 'jpg', year: '2011' }),
  },

  {
    id: 'castello_sforzesco',
    name: 'Milano, Castello Sforzesco',
    cover: albumCover('2011', 'castello_sforzesco', 1),
    images: fileNames({ album: 'castello_sforzesco', n: 191, type: 'jpg', year: '2011' }),
  },
  {
    id: 'milan',
    name: 'Milano',
    cover: albumCover('2011', 'milan', 71),
    images: fileNames({ album: 'milan', n: 265, type: 'jpg', year: '2011' }),
  },

  {
    id: 'japanese_park',
    name: 'Japanese Park',
    cover: albumCover('2011', 'japanese_park', 21),
    images: fileNames({ album: 'japanese_park', n: 35, type: 'jpg', year: '2011' }),
  },
  {
    id: 'keukenhoff2011',
    name: 'Keukenhoff - 2011',
    cover: albumCover('2011', 'keukenhoff2011', 68),
    images: fileNames({ album: 'keukenhoff2011', n: 357, type: 'jpg', year: '2011' }),
  },
  {
    id: 'paris',
    name: 'Paris',
    cover: albumCover('2011', 'paris', 45),
    images: fileNames({ album: 'paris', n: 546, type: 'jpg', year: '2011' }),
  },
  {
    id: 'boat_walk',
    name: 'Paris - Boat Walk',
    cover: albumCover('2011', 'boat_walk', 110),
    images: fileNames({ album: 'boat_walk', n: 129, type: 'jpg', year: '2011' }),
  },
  {
    id: 'musee_du_louvre',
    name: 'Musee du Louvre',
    cover: albumCover('2011', 'musee_du_louvre', 41),
    images: fileNames({ album: 'musee_du_louvre', n: 446, type: 'jpg', year: '2011' }),
  },
  {
    id: 'new_garden',
    name: 'New Garden',
    cover: albumCover('2011', 'new_garden', 67),
    images: fileNames({ album: 'new_garden', n: 94, type: 'jpg', year: '2011' }),
  },
  {
    id: 'nieuwe_meer',
    name: 'Nieuwe Meer',
    cover: albumCover('2011', 'nieuwe_meer', 1),
    images: fileNames({ album: 'nieuwe_meer', n: 80, type: 'jpg', year: '2011' }),
  },
  {
    id: 'oost_europa_dag',
    name: 'Oost-Europa dag',
    cover: albumCover('2011', 'oost_europa_dag', 42),
    images: fileNames({ album: 'oost_europa_dag', n: 161, type: 'jpg', year: '2011' }),
  },
  {
    id: 'rotterdam',
    name: 'Rotterdam',
    cover: albumCover('2011', 'rotterdam', 76),
    images: fileNames({ album: 'rotterdam', n: 259, type: 'jpg', year: '2011' }),
  },
]