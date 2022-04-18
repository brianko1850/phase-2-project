import React, { useState } from "react";
import Select from 'react-select'


function Home() {
    const [query, setQuery] = useState("81657")
    const [weather, setWeather] = useState({})

    console.log(query.value)

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
 
    const getWeather = (newQuery) =>{

        setQuery(newQuery);
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${newQuery.value}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log(response.current.condition.text)
            setWeather(response)

        })
        .catch(err => console.error(err));
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
                    placeholder="select a resort"
                    isSearchable
                    onChange={getWeather
                }
                    />
                </div>
                <div className="location-box">
                    <div className="location">{query.label}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                    {weather.current.temp_c}°C
                    </div>
                    <div className="weather">
                        {weather.current.condition.text}
                    </div>
                </div>
            </main>
        
        </>
    )

}

export default Home
