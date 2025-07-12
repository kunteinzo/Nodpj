fetch('http://107.172.111.158:8000/api', {method: 'POST', headers: {'Content-Type': 'application/json'}})
    .then(async (res)=> {
        try {
            let data = await res.text();
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

