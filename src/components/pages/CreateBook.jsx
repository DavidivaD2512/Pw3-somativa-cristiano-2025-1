import React from 'react';
import { useState } from 'react';
import style from './CreateBook.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const CreateBook = ()=>{

    const [book, setBook] = useState({})

    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value})
    }

    function handlerChangeCategory(event) {
        setBook({...book, category : event.target.options[event.target.selectedIndex].text}) 
    }

    function submit(event) {
        event.preventDefault();
        console.log(book)
    }

    return(

        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVRO</h1>

            <form onSubmit={submit}>

                <Input 
                    text='Nome do livro'
                    type='text'
                    name='txt_livro'
                    id='txt_livro'
                    placeholder='Digite o nome do livro'
                    handlerChange={handlerChangeBook}
                />

                <Input 
                    text='Autor do livro'
                    type='text'
                    name='txt_autor'
                    id='txt_autor'
                    placeholder='Digite o nome do autor livro'
                    handlerChange={handlerChangeBook}
                />


                <Input 
                    text='Descrição do livro'
                    type='text'
                    name='txt_descricao'
                    id='txt_descricao'
                    placeholder='Digite a descrição do livro'
                    handlerChange={handlerChangeBook}
                />

                <Select 
                    name='slc_categoria' 
                    id='slc_categoria'
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