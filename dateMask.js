const maskForDate = value => {
  if (value.length > 10) {
      return value.substring(0, 10);
  }

  switch (value.length) {
      case 1: 
          if (value > 3) {
              value = "3";
          }
          break;
      case 2: 
          if (value > 31) {
              value = "31";
          }
          break;
      case 3:
      case 4:
          if (value[2] !== ".") {
              value = value.substr(0, 2) + "." + value[2];
          }
          if (value[3] > 1) {
              value = value.substr(0, 3) + "1";
          }
          break;
      case 5: 
          if (value.substr(3, 2) > 12) {
              value = value.substr(0, 3) + "12";
          }
          break;
      case 6:
      case 7:
          if (value[5] !== ".") {
              value = value.substr(0, 5) + "." + value[5];
          }
          if (value[6] < 1) {
              value = value.substr(0, 6) + "1";
          }
          break;
      default: 
          break;
  }

  const maskDate = v => {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{2})(\d{2})$/, "$1$2");
    v = v.slice(0, 10)
    return v;
  }

  return maskDate(value);
}

  const input = document.querySelector('input');
  input.addEventListener('input', e => {
    e.target.value = maskForDate(e.target.value);
  })
