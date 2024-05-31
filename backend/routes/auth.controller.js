export const login = (req , res) =>{
    console.log("Login user")
}

export const logout= (req , res) =>{
    console.log("Logout user")
}

export const signup= async (req , res) =>{
    try{
        const {fullname ,username ,password ,confirmpassword} =req.body; 
    }
    catch(error){

    }
}