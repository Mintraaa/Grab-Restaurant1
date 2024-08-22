import React  from "react";
import notAllowedIng from "../assets/no-entry.png";
import { useState } from "react";

const NotAllowed = () => {
    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
        const  timer = setInterval(()=>{
            NavigationPreloadManager("/");
        }, 10000);   
        
        const countDown =setInterval(() => {
            setCounter((prevCounter) => {
            if(prevCounter <= 1){
                clearInterval(countDown);
                return 0;
            }
                return prevCounter - 1;
            });
            }, 1000);
            return () => {
                clearTimeout(timer);
                clearInterval(countDown);
            };
        },[navigate]);

    return (
        <div className="hero gb-base-100 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md flex justify-center flex-col items-center bg-base-100 w=96 shadow-xl">
                    <figure>
                        <img src= ></img>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl front-bold text-center">
                            Page Not Allowed !!
                        </h2>
                    </div>
                </div>

            </div>

        </div>
    )
}