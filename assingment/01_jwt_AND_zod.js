/*
- you have to create a middleware for logging the number of erroes on a server 

// JWT
- write the function that takes in a username and the password and returns a JWT token with the 
  username encoded inside an object . should return null if the username is not a valid email or 
  if the password is less then 6 characters try using the zod library here.

- write a function that takes a jwt as input and returns true if the jwt can be decoded (not 
 verified). return false otherwise 
- write a function that takes a jwt as input and returns true if the jwt can be verified
  return true or false otherwise 
  - 
*/
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const  emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(userEmail, password){
    const userEmailResponse = emailSchema.safeParse(userEmail);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!userEmailResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({ userEmail} , jwtPassword);
    return signature;

    
}
function decodeJWT(token){
  const decoded = jwt.decode(token);
  if(decoded){
   return true
  } else {
    return false;
  }
 }
try{
 function varifiedJWT (token){
  const verified = jwt.verify(token, jwtPassword);
  if(verified){
    return true;

  } else {
    return false;
  }
 }
}
catch{ 

}

const ans = signJWT("siddharth@gmail.com" , "a,jt758")
console.log(ans);