const apiKey = "025098e046370da3ed4a4c498313eb98";
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");


function weather(){




const city = document.querySelector(".in-1").value;



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    // console.log("City:", data.name);
    // console.log("Temperature:", data.main.temp + "°C");
    // console.log("Weather:", data.weather[0].description);
    // console.log("Humidity:", data.main.humidity + "%");
    // console.log("Visibility:",data.visibility/1000+"Km")
    

document.querySelector(".card").innerHTML = 
` <h2>${data.name}</h2> 
<p>🌡️Temperature: ${data.main.temp} °C</p>
 <p>☁️Weather: ${data.weather[0].description}</p> 
 <p>💧Humidity: ${data.main.humidity}%</p> 
 <p> 👁️Visibility: ${data.visibility / 1000} Km</p> 
 <p>💨Wind Speed: ${data.wind.speed} m/s</p> `;
    
  })
  .catch(error => {
    console.error("Error:", error);



  });

}

btn.addEventListener("click",weather);

btn2.addEventListener("click", () => {
    document.querySelector(".in-1").value = "";
    document.querySelector(".card").innerHTML = "";
});






