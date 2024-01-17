import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2013 = [
  {
    id: 'antwerpen',
    name: 'Antwerpen',
    cover: albumCover('2013', 'antwerpen', 15),
    images: fileNames({ album: 'antwerpen', n: 98, type: 'jpg', year: '2013' }),
  },
  {
    id: 'apuglia',
    name: 'Apuglia',
    cover: albumCover('2013', 'apuglia', 90),
    images: fileNames({ album: 'apuglia', n: 926, type: 'jpg', year: '2013' }),
  },
  {
    id: 'cologne',
    name: 'Cologne',
    cover: albumCover('2013', 'cologne', 86),
    images: fileNames({ album: 'cologne', n: 230, type: 'jpg', year: '2013' }),
  },
  {
    id: 'den_helder',
    name: 'Den Helder',
    cover: albumCover('2013', 'den_helder', 47),
    images: fileNames({ album: 'den_helder', n: 78, type: 'jpg', year: '2013' }),
  },
  {
    id: 'kokusai',
    name: 'Kokusai',
    cover: albumCover('2013', 'kokusai', 35),
    images: fileNames({ album: 'kokusai', n: 35, type: 'jpg', year: '2013' }),
  },
  {
    id: 'koninginnedag',
    name: 'Koninginnedag',
    cover: albumCover('2013', 'koninginnedag', 95),
    images: fileNames({ album: 'koninginnedag', n: 198, type: 'jpg', year: '2013' }),
  },
  {
    id: 'london2013',
    name: 'London - 2013',
    cover: albumCover('2013', 'london2013', 50),
    images: fileNames({ album: 'london2013', n: 198, type: 'jpg', year: '2013' }),
  },
  {
    id: 'oxford2013',
    name: 'Oxford - 2013',
    cover: albumCover('2013', 'oxford2013', 23),
    images: fileNames({ album: 'oxford2013', n: 48, type: 'jpg', year: '2013' }),
  },
  {
    id: 'milan2013',
    name: 'Milan - 2013',
    cover: albumCover('2013', 'milan2013', 112),
    images: fileNames({ album: 'milan2013', n: 519, type: 'jpg', year: '2013' }),
  },
  {
    id: 'paris2013',
    name: 'Paris - 2013',
    cover: albumCover('2013', 'paris2013', 34),
    images: fileNames({ album: 'paris2013', n: 249, type: 'jpg', year: '2013' }),
  },
]