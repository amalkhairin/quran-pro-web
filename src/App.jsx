import RandomAyat from './pages/RandomAyat';

function App() {

  return (
    <div className='w-full h-screen overflow-auto bg-[#27292E]'>
      <div className='flex flex-col w-full h-full overflow-auto justify-start items-center text-white py-[2rem] sm:px-8 relative'>
        <RandomAyat />
        
        {/* <div className='flex flex-col gap-16 justify-between'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-6xl font-bold'>12:24</h1>
            <p className='text-sm text-gray-400'>Dzuhur dalam 0 jam 5 menit</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p className='text-tiny'>Maghrib</p>
              <div className='w-5 h-5 rounded-full bg-white'></div>
              <p className='text-tiny'>12.00</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p className='text-tiny'>Maghrib</p>
              <div className='w-5 h-5 rounded-full bg-white'></div>
              <p className='text-tiny'>12.00</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p className='text-tiny'>Maghrib</p>
              <div className='w-5 h-5 rounded-full bg-white'></div>
              <p className='text-tiny'>12.00</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p className='text-tiny'>Maghrib</p>
              <div className='w-5 h-5 rounded-full bg-white'></div>
              <p className='text-tiny'>12.00</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p className='text-tiny'>Maghrib</p>
              <div className='w-5 h-5 rounded-full bg-white'></div>
              <p className='text-tiny'>12.00</p>
            </div>
          </div>
        </div>
        <div className='min-w-96 mt-8'>
          <input type="text" className='w-full rounded-lg px-4 py-2 bg-[#2F3138] placeholder:text-[#585B63] focus:ring-gray-700 focus:outline-gray-700 outline-none focus:outline-offset-0 focus:border-gray-700 block' placeholder='Cari surah' />
        </div>
        <div className='grid grid-cols-3 gap-5 mt-10 sm:w-3/4 pb-20'>
          {surahList.map((surah) => {
            return (
              <div key={surah.nomor}>
                <button className='bg-[#212429] p-0 px-5 py-4 border-1 border-[#596373] w-full h-full flex flex-col items-start rounded-xl hover:bg-[#393d45]'>
                  <p className='text-[#13A795] leading-none'>{surah.namaLatin}</p>
                  <p className='text-[0.6rem]'>{surah.arti} - {surah.jumlahAyat} ayat</p>
                </button>
              </div>
            )
          })}
        </div> */}
      </div>
    </div>
  )
}

export default App
