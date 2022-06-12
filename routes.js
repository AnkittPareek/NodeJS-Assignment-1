const reqHandler = (req, res)=>{
const url = req.url;
const method = req.method;

if(url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write("<form action='/create-user'  method='POST'><input type='text' name='username'></input><button type='submit'>username</button></form>")
    // res.write('<form action="/create-user" method="POST"><input type="text" name="message"></input><button type="submit">clickMe</button></form>') 
    res.end()
}
if(url === '/users'){
    res.setHeader('Content-Type', 'text/html')
    res.write("<ul><li>user 1</li></ul>")
     res.end()
}
if(url === '/create-user' && method=== 'POST') {
    

    const body = [];
    req.on('data', chunk=>{
        console.log(chunk)
        body.push(chunk)
    })

    req.on("end", ()=>{
        const parsedbody = Buffer.concat(body).toString()
        const message = parsedbody.split('=')[1]
        console.log(message)
    })


    console.log(body)
    res.setHeader('Content-Type', 'text/html')
    res.write("success")
    res.end()}
}

module.exports = reqHandler; 