
const pinNumber = document.querySelector('#pinnumber');
const status = document.querySelector('#status');
const active = document.querySelector('#active');
const button = document.querySelector('#send');
const responseText = document.querySelector('#responseText');
const ip = document.querySelector('#ip');

let socket;

button.onclick = () => {
    const data = {
        event: "message",
        data: {
            pinNumber: Number(pinNumber.value),
            status: status.checked,
            active: active.checked,
        }
    }
    if (socket === undefined) {
        socket = new WebSocket(`wss://${ip.value}:7070/ws`);
        socket.onmessage = (message) => {
            const data = JSON.parse(message.data);
            if (data && data.status) {
                responseText.textContent = data.status;
            }
        }
        socket.onopen = () => {
            socket.send(JSON.stringify(data));
        }

    }

    socket.send(JSON.stringify(data));
}










/*
function WsClient(url) {
    this.ws = new WebSocket(url);
    this.addEventListener = {};

    this.on = (eventName, cb) => this.addEventListener[eventName] = cb;

    this.emit = (name, data) => {
        let event = {
            event: name,
            data: data
        };
        let rawData = JSON.stringify(event);
        this.ws.send(rawData);
    };

    this.ws.onmessage = (response) => {
        try{
            let data = JSON.parse(response.data);
            if (data){
                let cb = this.addEventListener[data.event];
                if (cb)
                    cb(data.data);

            }
        } catch(e) {
            window.alert(e);
        }
    }
}

var ws = new WsClient('wss://' + window.location.origin.replace(/((http)|(https)):\/\//gm, '') + '/ws');

ws.on('response', (data) => {
    console.log("response:", data);
    let msg = document.createElement('p')
    msg.innerText =data;
    document.body.appendChild(msg);
})

button.onclick = () => {
    ws.emit('message', input.value)
};*/
