
function search_result(){
    this.city = document.getElementById("city").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = this.responseText;
        }
    }
    xhttp.open('GET', 'url');
    xhttp.send();
}

function data_weather(){
    var search = new search_result()
    document.getElementById('weather').innerHTML='<p>DOCUMENTO JSON</p>' + search.city;
}


