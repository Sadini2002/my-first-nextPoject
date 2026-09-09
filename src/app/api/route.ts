export function GET(){
    console.log("GET request received");
    return new Response("Hello from the GET request!");
}