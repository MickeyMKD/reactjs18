import axios from "axios"
import { useState, useEffect } from "react"
import "../assets/css/Cities.css"

export const Cities = () => {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState("Skopje")

    const mode = "json"

    useEffect(() => {
        axios.get(`${api.base}/weather?q=${city}&mode=${mode}&units=metric&appid=${api.key}`)
        .then(res => {
            setWeather(res.data)
        })
    }, [])

    return (
        <div className={weather ? ((weather.main.temp > 15) ? "cities warm" : "cities cold") : "cities"}>
            <div className="search-box">
                <input 
                    type="text"
                    placeholder="Search Cities"
                    className="search-bar"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button 
                    onClick={searchWeather}
                    class
                >

                </button>
            </div>
        {/* <div 
            dangerouslySetInnerHTML={{__html: weather}}
        /> */}
            
        </div>
    )
}