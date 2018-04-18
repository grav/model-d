if(!navigator.requestMIDIAccess){
    alert('This app needs Google Chrome (WebMIDI) to work!')
}

var ma;
var out;

let multitrigger_off=[0xf0, 0x00, 0x20, 0x32, 0x00, 0x7f, 0x0a, 0x02, 0x00, 0x00, 0xf7];
let multitrigger_on=[0xf0, 0x00, 0x20, 0x32, 0x00, 0x7f, 0x0a, 0x02, 0x00, 0x01, 0xf7];

function initMA(f){
    navigator.requestMIDIAccess({sysex: true}).then(
        ma_ => {
            ma=ma_;
            var outs = [];
            ma.outputs.forEach(x=>outs.push(x))
            out = outs.filter(o=>o.name==="MODEL D")[0];
            if(!out){
                alert("Couldn't find midi device 'MODEL D'?")
                return;
            }
            if (f) {
                f();
            }
        }
    )
}


function send(msg){
    if (out===undefined){
        initMA(_=>{        
            out.send(msg);
        })
    } else {
        out.send(msg);
    }
}

function priority(k){
    console.log("priority",k)
    send([0xF0, 0x00, 0x20, 0x32, 0x00, 0x7F, 0x0A, 0x01, 0x00, k, 0xF7])
}

function modulationCurve(k){
    console.log("modulation curve",k)
    send([0xF0, 0x00, 0x20, 0x32, 0x00, 0x7F, 0x0A, 0x0B, 0x00, 0x01, 0xF7])
}

function pitchbend(n){
    console.log("pitchbend",n)
    send([0xF0, 0x00, 0x20, 0x32, 0x00, 0x7F, 0x0A, 0x03, 0x00, n, 0xF7])
}

function midichannel(n){
    console.log("midichannel",n)
    send([0xF0, 0x00, 0x20, 0x32, 0x00, 0x7F, 0x0A, 0x00, 0x00, (n-1), 0xF7])
}

function sliderChangedFn(fn,eid){
    return e => {
        document.getElementById(eid).innerHTML=e.value;
        fn(parseInt(e.value))
    }
}
