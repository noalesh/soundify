import React from "react";
import { Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { StationIndex } from "./pages/StationIndex.jsx";
import { SongDetails } from "./pages/SongDetails";
import { UserDetails } from "./pages/UserDetails";
import { AppHeader } from "./cmps/AppHeader";
import { AppFooter } from "./cmps/AppFooter.jsx";
import { UserMsg } from "./cmps/UserMsg.jsx";
import { LoginSignup } from "./pages/LoginSignup.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";

export function RootCmp() {
    return (
        <div className="main-container">
            <UserMsg />
            
            <main>
                <Routes>
                    <Route path="" element={<StationIndex />} >
                        <Route path="home" element={<HomePage />} />
                        {/* <Route path="station/:id" element{<StationDetails />} */}
                        <Route path="song/:songId" element={<SongDetails />} />
                        <Route path="user/:id" element={<UserDetails />} /> 
                    </Route>
                    <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}
