import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2007_1 = [
  {
    id: 'amsterdam',
    name: 'Amsterdam - 2007',
    cover: albumCover('2007', 'amsterdam', 20),
    images: fileNames({ album: 'amsterdam', n: 92, type: 'jpg', year: '2007' }),
  },
  {
    id: 'arona',
    name: 'Arona',
    cover: albumCover('2007', 'arona', 30),
    images: fileNames({ album: 'arona', n: 81, type: 'jpg', year: '2007' }),
  },
  {
    id: 'calcio_inter_lazio',
    name: 'Calcio Inter-Lazio',
    cover: albumCover('2007', 'calcio_inter_lazio', 1),
    images: fileNames({ album: 'calcio_inter_lazio', n: 68, type: 'jpg', year: '2007' }),
  },
  {
    id: 'calcio_inter_parma',
    name: 'Calcio Inter-Parma',
    cover: albumCover('2007', 'calcio_inter_parma', 34),
    images: fileNames({ album: 'calcio_inter_parma', n: 80, type: 'jpg', year: '2007' }),
  },
  {
    id: 'certosa_di_pavia',
    name: 'Certosa di Pavia',
    cover: albumCover('2007', 'certosa_di_pavia', 71),
    images: fileNames({ album: 'certosa_di_pavia', n: 101, type: 'jpg', year: '2007' }),
  },
  {
    id: 'genova',
    name: 'Genova',
    cover: albumCover('2007', 'genova', 1),
    images: fileNames({ album: 'genova', n: 62, type: 'jpg', year: '2007' }),
  },
  {
    id: 'genova_aquario',
    name: 'Aquario di Genova',
    cover: albumCover('2007', 'genova_aquario', 1),
    images: fileNames({ album: 'genova_aquario', n: 143, type: 'jpg', year: '2007' }),
  },
]