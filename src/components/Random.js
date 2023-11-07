import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2   bg-green-500 rounded-xl border-2 border-gray-500 flex flex-col items-center gap-y-5 mt-4">
      <h1 className="text-2xl underline font-bold uppercase mt-3">
        A Random Gif{" "}
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="logo" />}

      <button
        className="bg-slate-300 w-10/12 text-lg py-2 rounded-xl mb-5"
        onClick={() => fetchData()}
      > 
        Generate
      </button>
    </div>
  );
};

export default Random;
