How Cloudfront Works ?

1.  Cloudfront are use to server the content to users at lowest .cloudfront
    consists of POP(point of presence) called as edge locations and regional e-
    dge caches.
2.  When users try to get content from server at first time,then its request h-
    to the origin and cached at the POP as well as regional Edge Caches.
3.  At secound time if user try to access the same content with same cache key
    cloudfront first look into its POP if its available it server the content if
    content is not available it try to look into regional Edge caches. if content
    is also not available at Edge caches it sends request to the Origin.



Cache Key

1.  Cache key are nothing but the keys on which basis Cloudfront decided to
    store content in cache
2.  By default cache key is form with Distribution domain name and path of url
    but we can mdified cache key called cache key normalization concept by just
    adding headers,cookies,query string into request body leveraging cache key
    policy and origin request policy and cloudfront functions. 
3.  When we add some headers in cache policy it will automatically get added to
    origin policy by default. vice versa is not possible.



Cloudfront Functions

Cloudfront functions are generally use to manipulate the http headers and headers are use for the caching purpose,managing state,auth( Bearer token,
session id...so on)
1.  Cloudfront functions consists of viewer request,viewer response
2.  Viewer request=> When we add headers by using viewer request event by
    by default browser not show custom headers.it will only show haders from
    cloudfront to browser
3.  Viewer response => We can manupuliate resposne body before showing to viewer
    e.g : adding custome header
4.  Url redirect is not possible on viewer response event type
5.  e.g for redirect to another URL
    function handler(event){
        let request=event.request
        request={statusCode: 302,statusDescription: 'Found', headers:{"location":{value:"https://www.google.com/"}}}
        return request
    }
    Here we take event type request.request body is whole object consists of status code (302=redirect to url), description and headers in the form of object with key value pairs.where location is key and value is value