import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

function DisplayAyat({ surahName, ayat, tafsir }) {

    return (
        <div className='sm:w-[70vw] bg-[#3C3E45] shadow-lg p-5 rounded-xl relative flex flex-col justify-center gap-5'>
            <div className='flex-row w-full flex justify-between items-center'>
                <div className='flex flex-row gap-2'>
                    <div className='w-2 h-2 rounded-full bg-[#d32e2e]'></div>
                    <div className='w-2 h-2 rounded-full bg-[#e6e339]'></div>
                    <div className='w-2 h-2 rounded-full bg-[#2cb94f]'></div>
                </div>
                <div className='text-gray-400'>Random Ayat</div>
            </div>
            {surahName && <div className='text-4xl w-full font-bold text-center'>{surahName} ayat {ayat.nomorAyat}</div>}
            {ayat && <div className='bg-[#212429] px-4 py-4 rounded-lg text-center'>
                <div className='text-[#13A795]'>{ayat.teksArab}</div>
                <div className='text-center text-tiny italic text-gray-400 mt-2'>{ayat.teksLatin}</div>
            </div>}
            {ayat && <div>
                <div className='text-tiny w-full text-gray-400 font-bold'>Artinya:</div>
                <div className='text-gray-300'>
                    {ayat.teksIndonesia}
                    {/* <Typewriter
                    options={{
                        strings: ayat.teksIndonesia,
                        cursor: '',
                        delay: 10,
                        autoStart: true,
                    }}
                    /> */}
                </div>
            </div>}
            {ayat && <div>
                <div className='text-tiny text-gray-400 font-bold'>Tafsir:</div>
                <div className='text-gray-300'>
                    {tafsir.teks}
                {/* <Typewriter
                    options={{
                        strings: tafsir.teks,
                        cursor: '',
                        delay: 10,
                        autoStart: true,
                    }}
                    /> */}
                </div>
            </div>}
        </div>
    );
}

export default DisplayAyat;
