const formulario = document.querySelector('#formPost')
const textArea = document.querySelector('#textarea')
const posts = document.querySelector('#posts')
const btn = document.querySelector('.btnSubmitForm')

function getTime() {
  const time = new Date()

  const hour = time.getHours()
  const minutes = time.getMinutes()

  return `${hour}h ${minutes}min`
}

function formValidate(value) {
  if (value == '' || value == null || value == undefined || value.length < 3) {
    return false
  }
  return true
}

btn.addEventListener('click', event => {
  event.preventDefault()

  if (formValidate(textArea.value)) {
    const texto = textArea.value.replace(/\n/g, '<br>')
    const time = getTime()
    const newPost = document.createElement('li')
    newPost.classList.add('post')

    newPost.innerHTML = `
      <div class="infoUserPost">
            <div class="imgUserPost"></div>

            <div class="nameAndHour">
              <strong>Adriano Alves</strong>
              <p>${time}</p>

            </div>
          </div>

          <p class="postTexto">
           ${texto}
          </p>

          <div class="actionBtnPost">
            <button type="button" class="filePost like">
              <img src="./assets/img/heart.svg" alt="Curtir" />
              Curtir
            </button>

            <button type="button" class="filePost coment">
              <img src="./assets/img/comment.svg" alt="Comentar" />
              Comentar
            </button>

            <button type="button" class="filePost share">
              <img src="./assets/img/share.svg" alt="Compartilhar" />
              Compartilhar
            </button>
          </div>
      `

    posts.append(newPost)
    textArea.value = ''
  } else {
    alert('Digite pelo menos 3 caracteres')
  }
})
