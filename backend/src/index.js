import app from "./server/app";

function init(){
    const server = app.listen(app.get("port"), ()=>{
        console.log(`Server running on port: ${server.address().port}`);
    });
}


init();
