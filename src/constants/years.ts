import { MenuProps } from 'antd'
import { ALL_ALBUMS } from './AllAlbumsConstant'

export const YEARS = ['1970-1994', '1995 - 2006', '2007 - 2011', '2012 - 2019', '2020 - Present']

export const YEARS_DATA: MenuProps['items'] = [
  {
    label: '1995 - 2006',
    key: '1995 - 2006',
    icon: null,
    children: [
      {
        label: '1995 - 2000',
        key: '1995-2000',
      },
      {
        label: '2001-1',
        key: '2001-1',
      },
      {
        label: '2001-2',
        key: '2001-2',
      },
      {
        label: '2002-1',
        key: '2002-1',
      },
      {
        label: '2002-2',
        key: '2002-2',
      },
      {
        label: '2003',
        key: '2003',
      },
      {
        label: '2004 - 2005',
        key: '2004-2005',
      },
      {
        label: '2006',
        key: '2006',
      },
    ],
  },
  {
    label: '1995 - 2007',
    key: '1995 - 2007',
    icon: null,
    children: [
      {
        label: '2007-1',
        key: '2007-1',
      },
      {
        label: '2007-2',
        key: '2007-2',
      },
      {
        label: '2008',
        key: '2008',
      },
      {
        label: '2009',
        key: '2009',
      },
      {
        label: '2010-1',
        key: '2010-1',
      },
      {
        label: '2010-2',
        key: '2010-2',
      },
      {
        label: '2011-1',
        key: '2011-1',
      },
      {
        label: '2011-2',
        key: '2011-2',
      },
    ],
  },
  {
    label: '2012 - 2019',
    key: '2012 - 2019',
    icon: null,
    children: [
      {
        label: '2012',
        key: '2012',
      },
      {
        label: '2013',
        key: '2013',
      },
      {
        label: '2014',
        key: '2014',
      },
      {
        label: '2015',
        key: '2015',
      },
      {
        label: '2016',
        key: '2016',
      },
      {
        label: '2017',
        key: '2017',
      },
      {
        label: '2018',
        key: '2018',
      },
      {
        label: '2019',
        key: '2019',
      },
    ],
  },
]

export const ALL_YEARS = [
  { year: '1995-2000', parent: '1995-2006' },
  { year: '2001-1', parent: '1995-2006' },
  { year: '2001-2', parent: '1995-2006' },
  { year: '2002-1', parent: '1995-2006' },
  { year: '2002-2', parent: '1995-2006' },
  { year: '2003', parent: '1995-2006' },
  { year: '2004-2005', parent: '1995-2006' },
  { year: '2006', parent: '1995-2006' },
  { year: '2007-1', parent: '2007-2011' },
  { year: '2007-2', parent: '2007-2011' },
  { year: '2008', parent: '2007-2011' },
  { year: '2009', parent: '2007-2011' },
  { year: '2010-1', parent: '2007-2011' },
  { year: '2010-2', parent: '2007-2011' },
  { year: '2011-1', parent: '2007-2011' },
  { year: '2011-2', parent: '2007-2011' },
  { year: '2012', parent: '2012-2019' },
  { year: '2013', parent: '2012-2019' },
  { year: '2014', parent: '2012-2019' },
  { year: '2015', parent: '2012-2019' },
  { year: '2016', parent: '2012-2019' },
  { year: '2017', parent: '2012-2019' },
  { year: '2018', parent: '2012-2019' },
  { year: '2019', parent: '2012-2019' },
]

export const findAlbums = (id: string) => {
  return ALL_ALBUMS.find(el => el.id === id)
}
