import { FormState } from "../../pages/LoginPage";
import api from "../../utils/api";

export const submitUserForm = async (userData:FormState) => {
    try {
        const data = {email: userData.email , password: userData.password, name: userData.name}
       const res = await api.post("/user",data);
    } catch (error) {
        console.log("Error while posting")
    }
} 