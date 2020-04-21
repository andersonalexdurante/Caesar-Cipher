const api = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=8a8706266b76242dc352486870a581af6bcf8d82'
const req = new XMLHttpRequest

req.open('GET', api)
req.responseType = 'json'
req.send()

req.onload = function() {
    var res = req.response

    console.log(res)

    const casas = res.numero_casas
    const cifrado = res.cifrado
    let decifrado = ''
    
    for(let i = 0; i < cifrado.length; i ++){
            
        const ascii = cifrado.charCodeAt(i)
            
        if(ascii >= 65 && ascii <= 90){
            decifrado += String.fromCharCode((ascii - 65 - casas) % 26 + 65)
        }
        else if(ascii >= 97 && ascii <= 122){
            decifrado += String.fromCharCode((ascii - 97 - casas) % 26 + 97)
        }
        
    }
    console.log(decifrado)
}