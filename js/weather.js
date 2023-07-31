
const KEY = '24846b9cab408cf3f134fce321d4df95'

// request get data

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`

    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)
    
    return data 
}

getData('London').then((data) => console.log(data))