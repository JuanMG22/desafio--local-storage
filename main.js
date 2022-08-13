// Selecciono elementos del DOM
const form = document.querySelector("#form");
const clearBtn = document.querySelector("#btnClear");
const showBtn = document.querySelector("#btnShowLocal");

// Array donde se almacenarán los posts
const posts = [];

// Clase que genera posts
class Post {
  constructor(content) {
    this.content = content;
  }
}

let postsLocalStorage = JSON.parse(localStorage.getItem("posts"));

// EVENTOS
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textArticle = document.querySelector("#textArticle").value;
  const newPost = new Post(textArticle);
  posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));
  postsLocalStorage = JSON.parse(localStorage.getItem("posts"));
});

// Evento que vacia el localstorage y también el array posts
clearBtn.addEventListener("click", () => {
  localStorage.clear(); //vacio localstorage
  postsLocalStorage = false;
  posts.length = 0 //Vacio array posts
  console.log("Se limpió el local storage");
});

showBtn.addEventListener("click", () => {
  if (postsLocalStorage) {
    console.log(postsLocalStorage);
  } else if (!postsLocalStorage) {
    console.log("El localStorage está vacio");
  }
});
