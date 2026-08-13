import { atom } from "recoil"

const authState = atom({
   key: "AuthState",
   default: {
    isLoggedIn: true,
    
   } 
})


export default authState
