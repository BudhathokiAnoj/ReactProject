import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {MdLocationPin} from 'react-icons/md'
import Loading from '../../assets/loading.svg'
const Dashboard = () => {

    const [search, setSearch] = useState('kathmandu')
    const [weatherData,setWeatherData] = useState({
       
    })

    useEffect(()=> {

      async  function getWeather() {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=571a81d23317d60407ce751aefe62a6a&&units=metric`

        const res = await axios.get(URL).then(data => {
            console.log(data.data)
            setWeatherData(data.data)
        }).catch(err => console.log(err))
      }
      getWeather()

    },[search])
    
  return <>
  <section className='h-[100vh] w-full flex justify-center items-center'>
    <img src='nature.jpg' className='object-fill w-full h-full absolute -z-10'/>
  <div className='flex-col h-[650px] w-[420px] rounded-[50px] backdrop-blur bg-black/30'>
    <div className='flex items-center justify-center'>
        <input onChange={(e)=> setSearch(e.target.value)} type='text' className='h-[45px] w-auto rounded-2xl outline-none backdrop-blur text-white mx-[3%] my-[60px] px-5 bg-black/20 shadow-inner' placeholder='Enter city name'/>
          <div className='h-40px w-40px text-yellow-500 cursor-pointer'>
            <FaSearch size={35}/>
         </div>
    </div>
    
    <div className='text-white flex justify-center items-center my-[-34px]'>
        <MdLocationPin size={50}/>
        <h1 className='px-2 text-[40px]'>{search}</h1>
    </div>
    <div className='text-yellow-500 text-4xl flex-col justify-center items-center mt-[40px] h-[200px] w-auto'>
        <img src="cloud2.png" alt="" className='object-fill h-[200px] bg-transparent mx-[23%]'/>
        <p className='text-white text-[17px] my-[-20px] mx-[37%] font-medium'>partly cloud</p>
    </div>
    <div className='my-[-26%]'>
    <div className='my-[150px]'>
        <h1 className='text-7xl text-white font-medium px-[20%]'>
            
            {
                weatherData.main ? 
              <div> {weatherData.main.temp}°C</div>  
                :
                    <div className='h-[40px] w-[40px] mx-[55px]'>
                        <img src={Loading} alt="" />
                    </div>
            }
            
            </h1>
        <h1 className='text-white text-xl px-[29%] font-bold'>Wednesday,14 Jun</h1>
    </div>
    <div className='font-bold flex justify-between items-center text-white my-[-140px] px-2 w-[350px] border-black rounded-sm mx-[10%]'>
        <div className='flex-col justify-center items-center py-4'>
            <div className='px-3'> 
            { 
            weatherData?.wind ?
            weatherData.wind.speed : 
            <div>
                <img src={Loading} alt="" />
            </div>
            }
            </div>
            <p className='px-3'> wind</p>
        </div>
        <div className='flex-col justify-center items-center py-4'>
        <div className='px-4'> 
            { 
            weatherData?.main ?
            weatherData.main.humidity : 
            <div>
                <img src={Loading} alt="" />
            </div>
            }
            </div>
            <p >Humidity</p>
        </div>
        <div className='flex-col justify-center items-center py-4'>
        <div className='px-3'> 
            { 
            weatherData?.main ?
            weatherData.main.pressure : 
                <div>
                    <img src={Loading} alt="" />
                </div>
            }
            </div>
            <p>pressure</p>
        </div>
        </div>
    </div>
  </div>
  </section>
  
  </>
}

export default Dashboard
