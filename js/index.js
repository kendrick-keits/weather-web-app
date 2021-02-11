//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  const city = document.querySelector('input').value
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0ac6be1b4affbcc156eee94fc09ec6c&units=imperial`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let temp = data.main.temp
        msg = `Temperature is: ${temp}`
        const curTemp = document.createElement('span')
              curTemp.textContent = data.main.temp
              document.getElementById('currentTemp').innerHTML = ""
              curTemp.setAttribute('id','currentTemp')
              document.getElementById('currentTemp').textContent = data.main.temp
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}