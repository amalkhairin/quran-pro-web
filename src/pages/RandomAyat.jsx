import React, { useEffect, useState } from 'react';
import jsonApi from '../api/jsonServerApi';

function RandomAyat() {
    const [surahName, setSurahName] = useState('');
    const [randomAyat, setRandomAyat] = useState({});
    const [randomTafsirAyat, setRandomTafsirAyat] = useState({});
    const [randomIndex, setRandomIndex] = useState(Math.round(Math.random() * 5));

    // const getRandomIndexNumber = Math.round(Math.random() * 114);

    const getSurah = async (nomorSurah) => {
        const { data } = await jsonApi.get(`surahs/${nomorSurah}`);
        return data
    }

    const getRandomAyat = async () => {
        setRandomIndex(Math.round(Math.random() * 5));
        const surah = await getSurah(randomIndex);
        console.log(surah.ayat.length);
        const tafsir = surah.tafsir;

        let randomIndexAyat = Math.round(Math.random() * surah.ayat.length - 1);
        if (randomIndexAyat < 0) {
            randomIndexAyat = 0
        }
        if (randomIndexAyat > surah.ayat.length - 1) {
            randomIndexAyat = surah.ayat.length - 1
        }

        setSurahName(surah.namaLatin);
        setRandomAyat(surah.ayat[randomIndexAyat]);
        setRandomTafsirAyat(tafsir[randomIndexAyat]);
        console.log(randomIndexAyat);

        console.log(surah.ayat[randomIndexAyat]);
        console.log(surah.namaLatin)
        console.log("tafsir:");

        console.log(tafsir[randomIndexAyat])

    }

    useEffect(() => {
        getRandomAyat();
    }, [])
    return (
        <div className='sm:w-3/4 bg-[#3C3E45] shadow-lg p-5 rounded-xl relative flex flex-col justify-center gap-5'>
            <div className='flex-row flex gap-2'>
                <div className='w-2 h-2 rounded-full bg-[#d32e2e]'></div>
                <div className='w-2 h-2 rounded-full bg-[#e6e339]'></div>
                <div className='w-2 h-2 rounded-full bg-[#2cb94f]'></div>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={getRandomAyat} className='px-5 py-2 bg-[#13A795] rounded-lg hover:bg-[#95f3e8] w-auto'>Generate</button>
            </div>
            <div className='text-4xl font-bold text-center'>{surahName} ayat {randomAyat.nomorAyat}</div>
            <div className='bg-[#212429] px-4 py-4 rounded-lg text-center'>
                <div className='text-[#13A795] text-lg'>{randomAyat.teksArab}</div>
                <div className='text-center text-tiny italic text-gray-400 mt-2'>{randomAyat.teksLatin}</div>
            </div>
            <div>
                <div className='text-tiny text-gray-400 font-bold'>Artinya:</div>
                <div className='text-gray-300'>{randomAyat.teksIndonesia}</div>
            </div>
            <div>
                <div className='text-tiny text-gray-400 font-bold'>Tafsir:</div>
                <div className='text-gray-300'>{randomTafsirAyat.teks}</div>
            </div>
        </div>
    )
}

export default RandomAyat