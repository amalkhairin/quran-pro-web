import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function DisplayAyat({ surahName, ayat, tafsir }) {

    // const [displayedText, setDisplayedText] = useState('');
    // const [index, setIndex] = useState(0);
    // const speed = 100;

    // useEffect(() => {
    //     if (index < ayat.teksIndonesia.length) {
    //         const timeout = setTimeout(() => {
    //             setDisplayedText((prev) => prev + ayat.teksIndonesia[index]);
    //             setIndex((prev) => prev + 1);
    //         }, speed);

    //         return () => clearTimeout(timeout);
    //     }
    // }, [index, ayat.teksIndonesia, speed]);

    return (
        <div className='sm:w-3/4 bg-[#3C3E45] shadow-lg p-5 rounded-xl relative flex flex-col justify-center gap-5'>
            <div className='flex-row flex gap-2'>
                <div className='w-2 h-2 rounded-full bg-[#d32e2e]'></div>
                <div className='w-2 h-2 rounded-full bg-[#e6e339]'></div>
                <div className='w-2 h-2 rounded-full bg-[#2cb94f]'></div>
            </div>
            <div className='text-4xl font-bold text-center'>{surahName}</div>
            <div className='bg-[#212429] px-4 py-4 rounded-lg text-center'>
                <div className='text-[#13A795]'>{ayat.teksArab}</div>
                <div className='text-center text-tiny italic text-gray-400 mt-2'>{ayat.teksLatin}</div>
            </div>
            <div>
                <div className='text-tiny text-gray-400 font-bold'>Artinya:</div>
                <div className='text-gray-300'>{ayat.teksIndonesia}</div>
            </div>
            <div>
                <div className='text-tiny text-gray-400 font-bold'>Tafsir:</div>
                <div className='text-gray-300'>{tafsir.teks}</div>
            </div>
        </div>
    );
}

DisplayAyat.propTypes = {
    surahName: PropTypes.string.isRequired,
    ayat: PropTypes.shape({
        teksArab: PropTypes.string,
        teksLatin: PropTypes.string,
        teksIndonesia: PropTypes.string
    }).isRequired, // ayat harus objek dengan properti tertentu dan wajib ada
    tafsir: PropTypes.shape({
        teks: PropTypes.string
    }).isRequired // tafsir harus objek dengan properti teks dan wajib ada
};

export default DisplayAyat;
