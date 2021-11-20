import { useEffect, useState } from "react";
import helloService from "../services/helloService";


//function - arrow function
//function Hello() - normal function "stateless"
//react - reactive
const Hello = () =>{

    //function hooks
    const [hello, setHello] = useState("walang api... pasensya ka na god bless") //initial value

    //hooks
    useEffect(() => {
        helloService.getHello() //promise
        .then(
        response => {
            setHello(response.data);
        }
        )
        .catch(
            err => {
                console.log("something went wrong")
            }
        )
    }
    )
    return hello;
}

export default Hello;