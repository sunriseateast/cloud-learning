// Basic of JS required here objects, iterate through objects, 
// accessing objects values

function handler(event){
    let request=event.request   // here we take request event
    let cookie_key=Object.keys(request.cookies) // as for of is not supported we use general for loop request.cookies contain all cookies
    for (let index = 0; index < cookie_key.length; index++) {
        let uq_key=cookie_key[index]
        if(request.cookies[uq_key].value === "new"){
            request={statusCode: 302,statusDescription: 'Found', headers:{"location":{value:"https://d3qnl3fttlc2t6.cloudfront.net/demo2.html"}}}
            break
        }  
    }
    return request
}