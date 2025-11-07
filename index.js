//RESUELVE TUS EJERCICIOS AQUI


// 1.- Declara una funcion getAllBreeds que devuelva un array de strings
// con todas las razas de perro.
// const getAllBreeds = async ()






const getAllBreeds = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/list/all');
       
        if (resp.ok) {
            const data = await resp.json()
            return Object.keys(data.message)
        }
    } catch (error) {
        console.log(error)
    }
}




//  2.- Declara una función getRandomDog que obtenga una imagen random de
// una raza


const getRandomDog = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random')
       
        if (resp.ok) {
            const data = await resp.json();
            return data.message
        }
    }  catch (error) {
        console.log(error)
    }
}      


// 3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes
// de la raza komondor.


const getAllImagesByBreed = async (raza) => {
    try {
        const resp = await fetch(`https://dog.ceo/api/breed/${raza}/images`)
       
        if (resp.ok) {
            const data = await resp.json();
            return data.message
        }
    }  catch (error) {
        console.log(error)
    }
}      


// 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las
// imágenes de la raza pasada por el argumento


const getAllImagesByBreed2 = async (breed) => {
    try {
        const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
       
        if (resp.ok) {
            const data = await resp.json();
            return data.message
        }
    }  catch (error) {
        console.log(error)
    }
}  


// 5.- Declarara una función getGitHubUserProfile(username) que obtenga el
// perfil de usuario de github a partir de su nombre de usuario.
// (https://api.github.com/users/{username}).


const getGitHubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.ok) {
            const data = await resp.json();
            console.log(data)
            return data
           
        } else {
            throw 'No hay ningún usuario'
        }
    }  catch (error) {
        console.log(error)
    }
}  




// 6.- Declara una función printGithubUserProfile(username) que reciba
// como argumento el nombre de un usuario (username), retorne {img, name}
// y pinte la foto y el nombre en el DOM.




const printGithubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.ok) {
            const data = await resp.json();
            const img = data.avatar_url
            const name = data.name
           
            const contenedor = document.createElement('picture');
            const imgDom = document.createElement('img');
            const nameDom = document.createElement('h2');
            imgDom.src = img
            nameDom.texContent = name


            contenedor.append(imgDom)
            contenedor.append(nameDom)


            return {img, name}
           
        } else {
            throw 'No hay ningún usuario'
        }
    }  catch (error) {
        console.log(error)
    }
}  


// 7. Crea una función getAndPrintGitHubUserProfile(username) que contenga
// una petición a la API para obtener información de ese usuario y
// devuelva un string que represente una tarjeta HTML como en el ejemplo,
// la estructura debe ser exactamente la misma:


/* <section>
    <img src="url de imagen" alt="imagen de usuario">
    <h1>Nombre de usuario</h1>
    <p>Public repos: (número de repos)</p>
</section> */


const printGithubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.ok) {
            const data = await resp.json();
            const img = data.avatar_url
            const name = data.name
           
            const contenedor = document.createElement('picture');
            const imgDom = document.createElement('img');
            const nameDom = document.createElement('h2');
            imgDom.src = img
            nameDom.texContent = name


            contenedor.append(imgDom)
            contenedor.append(nameDom)


            return {img, name}
           
        } else {
            throw 'No hay ningún usuario'
        }
    }  catch (error) {
        console.log(error)
    }
}  




// 8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar.
//  El usuario escribirá en el input el nombre de usuario de GitHub que
// quiera buscar. Después llamaremos a la función
// getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse
// el botón buscar.(Esto no se testea).










//  9.- Dada una lista de usuarios de github guardada en una array,crea
// una funcion fetchGithubUsers(userNames) que utilice
// 'https://api.github.com/users/${name}' para obtener el nombre de cada
// usuario.
// Objetivo: Usar Promise.all()
// Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
// Pregunta. ¿cuántas promesas tendremos?


