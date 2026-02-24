import { githubAPI } from "../../api/github.api";
import { GithubLabel } from "../interfaces/label-interface";




export const getLabels = async (): Promise<GithubLabel[]> => {
  const {data} = await githubAPI.get<GithubLabel[]>("/labels");
  console.log('data', data)
  return data;
};