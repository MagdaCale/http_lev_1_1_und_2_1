import http from 'http'
import fs from 'fs'


const sendFile =(path, response)=>{
    fs.readFile(path, (err, data) => {
        if(err){
            response.end('HAJwbdfwbefhebfwaefkea')
            return
        }else{
            response.end(data.toString())
        } 
    })
}

const server = http.createServer((req, res)=>{
    console.log('Neuer Request:', req.method, req.url)

    if(req.url === '/index.html' || req.url === '/'){
        sendFile('./assets/index.html', res)
    }else {
        const filePath = './assets' + req.url
        sendFile(filePath, res)
    }

    if (req.url == '/about.html'){
        sendFile('./assets'+ req.url, res)
    }
    else if (req.url == '/contact.html'){
        sendFile('./assets'+ req.url, res)
    }
    else if (req.url == '/faq.html'){
        sendFile('./assets'+ req.url, res)
    }
})

server.listen(9898, () => console.log('Sertver runs on Port 9898'))