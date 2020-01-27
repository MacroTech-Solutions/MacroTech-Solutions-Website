let params = new URLSearchParams(document.location.search.substring(1));
let myKey = params.get("accessKey");
let result;

loadPage();

async function loadPage() {
    await axios({
        method: 'POST',
        url: 'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/drive',
        headers: {
            'Content-Type': 'application/json',
            'accesskey': myKey
        }
    })
        .then(data => result = data.data)
        .catch(err => console.log(err))
    if(result.data == "Valid Access Code"){
        window.location.href = result.url;
    } else{
        window.location.href = "https://www.macrotechsolutions.us"
    }
}