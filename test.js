fetch('https://mocki.io/v1/65dd5a2c-3400-440e-bae1-d6e35a1573d3', {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(async (res)=> {
        try {
            let data = await res.json();
            console.log("Data: "+JSON.stringify(data));
            return data;
        } catch (e) {
            console.log(e);
            return {};
        }
    })
    .then((text)=>{
        console.log(text);
    })
    .catch((err)=> console.log(err));

