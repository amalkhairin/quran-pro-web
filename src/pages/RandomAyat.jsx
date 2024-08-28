import React, { Component } from 'react';
import jsonApi from '../api/jsonServerApi';
import DisplayAyat from '../components/DisplayAyat';

class RandomAyatClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surahName: '',
            randomAyat: {},
            randomTafsirAyat: {},
            randomIndex: Math.round(Math.random() * 5),
        };
    }

    getSurah = async (nomorSurah) => {
        const { data } = await jsonApi.get(`surahs/${nomorSurah}`);
        return data;
    };

    getRandomAyat = async () => {
        this.setState({ randomIndex: Math.round(Math.random() * 5) });
        const surah = await this.getSurah(this.state.randomIndex);
        const tafsir = surah.tafsir;
        let randomIndexAyat = Math.round(Math.random() * (surah.ayat.length - 1));
        randomIndexAyat = Math.max(0, Math.min(randomIndexAyat, surah.ayat.length - 1));

        this.setState({
            surahName: surah.namaLatin,
            randomAyat: surah.ayat[randomIndexAyat],
            randomTafsirAyat: tafsir[randomIndexAyat]
        });
    };

    componentDidMount() {
        this.getRandomAyat();
    }

    render() {
        return (
            <div className='flex flex-col items-center'>
                <button onClick={this.getRandomAyat} className='px-5 py-2 bg-[#13A795] rounded-lg hover:bg-[#95f3e8] w-auto mb-5'>Generate</button>
                <DisplayAyat 
                    surahName={this.state.surahName} 
                    ayat={this.state.randomAyat} 
                    tafsir={this.state.randomTafsirAyat} 
                />
            </div>
        );
    }
}

export default RandomAyatClass;