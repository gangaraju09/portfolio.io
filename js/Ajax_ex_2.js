function jsAjax(){
    fetch('data/Megacities.geojson')
    .then(conversion)
    .then(callback)
}

function conversion(responce){
    return responce.json();
}

function callback(responce){
    console.log(responce)
}

window.onload = jsAjax();


