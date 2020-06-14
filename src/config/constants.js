const breakpoints = {
  zero: 0,
  xs: 360,
  sm: 480,
  md: 680,
  lg: 1020,
  xl: 1375
}

export const theme = {
  lightMode: {
    colors: {
      mainText: '#555555',
      accentText: '#3863d9',
      bannerText: '#000000',
      border: '#c7c7c7',
      imagePadding: '#ededed',
      imageBorder: '#fafafa',
      background: '#ffffff',
      demoButton: '#3863d9',
      demoText: '#ffffff'
    },
    isDark: false,
    breakpoints
  },
  darkMode: {
    colors: {
      mainText: '#acacac',
      border: '#acacac',
      bannerText: '#ffffff',
      accentText: '#ffffff',
      imagePadding: '#616161',
      imageBorder: '#424242',
      background: '#212121',
      demoButton: '#3863d9',
      demoText: '#ffffff'
    },
    isDark: true,
    breakpoints
  }
}


