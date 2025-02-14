import './App.css'

import BookCard from './components/BookCard'

import capa_livro from './assets/cavernas_aco.jpg'

function App() {

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <BookCard 
          titulo='As Cavernas de Aço' 
          autor='Isaac Azimov'
          imagem={capa_livro} />
        
        {/* <BookCard 
          titulo='O Sol Desvelado' 
          autor='Isaac Azimov' />

        <BookCard 
          titulo='O Fim da Infância' 
          autor='Arthur C. Clark' />

        <BookCard 
          titulo='Neuromancer' 
          autor='William Gibson' /> */}

      </div>
      

    </>
  )
}

export default App