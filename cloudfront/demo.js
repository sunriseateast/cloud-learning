let cookies={
    "Cookie1": {"value": "value1"},
    "Cookie2": {"value": "value2"},
}
// for (const values of Object.entries(cookies)) {
//     if(values[1].value === "value1"){
//         console.log(values[1].value)
//         break
//     }
// }

let cookie_key=Object.keys(cookies)
for (let index = 0; index < cookie_key.length; index++) {
    let uq_key=cookie_key[index]
    if(cookies[uq_key].value === "value1"){
        console.log("hii")
        break
    }
}

