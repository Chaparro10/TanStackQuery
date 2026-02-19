import "./App.css";
import { useQuery } from "@tanstack/react-query";

interface  DataAPI{
  answer:string,
  forced:Boolean,
  image:string
}


const getCryptoNumber = async (): Promise<DataAPI> => {
  const resp = await fetch(
    "https://yesno.wtf/api",
  ).then((resp) => resp.json());
  console.log("resp", resp);
  return resp;
};
function App() {
  const {
    isLoading,
    isError,
    data,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
  });

  if (isLoading || isFetching) {
    return <h1>Cargando</h1>;
  }
  if (isError) {
    return <h1>Ocurrio un error::{error.message}</h1>;
  }

  return (
    <>
      <h1>Hola Mundo</h1>
      <h3>answer: {data?.answer}</h3>
      <h3>{`forced: ${data?.forced ? 'NO' : 'NO'}`}</h3>
      <img src={data?.image ? data.image : " " }/>
      <button onClick={()=>refetch()}>
        Refrescar
      </button>
    </>
  );
}

export default App;
