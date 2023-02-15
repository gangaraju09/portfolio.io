function jsAjax(){
    fetch('data/megaCities.geojson')
    .then(function conversion(responce){
        return responce.json();
    })
    .then(callback)
}
function callback(responce){
    console.log(responce)
}

window.onload = jsAjax()