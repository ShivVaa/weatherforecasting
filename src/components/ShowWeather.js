import React from 'react'
import "./showweather.css";

function ShowWeather(props) {
    const {data} = props;
    console.log(data);

const iconurl = "http://openweathermap.org/img/wn/" + `${data.cod != 404 ? data.weather[0].icon : null}` + ".png";

    return <div className="showweather">
    {
        data.cod != 404 ? (
<React.Fragment>

<div className="maincard">
<span className="cardtitle">
    {data.name}, {data.sys.country}. Weather
</span>
<span className="cardsubtitle">
    As of {new Date().toLocaleTimeString()}
</span>
<h1>{Math.floor(data.main.temp - 273.15) }
<sup>o</sup> C
</h1>
<span className="main-weather">
{
   (data.weather[0].main)
}
</span>
<img src= {iconurl} className="icon-weather" alt=""/>
<span className="desc-weather">
    {data.weather[0].description}
</span>
</div>
<div className="weather-detail">
<div className="section0">

<table>
<tr>
<td>
    <h3>HIGH/LOW =</h3>
</td>

<td>
    <span>
        {Math.floor(data.main.temp_max - 273.15)} /{" "}
        {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>C,
    </span>
</td>

 <td>
    <h3>HUMIDITY =</h3>
</td>

<td>
    <span>

        {data.main.humidity} %, 

    </span>
</td>

<td>
    <h3>PRESSURE =</h3>
</td>

<td>
    <span>

        {data.main.pressure} HPa, 

    </span>
</td>

<td>
    <h3>WIND =</h3>
</td>

<td>
    <span>


        {Math.floor((data.wind.speed * 18) / 5)}Km/hr

    </span>
</td>
</tr>


</table>

</div>
</div>

</React.Fragment>
        ) : (
            <div className="maincard">
            <h2>{data.message}</h2>
        </div>
        )}

    </div>
}

export default ShowWeather;