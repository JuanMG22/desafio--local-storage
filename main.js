const formArticle = document.querySelector("#form")
const clearBtn = document.querySelector("#btnClear")
const showBtn = document.querySelector("#btnShowLocal")
const posts = []

class Post {
    constructor(content) {
        this.content = content
    }
}
let postsLocalStorage = JSON.parse(localStorage.getItem('posts'))

formArticle.addEventListener('submit', (e) => {
        e.preventDefault()
        const article = document.querySelector('#textArticle').value
        const newArticle = new Post(article)
        posts.push(newArticle)
        localStorage.setItem('posts', JSON.stringify(posts))
        postsLocalStorage = JSON.parse(localStorage.getItem('posts'))

    }
)

clearBtn.addEventListener('click', () => {
    localStorage.clear()
    postsLocalStorage = false
    console.log('Se limpió el LocalStorage')
})

showBtn.addEventListener('click', () => {
    if (postsLocalStorage) {
        console.log(postsLocalStorage)
    } else if(!postsLocalStorage) {
        console.log('El localStorage está vacio')
    }
})