const http=require("http");

const posts=[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }]

const app=http.createServer((req,res)=>{
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World");
    //Accessing url and method
    res.write(req.url,req.method)

    //routing using http module
    if(req.url === "/post")
    { 
        if(req.method === "GET")
        {   
            res.write(JSON.stringify(posts))
        }
        else if(req.method === "POST")
        {
            //logic for post-data
        }
        else if(req.method === "PUT")
        {
            //logic for put-data
        }
        else if(req.method === "DELETE")
        {
            //logic for delete-data
        }

    }


    //The End method causes the Web server to stop processing the script and return the current result. The remaining contents of the file are not processed.
    res.end()
});
const port=3001;
console.log("server running at port",port)
app.listen(port)