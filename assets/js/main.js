const formulario = document.querySelector('#formPost')
const textArea = document.querySelector('#textarea')
const posts = document.querySelector('#posts')
const btn = document.querySelector('.btnSubmitForm')

function pegarTexto(event) {
  event.preventDefault()

  const texto = textArea.value

  console.log(texto)

  criarTexto(texto)
}

btn.addEventListener('click', pegarTexto)

function criarTexto(texto) {
  let time = new Date()
  let hour = time.getHours()
  let minutes = time.getMinutes()

  const objetoTexto = {
    nome: 'Adriano Alves',
    foto: '../img/logo.svg',
    texto: texto,
    tempo: `${hour}:${minutes}`
  }

  listarTemplateTexto(objetoTexto)
}

function listarTemplateTexto(texto) {
  const { nome, foto, texto, tempo } = texto

  let li = document.createElement('li')
  li.classList.add('infoUserPost')
  let section = document.createElement('div')
  section.classList.add('imgUserPost')
  let div = document.createElement('div')
  div.classList.add('imgUserPost')
  let h2 = document.createElement('h2')
  h2.innerText = nome
  let span = document.createElement('span')
  span.innerText = `${tempo}`
  let p = document.createElement('p')
  p.innerText = texto
  section.appendChild(div)
  section.appendChild(span)
  section.appendChild(p)
}
