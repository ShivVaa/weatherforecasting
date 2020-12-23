import React, { useState } from "react";
import ShowWeather from "./ShowWeather";
import "./weather.css";

function Weather() {

const APIKEY = "8745d9681a1c4e75e33f3386df4b4abc";

    const [form, setForm] = useState({
        city:"",
        country:"",
    });

const [weather, setWeather] = useState([])

    async function weatherData(e){

        e.preventDefault();
        if(form.city == ""){
            alert("Please, add valid name of city or country!");
        }
        else
        {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
            ).then((res) => res.json())
            .then((data) => data);

            setWeather(
                {
                    data : data
                }
            );

        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value; 

        if (name == "city") {
            setForm({...form, city:value});

          }
        if (name == "country"){
            setForm({...form, country:value});
        }
       

};
    return (

        <div className="weather">
            <span className="title">Weather Condition</span>
            <br />

            <form>
                
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)} />
                &nbsp; &nbsp; &nbsp;
                <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)} />
               
                <button className="search" onClick={(e) => weatherData(e)}>
                Click Me!
                </button> 

            </form>

            {
                weather.data != undefined ? (
                    <div>
                        <ShowWeather data={weather.data} />
                    </div>
                ) : null}
                </div>

    );

}

export default Weather;