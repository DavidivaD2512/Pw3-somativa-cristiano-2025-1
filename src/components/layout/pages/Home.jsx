import React from 'react';
import style from './Home.module.css';

function Home() {
    return(

        <section className={style.home_container}>

            <h1>Bem vindo ao WEB APP<span>LIBRI</span></h1>
            <p>Comece a gerenciar os seus livros agora mesmo!</p>
            <img  src="./book_home.jpg"/>

        </section>

    );
}

export default Home;