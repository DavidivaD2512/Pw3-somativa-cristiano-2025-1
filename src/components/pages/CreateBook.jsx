import React from 'react';
import { useState, useEffect } from 'react';
import style from './CreateBook.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const CreateBook = ()=>{

    const [book, setBook] = useState({});

    const [categories, setCategories] = useState({});

    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }

    function handlerChangeCategory(event) {
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].text}) ;
        console.log(book)
    }

    function submit(event) {
        event.preventDefault();
        console.log(book);
    }

    useEffect(()=> {
        fetch('http://127.0.0.1:5000/listagemLivros', {
            method: 'GET',
            headers: {
                'Contet-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Headers': '*'
            }
            
        }).then((response) => 
            response.json()
        ).then((categories) => {
            console.log('Teste' + categories)
        }).catch((error) => {
            console.log('ERROR: ' + error)
        });
    }, []);

    return(

        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVRO</h1>

            <form onSubmit={submit}>

                <Input 
                    text='Nome do livro'
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o nome do livro'
                    handlerChange={handlerChangeBook}
                />

                <Input 
                    text='Autor do livro'
                    type='text'
                    name='autor_livro'
                    id='autor_livro'
                    placeholder='Digite o nome do autor livro'
                    handlerChange={handlerChangeBook}
                />


                <Input 
                    text='Descrição do livro'
                    type='text'
                    name='descricao_livro'
                    id='descricao_livro'
                    placeholder='Digite a descrição do livro'
                    handlerChange={handlerChangeBook}
                />

                <Select 
                    name='cod_categoria' 
                    id='cod_categoria'
                    text='Categoria do livro' 
                    handlerChange={handlerChangeCategory}
                />

                <Button
                    label='CADASTRAR LIVRO'
                />

            </form>


        </section>
    )
}

export default CreateBook