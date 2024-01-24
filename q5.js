/** Q5. You're creatin, a ba'ic lo,in 'y'tem. Make a lo,in function with two thin,': a u'ername and a 
pa''word. Check if the u'ername i' "admin" and the pa''word i' "12375". If they're both correct, 'how "Lo,in 
'ucce''ful"; if not, 'how "Invalid credential'."*/

let password="12345"
let username="admin"

let input_password="12345"
let input_username="admin"

if(password==input_password && username==input_username){
    console.log("Login successfully")
}
else{
    console.log("invalid credential")
}