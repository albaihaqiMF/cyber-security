import Navbar from "@/Components/Navbar";
import React from "react";

export default function Layout({ children, auth }) {
    return (
        <div className="bg-theme-2">
            <Navbar auth={auth}/>
            <div className="container">{children}</div>
        </div>
    );
}
