var SearchHelper = {
    city:null,
    doRequest: function (){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4){
                var response = this.responseText;
            }
        }
        xhttp.open('GET', 'url');
        xhttp.send();

    }
};

function data_weather(){
    var search = SearchHelper;
    search.city =document.getElementById("city").value;
    document.getElementById('weather').innerHTML='<p>DOCUMENTO JSON</p>' + search.city;
}


