//preventSpecialCharactersJS
nameKeydown(e) {
  if (/^[!@#\$%\^&*\)\(+=._-]+$/g.test(e.key)) {
    e.preventDefault();
  }
},
