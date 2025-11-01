import { atom } from "recoil"

const authState = atom({
   key: "AuthState",
   default: {
    isLoggedIn: false,
    
   } 
})


export default authState