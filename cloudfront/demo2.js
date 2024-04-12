function handler(event){
    let request=event.request
    let cookie_key=Object.keys(request.cookies)
    for (let index = 0; index < cookie_key.length; index++) {
        let uq_key=cookie_key[index]
        if(request.cookies[uq_key].value === "old"){
            request={statusCode: 302,statusDescription: 'Found', headers:{"location":{value:"https://d3qnl3fttlc2t6.cloudfront.net/demo.html"}}}
            break
        }  
    }
    return request
}