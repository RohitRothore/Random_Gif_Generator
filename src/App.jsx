import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative ">
      <h1 className="bg-white  rounded-lg w-[95%] text-center mt-[20px] mx-auto  px-10 py-2 text-3xl font-bold ">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] mb-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
