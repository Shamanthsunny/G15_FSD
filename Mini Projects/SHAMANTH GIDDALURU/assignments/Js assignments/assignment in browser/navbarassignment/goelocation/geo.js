let x = document.getElementById("demo")

const sucess = (position) => {
    x.innerHTML = "Latitude:"+ position.coords.latitude + "<br>" + "longitude:"+ position.coords.longitude
    
    console.log(position)
}
const error = (position) => {
    console.log(position)
}

navigator.geolocation.getCurrentPosition(sucess,error,{
    timeout : 5000,
    enableHighAccuracy : true
})
navigator.geolocation.watchPosition(sucess)  

navigator.geolocation.getCurrentPosition(sucess,error)