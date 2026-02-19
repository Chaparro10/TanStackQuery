import "./App.css";
import { useRandom } from "./hooks/useRandom";


function App() {

  const {randomQuery} = useRandom();


  if (randomQuery.isLoading) {
    return <h1>Cargando</h1>;
  }
  if (randomQuery.isError) {
    return <h1>Ocurrio un error::{randomQuery.error.message}</h1>;
  }

  return (
    <>
      <h1>Hola Mundo</h1>
      <h3>answer: {randomQuery.data?.answer}</h3>
      <h3>{`forced: ${randomQuery.data?.forced ? 'NO' : 'NO'}`}</h3>
      <img src={randomQuery.data?.image ? randomQuery.data.image : " " }/>
      <button onClick={()=>randomQuery.refetch()}>
        Refrescar
      </button>
    </>
  );
}

export default App;
