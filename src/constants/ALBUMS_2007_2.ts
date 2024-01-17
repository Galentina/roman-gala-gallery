import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2007_2 = [
  {
    id: 'rimini',
    name: 'Rimini',
    cover: albumCover('2007', 'rimini', 66),
    images: fileNames({ album: 'rimini', n: 106, type: 'jpg', year: '2007' }),
  },
  {
    id: 'saludecio',
    name: 'Saludecio',
    cover: albumCover('2007', 'saludecio', 30),
    images: fileNames({ album: 'saludecio', n: 43, type: 'jpg', year: '2007' }),
  },
  {
    id: 'italia_in_miniatura',
    name: 'Italia in miniatura',
    cover: albumCover('2007', 'italia_in_miniatura', 1),
    images: fileNames({ album: 'italia_in_miniatura', n: 335, type: 'jpg', year: '2007' }),
  },
  {
    id: 'monza',
    name: 'Monza',
    cover: albumCover('2007', 'monza', 1),
    images: fileNames({ album: 'monza', n: 51, type: 'jpg', year: '2007' }),
  },
  {
    id: 'newcar',
    name: 'New car',
    cover: albumCover('2007', 'newcar', 7),
    images: fileNames({ album: 'newcar', n: 32, type: 'jpg', year: '2007' }),
  },
  {
    id: 'pallavolo',
    name: 'Pallavolo',
    cover: albumCover('2007', 'pallavolo', 32),
    images: fileNames({ album: 'pallavolo', n: 33, type: 'jpg', year: '2007' }),
  },
  {
    id: 'pavia2007',
    name: 'Pavia - 2007',
    cover: albumCover('2007', 'pavia2007', 41),
    images: fileNames({ album: 'pavia2007', n: 63, type: 'jpg', year: '2007' }),
  },

  {
    id: 'torino',
    name: 'Torino',
    cover: albumCover('2007', 'torino', 47),
    images: fileNames({ album: 'torino', n: 160, type: 'jpg', year: '2007' }),
  },
  {
    id: 'villa_pallavicino',
    name: 'Villa Pallavicino',
    cover: albumCover('2007', 'villa_pallavicino', 3),
    images: fileNames({ album: 'villa_pallavicino', n: 106, type: 'jpg', year: '2007' }),
  },
]