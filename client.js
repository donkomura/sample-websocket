//Websocket
var uri = 'ws://0.0.0.0:9000';

window.onload = function () {
    connection = new WebSocket(uri);
    connection.onopen = onOpen;
    connection.onmessage = onMessage;
}

function onOpen(event) {
    console.log("Connect successful!");
}

function onMessage(event) {
    //Incoming data
    console.log(event.data);
    updateContent(event.data);
    // addRow(data);
}

function updateContent(data) {
    var json_data = JSON.parse(JSON.parse(data));
    var container = json_data.container;
    if (json_data.connection == 1) {
        return
    }
    document.getElementById("time_" + container).innerHTML = json_data.time;
    document.getElementById("count_" + container).innerHTML = json_data.count;
    document.getElementById("amount_" + container).innerHTML = json_data.amount;
}

function addRow(data) {
    var table = document.getElementById("table");
    var a = document.createElement('a');
    var text = document.createTextNode(data);
    var br = document.createElement('br');
    a.appendChild(text);
    table.appendChild(a);
    table.appendChild(br);
}

function JSONMaker(strData) {
    var JSON_DATA = "";
    JSON_DATA = {
        data: strData,
    };
    return JSON.stringify(JSON_DATA)
}

function JSONPerser(JSON_DATA) {
    json = JSON.parse(JSON_DATA);
    let strData = json.data;
    return strData;
}

function clock() {
    var now = new Date();
    document.getElementById("time").innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
}

// sleep execution
setInterval(clock, 1000);