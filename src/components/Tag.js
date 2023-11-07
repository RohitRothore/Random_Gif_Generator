import React, {  useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

    const [tag, setTag] = useState('car')
    const {gif, loading, fetchData} = useGif(tag)

  return (
    <div className='w-1/2   bg-blue-500 rounded-xl border-2 border-gray-500 flex flex-col items-center gap-y-5 mt-4'>
        <h1 className='text-2xl underline font-bold uppercase mt-3'>Random {tag} Gif </h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt='logo'/>)
        }


        <input className=" w-10/12 text-lg py-2 px-5 outline-2 outline-green-500 rounded-xl "  onChange={ (event) => setTag(event.target.value)} value={tag} />
        
        <button className="bg-slate-300 w-10/12 text-lg py-2 rounded-xl mb-5" onClick={ () => fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag