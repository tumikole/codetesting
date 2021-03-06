function convertToRoman(num) {
    const UNITS = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
    if (num === 0) {
      return '';
    }
  
    let value = Object.keys(UNITS).map(i => parseInt(i, 10)).reduce((a, b) => {
      if (b <= num) {
        return b;
      }
      return a;
    }, 0);
    
    return UNITS[value] + convertToRoman(num - value);
  }
  
  convertToRoman(36);