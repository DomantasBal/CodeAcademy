import 'materialize-css/dist/js/materialize.min.js'

document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.parallax')
  const instances = M.Parallax.init(elems)
})
