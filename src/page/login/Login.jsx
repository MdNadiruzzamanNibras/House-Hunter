import { useState } from "react";
import useUser from "../../Hook/User";


const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useUser()
  console.log(user,"8 user");
    const [userInfo, setUserInfo] = useState({
    
    email: "",
    password: "",
   
    
    });
    const setData = (e) => {
    const { name, value } = e.target;
   
    setUserInfo({ ...userInfo, [name]: value });
    };
     const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userInfo);
    
    const res = await fetch(
      "http://localhost:5000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const data = await res.json();
    console.log(data, "data 34");
       if (res.ok) {
      setUser(data.user)
        localStorage.setItem('token', data.token);
      } else {
        setError(error)
        
      }
    
  };
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center mt-20">
                <div className="w-96">
           <h1 className="text-4xl text-center my-10">Login</h1>
                    <form onSubmit={handleRegister} >
                     
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setData(e)}
              placeholder="Your Email"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">password</span>
            </label>
            <input
              type="password"
              onChange={setData}
              name="password"
              placeholder="Password"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
          
         
             <div className="flex justify-center ">
            <button
              type="submit"
              className="bg-black w-full py-2 rounded-lg text-white mr-10 mt-10"
            >
              Sign Up
            </button>
          </div>
                </form>
                    <p>{ error}</p>
            </div>
            </div>
        </div>
    );
};

export default Login;