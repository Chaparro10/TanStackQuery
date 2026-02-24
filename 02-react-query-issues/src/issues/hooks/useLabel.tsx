import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels";

export const useLabel = () => {
  const HOUR = 1000 * 60 * 60;
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: HOUR,
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      },
    ],
  });
  return {
    labelsQuery,
  };
};
