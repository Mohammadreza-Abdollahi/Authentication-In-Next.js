'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (prevState , formData)=>{
    const phone = formData.get("phone");
    const password = formData.get("password");
    const remember = formData.get("remember") == "on" ? 1 : 0;
    const res = await fetch("https://ecomadminapi.azhadev.ir/api/auth/login",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({phone , password , remember})
    });
    if(res.status == 200){
        const response = await res.json();
        const token = response.token;
        (await cookies()).set("loginToken",token)
        redirect('/userpanel')
    }else{
        const response = await res.json();
        return {message: response.message , success: false}
    }
};