var SearchHelper = {
    city: null,
    doRequest: function () {
        return new Promise(function (resolve, reject) {
            /*var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    resolve(xhttp.responseText);
                }
            };
            xhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city);
            xhttp.send();*/

            setTimeout(function() {
                resolve(JSON.stringify({
                    weather: 'clouds',
                    temperature: '23'
                }));
            },1000);

        });
    },

    dataWeather: function (){
        document.querySelector('#document').classList.remove('documents');
        document.querySelector('#document').classList.toggle('hidden');
        document.querySelector('#weather').classList.remove('hidden');
        document.querySelector('#weather').classList.add('loading');

        SearchHelper.doRequest().then(function(value){
            document.querySelector('#weather').classList.remove('loading');
            document.querySelector('#weather').classList.toggle('hidden');
            var elem = document.getElementById('document');
            console.log(elem);
            if (elem.childNodes.length != 0){
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
            }
            var title = document.createElement('p');
            title.classList.add('p');
            title.appendChild(document.createTextNode('Weather time in ' + SearchHelper.city));
            document.getElementById("document").appendChild(title);
            var doc = JSON.parse(value);
            for (key in doc){
                var item = document.createElement('li');
                var name = key;
                var value = doc[key];
                var child = document.createTextNode(name + ': ' + value)
                item.appendChild(child);
                document.getElementById('document').appendChild(item);

            }
            document.getElementById("city").value = "";
            document.querySelector('#document').classList.remove('hidden');
            document.querySelector('#document').classList.toggle('documents');

        });
        SearchHelper.city =document.getElementById("city").value;
    }
};


