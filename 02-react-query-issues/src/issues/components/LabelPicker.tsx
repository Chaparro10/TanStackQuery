import LoadingSpinner from "../../shared/component/LoadingSpinner";
import { useLabel } from "../hooks/useLabel";

export const LabelPicker = () => {

  const {labelsQuery}= useLabel();


  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52"><LoadingSpinner/></div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data?.map((item) => (
        <span

          key={item.id}
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${item.color}`, color:`${item.color}`  }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};
