

var database = []

function run(){
    var charectersbool = false,dotbool = true, Adotbool = false, lastspecialbool = true, combool = false, lengthbool = true, spacebool = true, existance = true, Alengthbool = true, Astartbool = true, userlengthbool = false, passwordbool = false
    var alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    var num = "1234567890".split("")
    const tlds = [".com", ".in", ".org", ".net", ".edu", ".gov", ".mil", ".int", ".info", ".biz", ".pro", ".name", ".coop", ".mobi", ".asia", ".eu", ".aero", ".cat", ".jobs", ".tel", ".travel"];
    // var str = "naveen@gmai.com"
    var str = document.getElementById("email").value.toLowerCase()
    
    // storage
    database.some((i)=> i == str) ? existance = false : ""
    // str
    // str[0] == "@" ? Astartbool = false : ""
    var Acounting = 0
    for(let i = 0; i < str.length; i++){
        str[i] == "@" ? Acounting++ : ""
        Acounting > 1 ? Alengthbool = false : ""
        if(str[i] == "."){
            if(str[i+1] == "." || str[i+1] == "@"){
                dotbool = false
            }
        }
    }
    
    str.length >= 64 ? lengthbool = false : ""
    
    
    // username
    username = str.split("@")[0]
    for(let i = 0; i < username.length; i++){
        username[i] == " " ? spacebool = false : ""
        
        for(let j = 0; j < alpha.length; j++){
            if(username[i] == alpha[j] || username[i] == num[j]){
                charectersbool = true
            }
        }
    }
    username.length >= 6 ? userlengthbool  = true : ""
    Astartbool = alpha.some((i)=> i == username[0]) || num.some((i)=> i == username[0] || username[0] == ".")
    
    // doamin
    var domain = str.split('@')[1]
    if(domain != null){
        for(let i = 0; i < alpha.length; i++){
            domain[0] == alpha[i] ? Adotbool = true : ""
        
        }
        
        lastspecialbool = alpha.some((i)=> i == domain[domain.length-1])
        
        for(let i = 0; i < domain.length; i++){
            if(domain[i] == "."){
                var com = domain.split("").slice(i).join("")
                combool = tlds.some((i)=> i == com)
                domain[0] == "." ? Adotbool = false : ""
                
            }
        }
        console.log(domain)
    }
    var para = document.getElementById("para")
    
    // document.getElementById("password").value == document.getElementById("password1").value != "" ? passwordbool = true : ""
    
    if(charectersbool && userlengthbool && spacebool && Alengthbool && Astartbool && lengthbool && lastspecialbool && combool && Adotbool && dotbool){
        console.log("true")
        para.innerText = "valid email"
        para.style.color = "green"
        // alert("valid")
        database.push(str)
    }else{
        console.log("false")
        para.style.color = "red"
        // alert("invalid")
    }    
    if(Alengthbool == false){
        para.innerText = "email should have only '@'"
        return
    }
    if(charectersbool == false){
        para.innerText = "charecters invalid"
        return 
    }
    if(userlengthbool == false){
        para.innerText = "usename should contain at least 6 charecters"
        return
    }
    if(Astartbool == false){
        para.innerText = "email should not start with '" + str[0] + "'" 
        return
    }
    if(spacebool == false){
        para.innerText = "username should not contain any spaces"
        return
    }
    if(Adotbool == false){
        para.innerText = "domain name should have at least one charecter"
        return 
    }
    if(lengthbool == false){
        para.innerText = "email should be within 64 charecters only"
        return
    }
    if(combool == false){
        para.innerText = "incorrect TLD domian name"
        return
    }
    if(lastspecialbool == false){
        para.innerText = "email should not end with '" + str[str.length-1] + "'"
        return
    }
    if(dotbool == false){
        para.innerText = "email sould not contain two adjacent '.' s"
        return
    }

    // if(passwordbool && charectersbool && userlengthbool && spacebool && Alengthbool && Astartbool && lengthbool && lastspecialbool && combool && Adotbool && existance){
    //     window.location.reload()
    // }

}

// pls pull

// var storage = []
// console.log(storage)
// function run(){
//     var str = document.getElementById("email").value.toLowerCase()
//     useraname = str.split("@")[0]
//     str = str.split("")
//     console.log(useraname,str)
//     var alpha = "abcdefghijklmnopqrstuvwxyz".split("")
//     var num = "1234567890".split("")
//     var mainbool = true
//     var alphabool = false, numbool = false, Abool = false, Adotbool = true, dotbool = false, combool = false, legthbool = true, spacebool = true, existance = false, Alength = true



    
//     const tlds = [".com", ".org", ".net", ".edu", ".gov", ".mil", ".int", ".info", ".biz", ".pro", ".name", ".coop", ".mobi", ".asia", ".eu", ".aero", ".cat", ".jobs", ".tel", ".travel"];
    
//     var Acounting = 0
//     existance = storage.some((i)=>i==str.join(""))
//     // console.log(storage,existance)
//     for(let i = 0; i < str.length; i++){
//         if(str[i]==" "){
//             spacebool = false
//             mainbool = false
//         }
//         if(str[i]=="@"){
//             Abool = true
//             if(str[i+1]=="."){
//                 Adotbool = false
//             }
//             Acounting++
    
//             if(Acounting>1){
//                 Alength = false
//             }
            
//         }
//         if(str[i]=="."){
//             dotbool = true
//             let com = str.slice(i).join("")
//             combool = tlds.some((i)=> i==com)
            
//             if(str[i+1]=="." || str[i+1]=="@"){
//                 dotbool = false
//             }
            
//         }
//         for(let j = 0; j < alpha.length; j++){
//             if(useraname[i]==alpha[j]){
//                 alphabool = true
//             }
            
//         }
//         for(let j = 0; j < num.length; j++){
            
//             if(useraname[i]==num[j]){
//                numbool = true
//             }
            
//         }
    
//     }
    
//     if(str[str.length-1] == "."){
//         dotbool = false
        
//     }
//     if(str[str.length-1] == "@" || str[0]=="@"){
//         Abool = false
        
//     }
//     if(str.lenght>64){
//         legthbool = false
//     }
//     if(alphabool && numbool && Abool && dotbool && combool && legthbool && spacebool && existance == false && Adotbool){
//         alert("valid")
//         console.log("valid")
//         storage.push(str.join(""))
//     }else{
//         alert("invalid")
//         console.log("invalid")
//     }
//     if(mainbool){
//         alert("valid")
//         console.log("valid")
//         storage.push(str.join(""))
//         document.getElementById("para").innerText = "valid mail"
//     }else{
//         alert("invalid")
//     }
// }



// console.log(str)