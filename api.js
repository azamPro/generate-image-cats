//

let url='https://api.thecatapi.com/v1/images/search?limit'

// let request = new Request(url, {
//     headers: {
//         'auth': '123456'
//     }
// })
let img = document.getElementById('img')
async function getData(){
    try{

        const response = await fetch(url)
        const data = await response.json()
    
        if(response.ok){
            console.log('response ok')
            console.log(response)
            console.log(data)
            img.src = data[0].url
        }else{
            console.log('response not ok', data.error.message)
        }
    }catch(error){
        console.log('error:',error)
    }
    
}
getData()

let btn = document.getElementById('btn')
btn.addEventListener('click', getData)


