# Videogame Finder

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#instalación">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

## Sobre el proyecto
---

Este es mi proyecto final para el bootcamp fullstack developer de Valencia, realizado por David Valero. En este proyecto he realizado el backend para una página web en la cual podrás buscar videojuegos mediante el uso de filtros para así encontrar tu videojuego deseado. Este es el backend del proyecto donde encontraremos toda la lógica detras de las diversas acciones que podremos realizar en el front.
 

Como usuarios podremos: 
<ol>
<li>Ver todos los videojuegos</li>
<li>Ver videojuegos filtrados</li>
<li>Registrarte en la web</li>
<li>Modificar tu perfil de usuario</li>
<li>Añadir videojuegos a favoritos</li>
<li>Eliminar los videojuegos añadidos a favoritos</li>
</ol>

Como Administrador podremos:
<ol>
<li>Realizar todo lo anterior mencionado</li>
<li>Añadir videojuegos desde el front</li>
<li>Actualizar videojuegos desde el front</li>
</ol>

---

## Stack
Tecnologías utilizadas:
<div align ="center">
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>
<a href="https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.github.com/">
    <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
 </div>
 
 ---


## Instalación 
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones: npx sequelieze-cli db:migrate ``` 
5. ``` $ Ejecutamos los seeders: npx sequelize-cli db:seed:all ``` 
6. ``` $ npm run dev ``` 

---

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - REGISTER

            POST localhost:4000/auth/register
        body:
        ``` js
            {
                "username": "Juan",
                "email": "juan@juan.com",
                "password": "user"
            }
        ```

    - LOGIN

            POST localhost:4000/auth/login 
        body:
        ``` js
            {
                "email": "juan@juan.com",
                "password": "user"
            }
        ```

- USER
    - GET PROFILE

            GET localhost:4000/user/getprofile

    - EDIT PROFILE

            PUT localhost:4000/user/getprofile

    - GET ALL VIDEOGAMES

            GET localhost:4000/user/getallvideogames

    - GET ALL VIDEOGAMES BY FILTERS

            GET localhost:4000/user/getallvideogames?genre=RPG&year=1997

    - GET VIDEOGAME BY ID

            GET localhost:4000/user/getvideogamebyid/3

    - ADD TO FAVORITE

            POST localhost:4000/user/addtofavorite
            body:
        ``` js
            {
                "videogame_id": "3",
            }
        ```

    - DELETE FAVORITE

            DELETE localhost:4000/user/deletefavorite
            body:
        ``` js
            {
                "videogame_id": "3",
            }
        ```

- ADMIN
    - GET ALL USERS

            GET localhost:4000/user/profile/getallusers
            
    - ADD VIDEOGAME

            POST localhost:4000/user/addvideogame
            body:
        ``` js
            {
                "title": "Betty la fea",
                "image": "betty.jpg",
                "description": "La fea",
                "genre": "Action",
                "year": "2000",
                "multiplayer": "false",
                "online": "true",
                "developer_id": "1"
            }
        ```

    - UPDATE VIDEOGAME

            PUT localhost:4000/user/updatevideogame/
            body:
        ``` js
            {
                "title": "Betty la GUAPA",
                "image": "betty.jpg",
                "description": "La GUAPA",
                "genre": "RPG",
                "year": "2023",
                "multiplayer": "true",
                "online": "false",
                "developer_id": "3"
            }
        ```

</details>

--- 

## Agradecimientos

Me gustaria agradecer como es de costumbre a uno de mis mejores amigos, **Adrian Nuñez**. Siempre ha estado dispuesto a ayudarme pese a ser una persona muy ocupada, he aprendido mucho gracias a el y le debo muchisimo.

Tambien a mis compañeros de Bootcamp los cuales me han ayudado/aconsejado y animado, en especial a **Alvaro** quien no dudó en conectarse conmigo por la noche para ayudarme con problemas varios. 







