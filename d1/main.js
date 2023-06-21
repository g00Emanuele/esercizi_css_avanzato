// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

// Primo modo
// let link = document.getElementsByTagName('a')

// for (let i = 0; i < link.length ; i++){
//     let linkCorrente = link[i]
//     if(linkCorrente.textContent === 'Twitter'){
//         linkCorrente.remove()
//     }
// }

// Secondo modo
let twit = document.querySelector('.p-4:nth-child(3) .list-unstyled li:nth-child(2) a')

window.addEventListener("load", (event) => {
    twit.remove()
})


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

let continuaLeggere = document.querySelector('.jumbotron p a')

continuaLeggere.addEventListener('click', cancellaParent)

function cancellaParent(){
    continuaLeggere.parentElement.remove()
}

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

let author = document.querySelectorAll('.blog-post-meta a')

for(i of author){
    i.addEventListener("mouseover", sayAuthor)
}

function sayAuthor(event){
    alert(event.target.innerText)
}