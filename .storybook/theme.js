/*
  ...Theme...
  Used to provide style units to the components to encourage consistency.
  Adheres to the Theme UI specs: https://theme-ui.com/theme-spec

  ...Variants...
  variants, text and buttons can be used to offset repeated stylistic changes.
*/
export default {
  breakpoints: ['40em', '52em', '75em', '100em'],
  fontSizes: [
    '.75rem',
    '.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem'
  ],
  colors: {
    orange: '#ff6900',
    electricBlue: '#005EF4',
    electricBlueHover: '#003FA3',
    darkBlue: '#1B1E4D',
    navy: '#090C43',
    darkNavy: '#04051F',
    navyGray: '#2D2F52',
    darkGray: '#675D55',
    darkerGray: '#463E36',
    gray: '#847970',
    lightGray: '#D9D4D0',
    lighterGray: '#F8F5F3',
    lightGrey: '#A2A3B8',
    red: '#DF2A31',
    lightRed: '#FEECEC',
    lightBlue: '#5879DA',
    shadow: '#141358',
    aqua: '#5ED7FB',
    aquaHover: '#00a4d6'
  },
  space: [
    0,
    '.25rem',
    '.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '4rem',
    '8rem',
    '11.875rem'
  ],
  variants: {
    activeDot: {
      backgroundColor: 'orange',
      borderColor: 'orange',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    inactiveDot: {
      backgroundColor: 'transparent',
      borderColor: 'white',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    carousel: {
      backgroundColor: 'darkBlue'
    },
    secondaryLink: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      lineHeight: '20px',
      borderRadius: 32,
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '6px',
      paddingBottom: '6px',
      backgroundColor: 'lighterGray',
      color: 'darkGray',
      WebkitFontSmoothing: 'antialiased',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: 'lightGray',
        color: 'darkerGray'
      }
    },
    primaryLink: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      lineHeight: '20px',
      borderRadius: 32,
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '6px',
      paddingBottom: '6px',
      backgroundColor: 'electricBlue',
      color: 'white',
      WebkitFontSmoothing: 'antialiased',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: 'electricBlueHover'
      }
    }
  },
  text: {
    dropdownSelected: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      color: 'navy'
    },
    carouselTitle: {
      color: 'white',
      fontFamily: '"Roboto Slab", sans-serif',
      fontSize: [2, 3, 4, 6],
      lineHeight: ['24px', '32px', '40px', '56px']
    },
    carouselText: {
      color: 'white',
      fontFamily: '"Roboto", sans-serif',
      fontSize: [1, 1, 2, 4],
      lineHeight: ['20px', '20px', '24px', '40px'],
      textAlign: 'center',
      letterSpacing: '0.008em',
      WebkitFontSmoothing: 'antialiased'
    },
    carouselSubtitle: {
      color: 'white',
      fontFamily: '"Roboto", sans-serif',
      fontSize: [1, 1, 2, 3],
      lineHeight: ['20px', '20px', '24px', '32px'],
      letterSpacing: '0.008em',
      WebkitFontSmoothing: 'antialiased'
    },
    carouselAuthorName: {
      color: 'white',
      fontSize: [1, 1, 2, 3],
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      textAlign: 'center',
      lineHeight: ['20px', '20px', '24px', '32px'],
      letterSpacing: '0.008em',
      WebkitFontSmoothing: 'antialiased'
    },
    carouselAuthorRole: {
      color: 'white',
      fontSize: [0, 1],
      fontFamily: '"Roboto", sans-serif',
      textAlign: 'center',
      lineHeight: ['20px', '24px'],
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased'
    },
    header: {
      fontSize: [3, 4, 5],
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      lineHeight: ['28px', '36px', '44px'],
      color: 'navy',
      letterSpacing: '0.008em',
      WebkitFontSmoothing: 'antialiased'
    },
    subheader: {
      fontSize: 2,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 300,
      lineHeight: '24px',
      color: 'navy',
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased'
    },
    privacyPolicy: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      letterSpacing: '0.01em',
      color: 'gray'
    },
    errorInformation: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      color: 'navyGray',
      WebkitFontSmoothing: 'antialiased'
    },
    errorText: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      color: 'red',
      WebkitFontSmoothing: 'antialiased'
    },
    errorMessage: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      color: 'red',
      WebkitFontSmoothing: 'antialiased',
      maxWidth: ['100%', '100%', 414]
    },
    videoTitle: {
      color: 'white',
      fontSize: 3,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      lineHeight: '32px',
      letterSpacing: '0.008em',
      WebkitFontSmoothing: 'antialiased'
    },
    videoDescription: {
      color: 'white',
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased'
    },
    accountLabel: {
      display: 'inline',
      fontFamily: '"Roboto", sans-serif',
      color: 'lightGrey',
      whiteSpace: 'nowrap'
    },
    accountDetail: { fontFamily: '"Roboto", sans-serif', display: 'inline', color: 'white', whiteSpace: 'nowrap' }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      lineHeight: '20px',
      borderRadius: 32,
      letterSpacing: '0.008em',
      cursor: 'pointer',
      paddingTop: '22px',
      paddingBottom: '22px',
      backgroundColor: 'electricBlue',
      color: 'white',
      WebkitFontSmoothing: 'antialiased',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      width: '100%',
      '&:hover': {
        backgroundColor: 'electricBlueHover'
      }
    },
    compact: {
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      lineHeight: '24px',
      borderRadius: 32,
      letterSpacing: '0.008em',
      cursor: 'pointer',
      backgroundColor: 'electricBlue',
      color: 'white',
      WebkitFontSmoothing: 'antialiased',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: 'electricBlueHover'
      }
    }
  },
  forms: {
    textInputError: {
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      color: 'navyGray',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'red',
      backgroundColor: 'lightRed',
      borderRadius: 8,
      lineHeight: '40px',
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 0,
      paddingBottom: 0,
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased',
      // HACK: colorize webkit autocomplete input fields
      WebkitBoxShadow:
        'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #FEECEC',
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    textInputErrorDisabled: {
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      color: 'darkGray',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'red',
      backgroundColor: 'lightRed',
      borderRadius: 8,
      lineHeight: '40px',
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 0,
      paddingBottom: 0,
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased',
      // HACK: colorize webkit autocomplete input fields
      WebkitBoxShadow:
        'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #FEECEC',
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    textInputDisabled: {
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      color: 'darkGray',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray',
      borderRadius: 8,
      lineHeight: '40px',
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 0,
      paddingBottom: 0,
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased',
      // HACK: colorize webkit autocomplete input fields
      boxShadow:
        'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white',
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    textInput: {
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      color: 'navyGray',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray',
      borderRadius: 8,
      lineHeight: '40px',
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 0,
      paddingBottom: 0,
      letterSpacing: '0.01em',
      WebkitFontSmoothing: 'antialiased',
      // HACK: colorize webkit autocomplete input fields
      boxShadow:
        'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white',
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    errorText: {
      fontSize: 1,
      fontFamily: '"Roboto", sans-serif',
      color: 'red'
    }
  }
}
