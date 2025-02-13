import './App.css'

import BookCard from './components/BookCard'

function App() {

  return (
    <>
      <div>
      <h1>PW3 - WEBAPP - LIVRARIA</h1>
      <BookCard 
        titulo='As Cavernas de Aço' 
        autor='Isaac Azimov' />
      
      <BookCard 
        titulo='O Sol Desvelado' 
        autor='Isaac Azimov' />

<BookCard 
        titulo='O Fim da Infância' 
        autor='Isaac Azimov' />

<BookCard 
        titulo='Neuromancer' 
        autor='William Gibson' />

      </div>
      

    </>
  )
}

export default App
