//preventSpecialCharactersJS
nameKeydown(e) {
  if (/^[!@#\$%\^&*\)\(+=._-]+$/g.test(e.key)) {
    e.preventDefault();
  }
},
  
  //dynamicObjAssignVue
  Object.assign(dynamicObject, {
        [imageFileName]: event.target.files[0],
      })

      Object.assign(dynamicObject, {
        [imagePreviewName]: URL.createObjectURL(dynamicObject[imageFileName])
      })
      console.log(dynamicObject[imageFileName])
