//Load javascript lib ar-drone
var arDrone = require('ar-drone');
//define arDrone client
var client = arDrone.createClient();
var arDrone = require('ar-drone');
var http    = require('http');


//Takeoff
client.takeoff();

client.after(2000, function(){ 
  client.up(0.1);    
})
.after(2000, function(){ 
  client.up(0);
  client.down(0.1);    
  
})
.after(2000, function(){ 
  client.down(0);    
})
//Land after 5 seconds
.after(2000, function(){ 
  client.land();    
});

