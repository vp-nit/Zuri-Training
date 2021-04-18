const http = require("http");
const fs = require("fs");

const url = "http://jsonplaceholder.typicode.com/posts"

http.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            fs.writeFile('./Result/post.json', JSON.stringify(json, null, 2), (err)=>{
                if (err) throw err;
                console.log("File written successfully")
            })
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});