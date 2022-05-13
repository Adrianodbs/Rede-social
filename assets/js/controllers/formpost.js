export class FormPost {
  constructor(idForm, idTextarea, idUlPost) {
    this.form = document.getElementById(idForm)
    this.idTextarea = document.getElementById(idTextarea)
    this.idUlPost = document.getElementById(idUlPost)
    this.addSubmit()
  }

  onSubmit(func) {
    this.form.addEventListener('submit', func)
  }

  formValidate(value) {
    if (
      value == '' ||
      value == null ||
      value == undefined ||
      value.length < 3
    ) {
      return false
    }
    return true
  }

  getTime() {
    const time = new Date()

    const hour = time.getHours()
    const minutes = time.getMinutes()

    return `${hour}h ${minutes}min`
  }

  addSubmit() {
    const handleSubmit = event => {
      event.preventDefault()
      if (this.formValidate(this.idTextarea.value)) {
        const time = this.getTime()
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
           ${this.idTextarea.value}
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
        this.idUlPost.append(newPost)
        this.idTextarea.value = ''
      } else {
        alert('Verifique o campo digitado(digite pelo menos 3 caracteres')
      }
    }

    this.onSubmit(handleSubmit)
  }
}

const postForm = new FormPost('formPost', 'textarea', 'posts')
