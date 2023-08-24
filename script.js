document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var jsonData = JSON.parse(xhr.responseText);
                displayJSONData(jsonData);
            } else {
                console.error("Request failed with status:", xhr.status);
            }
        }
    };

    xhr.send();
});

function displayJSONData(data) {
    var container = document.getElementById("row");
    var dataList = document.getElementById("data-list");
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<div class="col-md-3 " > ';
        html += '<div class="test" > ';
        html += '<ul><li><b>Name: ' + data[i].name + '</b></li><li>Username:' + data[i].username + '</li><li>City:' + data[i].address.city + '</li><li>Street:' + data[i].address.street + '</li></ul>';
        html += '</div>';
        html += '</div>';
    }
    container.innerHTML = html;

}
