    //Function to initialize when script exceuted
    function initialize(){
        cities()
      }
      // function to create table with cities, population and city size
      function cities (){
      
      
        var cityPop = [
          { city: 'Madison',
                    population: 233209
                },
                {
                    city: 'Milwaukee',
                    population: 594833
                },
                {
                    city: 'Green Bay',
                    population: 104057
                },
                {
                    city: 'Superior',
                    population: 27244
                },
        ]
         //create the table element
            var table = document.createElement("table");
            
            //how to push an element into the table
        var middleton = {};
            //add each property to the object
            middleton.city = 'Middleton';
            middleton.population = 233209;
        
            //push the city object into the array
            cityPop.push(middleton);
      
              //create a header row
      var headerRow = document.createElement('tr');
      
      //create a city column
      var cityHeader = document.createElement('th');
      cityHeader.innerHTML = 'City'
      headerRow.appendChild(cityHeader)
      //create a population column
      var popHeader = document.createElement('th');
      popHeader.innerHTML = 'Population'
      headerRow.appendChild(popHeader)
      
      //create a city size column
      var citySize = document.createElement('th');
      citySize.innerHTML = 'City Size'
      headerRow.appendChild(citySize)
      //add row to table
      table.appendChild(headerRow)
        
        //create a loop to itirate each row in city pop to new table
       
        for(i=0;i<cityPop.length;i++){
          var tr = document.createElement('tr')
          table.appendChild(tr)
      
      
        
        var city = document.createElement('td')
        city.innerHTML = cityPop[i].city
        tr.appendChild(city)
        
        var pop = document.createElement('td')
        pop.innerHTML = cityPop[i].population
        tr.appendChild(pop)
      
      // create condition statement for city size
        var citySize = document.createElement('td')
        if(cityPop[i].population<=100000){
          citySize.innerHTML = 'Small'
          tr.appendChild(citySize)
        }else if(cityPop[i].population<=500000){
          citySize.innerHTML = 'Medium'
          tr.appendChild(citySize)
        }else if(cityPop[i].population>500000){
          citySize.innerHTML = 'Large'
          tr.appendChild(citySize)
        }
      
          //append the table element to the div
      document.querySelector("#mydiv").appendChild(table);
      document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>');
      
        addColumns(cityPop);
        addEvents();
        }
        
      }
      
      
      function addColumns(cityPop){
        
        
      };
      
      function addEvents(){
      //add random color on mouseover
      
      //select the table element
      table = document.querySelector("table");
      
      //add mouseover event
      document.querySelector("table").addEventListener("mouseover", function(){
        var color = "rgb(";
        //generate random color
        for (var i=0; i<3; i++){
      
          var random = Math.round(Math.random() * 255);
          color += random;
      
          if (i<2){
            color += ",";
          } else {
            color += ")";
          };
        }
        //style table with the random style
        table.style.color = color;
      }); 
      
      //function that shows an alert on click
      function clickme(){
        alert('Hey, you clicked me!');
      };
      
      //event listener for the click
      table.addEventListener("click", clickme)
      };
      
      //call the initialize function when the document has loaded
      document.addEventListener('DOMContentLoaded',initialize)
{

  
}
      //______________________________________________________________________________________________________//
//______________________________________________________________________________________________________//

// AJAX Concepts and Syntax //

function debugCallback(myData){  // defined a function with name debugcallback with one argument myData
  console.log(myData)          // here console.log will print the result, because required information is stored in myData
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData)) //This line finds the HTML element with the ID mydiv and inserts a new HTML element containing the string GeoJSON data:  followed by the value of myData converted to a JSON string.
};

function debugAjax(){	 
  var myData;        // defined a function with an element debugAjax
	fetch("data/megaCities.geojson")    // fetch is used to retrive information from the data stored location
		.then(function(response){             //  responce argument will have information retrived from the fetch method, here .then() method takes a callback function as its argument after completing its promise such as fetch
      myData = response.json()          // information which is stored in responce is converted into a usabale json format using .json and it is defined to myData variable
      console.log(myData)            // here, console will execute myDate, but it will be still incomplete promise becuause the json information is stored in myData but data is not call yet
       
			return myData;        
    //  console.log(response)         Here console doenst works becuase The console.log statement after the return statement will never be executed as the function will exit and return the responce
		})
    .then(debugCallback)            // now converted information is call with debugCallback and this debugCallback is executed with our first fuction debugCallback
    
	//console.log(response)              // Here console doenst works becuase responce have .json information, however this information is not yet defined
};

document.addEventListener('DOMContentLoaded', debugAjax) 