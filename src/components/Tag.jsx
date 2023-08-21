import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  const [tag , setTag] = useState('car');

  const {gif , loading , fetchData} = useGif(tag);

  return (
    <div className='bg-blue-500 w-1/2 rounded-lg border border-black mt-[30px]
    flex flex-col items-center gap-y-5'>

      <h2 className='text-2xl mt-[15px] font-bold underline uppercase'>random {tag} gif</h2>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt='gif'/>)
      }

      <input value={tag} onChange={(event) => setTag(event.target.value)} className='mb-[3px] bg-blue-200 w-10/12 text-lg py-2 rounded-lg uppercase text-center' />

      <button onClick={() => fetchData(tag)} className='mb-[15px] bg-blue-200 w-10/12 text-lg py-2 rounded-lg uppercase'>generate</button>

    </div>
  )
}

export default Tag
