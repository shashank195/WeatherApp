function getWeather(loc){

  $.ajax({
           url: "https://api.darksky.net/forecast/0fcf27f3c9932a392b88da0d6a8d36e9/"+loc,
           dataType: "jsonp",
         jsonpCallback: "setWeather"
       });

}

function setWeather(json) {
         $('#temperature').html(json.currently.temperature);
  $('#city').html(city);
  $('#summary').html(json.currently.summary);
  //$('#icon').html(json.currently.icon);
  $('#humidity').html(json.currently.humidity);
  $('#windspeed').html(json.currently.windSpeed);
  $('#pressure').html(json.currently.pressure);
  $('#unit').html("°F");

  var skycons = new Skycons({"color": "#333333"});
  skycons.add("icon", json.currently.icon);
  skycons.play();
  
 
              }

function getLocationData(){

      $.getJSON('https://ipinfo.io/json', function(jd) {



        loc = jd.loc;
        city= jd.city+", "+jd.region+", "+jd.country;


        getWeather(loc);

        });




}

var loc;
var city;
$(document).ready(function(){

getLocationData();

 $("#tempera").click(function(){
   var temp = document.getElementById("temperature").textContent;
   if(document.getElementById("unit").textContent=="°F"){
     

   temp=(5*temp-32*5)/9;
   temp=temp.toFixed(2);
  $('#temperature').html(temp);
    $('#unit').html("°C");
   }
   else if(document.getElementById("unit").textContent=="°C"){
       temp=(9/5)*temp + 32 ;
   temp=temp.toFixed(2);
  $('#temperature').html(temp);
    $('#unit').html("°F"); 
     
   }
}); 
  
});
