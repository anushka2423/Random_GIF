import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif , loading , fetchData} = useGif();

  return (
    <div className='bg-green-500 w-1/2 rounded-lg border border-black mt-[30px]
    flex flex-col items-center gap-y-5'>

      <h2 className='text-2xl mt-[15px] font-bold underline uppercase'>a random gif</h2>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt='gif'/>)
      }

      <button onClick={() => fetchData()} className='mb-[15px] bg-green-200 w-10/12 text-lg py-2 rounded-lg uppercase'>generate</button>

    </div>
  )
}

export default Random
