import React, { useState } from 'react';
import './Weather.css'

import search_icon from '../images/search.png';
import clear_icon from '../images/clear.png';
import drizzle_icon from '../images/drizzle.png';
import humidity_icon from '../images/humidity.png';
import rain_icon from '../images/rain.png';
import cloud_icon from '../images/cloud.png';
import snow_icon from '../images/snow.png';
import wind_icon from '../images/wind.png';
const Weather = () =>{
    
    let api_key="e6922af6404857e7b2b79d9dac01decc";
   
    const search = async()=> {
        const element=document.getElementsByClassName("cityInput");

        
        if(element[0].value==="")
        {
           return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=e6922af6404857e7b2b79d9dac01decc`;
        let response =await  fetch(url);
        let data= await response.json().then(data1=>{
            
           const humidity=document.getElementsByClassName('humdity-percentage');
           humidity[0].innerHTML=data1.main.humidity+"%";
           const wind=document.getElementsByClassName("wind-rate");
           const temperature=document.getElementsByClassName("weather-temp");
           const location=document.getElementsByClassName("weather-location");
           wind[0].innerHTML=data1.wind.speed+"km/hr";
           temperature[0].innerHTML=data1.main.temp+"°C";
           location[0].innerHTML=data1.name;

           const weather_img=document.getElementsByClassName('weather_image');
           

           if(data1.weather[0].icon=="01d"||data1.weather[0].icon=="01n")
           {
            weather_img[0].src=clear_icon;
           }
           else if(data1.weather[0].icon=='02d'||data1.weather[0].icon=='02n')
           {
            weather_img[0].src=cloud_icon;
           }
           else if(data1.weather[0].icon=="03d"||data1.weather[0].icon=="03n")
           {
            weather_img[0].src=drizzle_icon;
           }
           else if(data1.weather[0].icon=="04d"||data1.weather[0].icon=="04n")
           {
            weather_img[0].src=drizzle_icon;
           }
           else if(data1.weather[0].icon=="09d"||data1.weather[0].icon=="09n")
           {
            weather_img[0].src=rain_icon;
           }
           else if(data1.weather[0].icon=="10d"||data1.weather[0].icon=="10n")
           {
            weather_img[0].src=rain_icon;
           }
           else if(data1.weather[0].icon=="13d"||data1.weather[0].icon=="13n")
           {
            weather_img[0].src=snow_icon;
           }
           else
           {
            weather_img[0].src=clear_icon;
           }

        });      
    }
    return(
        <div className="container">
        <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search'/>
           <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt=''/>
           </div>
        </div>
             
        <div className="weather-image">
             <img  className="weather_image" src={cloud_icon} alt=""/>
              <div className="weather-temp">24°C</div>
              <div className="weather-location">London</div>
             <div className='data-container'>
             <div className='element'>
                <img src={humidity_icon} alt='' className='icon'/>
                <div className='data'>
                <div className='humdity-percentage'>64%</div>
                <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt='' className='icon'/>
                <div className='data'>
                <div className='wind-rate'>18km/hr</div>
                <div className='text'>Wind Speed</div>
                </div>
            </div>
             </div>
             <p className='tex'>"Climate is what we expect, weather is what we get."</p>

        </div>
        </div>
    )
}

export default Weather