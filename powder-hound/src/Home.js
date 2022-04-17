import React, { useState } from "react";
import Select from 'react-select'


function Home() {
    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})

    const selectOptions = [
        {value:"81657", label: 'Vail'},
        {value:"93546" , label: 'Mammoth'},
        {value:"98826" , label: 'Stevens pass'},
        {value:"V0N" , label: 'Whistler'},
        {value:"83002" , label: 'Jackson Hole'}
    ]

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': 'f537c8cd0emsh8417a5503e8f86cp1683dejsnade5a97d2370'
        }
    };
   const search = evt => {
       if (evt.key === "Selected") {
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setWeather(response)
            setQuery('')
        })
        .catch(err => console.error(err));
    }
    }

    const dateBuilder = (d) => {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const month = months[d.getMonth()]
        const date = d.getDate()

        return `${month}/${date}`
    }
    return (
        <>
            <h1>Home</h1>
            <main>
                <div className="search-box">
                    <Select options={selectOptions}
                    onSelect={search}/>
                </div>
                <div className="location-box">
                    <div className="location">Vail</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        15c
                    </div>
                    <div className="weather">
                        snow
                    </div>
                </div>
            </main>
        
        </>
    )
}

export default Home
