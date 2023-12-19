import Banner from "./componentes/Banner"
import Botao from "./componentes/Botao"
import Formulario from "./componentes/Formulario"
import Card from "./componentes/Card"

function App() {
   // criar um estado para receber o card
   const [referencias, setReferencias] = useState ([])

   // funcao para cadastrar o card
   const aoNovaReferenciaAdicionada = (referencia) => {
       setReferencias([...referencias, referencia])
   }

  return (
    <div>
         <Banner />
         <Formulario />
         <div className="cards-container">
            {referencias.map((referencia, index) => (
                <Card key={index} referencia={referencia}/>
            ))}
        </div>
    </div>
  )
}

export default App;
