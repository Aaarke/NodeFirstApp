
const serverRequestHandler=(req,res)=>{
    const url= req.url;
    const method=req.method;
    if(url=='/'){
            res.write('<html>');
            res.write('<head><title>Hi</title></head>');
            res.write('<body>Hello from fuber</body>');
            res.write('<form action="/create-user" method="POST"><label for="username">Username:</label><br><input type="text" id="username" name="username"><br><input type="submit" value="Submit"></form> ')
            res.write('</html>');
            return res.end();

    }else if(url=='/users'){
        res.write('<html>');
        res.write('<head><title>Hi</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('<li>User 5</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(url=='/create-user'&&method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsed=Buffer.concat(body).toString();
            console.log(parsed);
        });
    }
};

module.exports=serverRequestHandler;