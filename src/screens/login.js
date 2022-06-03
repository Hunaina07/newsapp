import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMButton from "../component/button";
import SMInput from "../component/input";

function Login(){
    const navigate = useNavigate()
    const loginUser =()=>{
        console.log('User cicked login')
        navigate ('/',{state : {user : true}})
    }
    return <>
    <Box>
      <Box sx = {{padding : 1}}>
          <SMInput label = "Email"/>
      </Box>
      <Box sx = {{padding : 1}}>
          <SMInput label = "Password"/>
      </Box>
      <Box sx = {{padding : 1}}>
         <SMButton onClick={loginUser} label = "Login"/>
      </Box>
    </Box>
    </>

}
export default Login