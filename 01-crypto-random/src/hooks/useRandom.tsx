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
export const useRandom=()=>{
    const randomQuery= useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
    staleTime:1000* 60
  });

  return {
    randomQuery
  }
}