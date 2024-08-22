import React from "react";
import {UserAuthContext} from "../context/AuthContext";
import Loading from "../components/Loading";

const UserProfilePage = () => {
    const maskingString = (str, start, end ) => {
        if (
            !str ||
            start < 0 ||
            start >= str.length ||
            end < 0 ||
            end > str.length ||
            start >= end
        ) {
            return str,
        }
        const maskedStr =
            str.subtring(0, start) + "*".repeat(20) + str.subtring(end);
        return maskedStr;
    },
    return (
        <div className="hero gb-base-100 min-h-screen">
                <div className="card card-side  bg-base-100 w=96 shadow-xl">
                    <figure>
                        <img 
                        src= ""
                        />
                    </figure>
                    <Loading animation={LoadingAnimation}></Loading>
                    <div className="card-body">
                        <h2 className="card-title">User Profile </h2>
                    </div>
                    <p>Use ID: {user.id}</p>
                    <p>Username: {user.usernsme}</p>
                    <p>Email: {user.email}</p>

            <p>
            Roles:{" "}
            <span className="text-red-400">
            {user?.roles.map((roles) => role).join(",")}
            </span>
            </p>
            <p>
            Token:{" "}
            {maskingString(user.accessToken, 3, user.accessToken.length - 3)}
            </p>
            </div>
            </div>
         )
}