// AJAX Concepts and Syntax //



function jsAjax(){                                           //create function to write ajax <script>
    var request = new Request('data/MegaCities.geojson');      // create a variable to call geojson file
    var init = {                                              // 'GET' is created to retrive data from server
      method: 'GET'                                           // 'POST' is used to send data to server
  
    }
    fetch(request, init )  // fetch() method accesses the server at the location defined in the request variable using the properties stored in the init variable
    .then(conversion)
    .then(callback)                            
  }                                     
  
  function conversion(responce){       // .then(conversion) is used convert data into useful form
  return responce.json()
  }
  
  
  function callback(responce) {         // .then is a query, callback() is used to retrive/accesss data from the server
    console.log(responce)
    console.log(JSON.stringify(responce))
  }
  window.onload = jsAjax();