import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Screensize = () => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge:200
};
function success(pos) {
    var crd = pos.coords;
    console.log('pos is ',pos);
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&key=AIzaSyAU5kdInRInhf4yqQl7QE8DmCwSH4dlZKU`;
    axios.get(geocodeUrl).then(res=>{
      console.log("the locations is ",res.data
      );
    }).catch(err=>{
      console.log("the error is ",err);
    })


}
function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
useEffect(() => {
    if (navigator.geolocation) {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success)
                }
                else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options)
                }
                result.onchange = function () {
                    console.log(result.state);
                };
            })
    }else{
        alert('Sorry the service is currently unavailable')
    }
},[])
    const [countries,setCountries] = useState([]);
    
    useEffect(()=>{
axios.get("https://restcountries.com/v3.1/all").then(response=>{
  console.log("The response is ",response.data);
}).catch(err=>{
  console.error("the error is ",err);
})
}
 ,[countries])
  return (
    <div className=' bg-red-800 w-full flex justify-between '>
        hello world 
    </div>
  )
}

export default Screensize