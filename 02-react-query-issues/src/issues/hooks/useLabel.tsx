import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels";

export const useLabel = () => {
  const HOUR = 1000 * 60 * 60;
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime:HOUR
  });
  return {
    labelsQuery,
  };
};
