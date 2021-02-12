//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  const city = document.querySelector('input').value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0ac6be1b4affbcc156eee94fc09ec6c&units=imperial`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)
        
        
        const curTemperature = document.createElement('span')
              curTemperature.textContent = data.main.temp
              document.getElementById('currentTemperature').innerHTML = ""
              curTemperature.setAttribute('id','currentTemperature')
              document.getElementById('currentTemperature').textContent = data.main.temp

              let result = data.weather

              let description = result[0]

              console.log(description.description)

        const curDescription = document.createElement('span')
              curDescription.textContent = description.description
              document.getElementById('currentDescription').innerHTML = ""
              curDescription.setAttribute('id','currentDescription')
              document.getElementById('currentDescription').textContent = description.description

              let result01 = data.weather

              let icon = result01[0]

              let iconAdd = icon.icon

              let iconUrl = `http://openweathermap.org/img/w/${iconAdd}.png`

              console.log(iconUrl)

              document.getElementById('img').src = iconUrl;


              
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
                /*    const curTemperature = document.createElement('span')
              curTemperature.textContent = data.weather.description
              document.getElementById('currentDescription').innerHTML = ""
              curTemperature.setAttribute('id','currentDescription')
              document.getElementById('currentDescription').textContent = data.main.temp */
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
