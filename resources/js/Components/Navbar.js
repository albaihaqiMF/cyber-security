import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar(props) {
    const navList = [
        {
            name: "Home",
            path: route("welcome"),
        },
        {
            name: "Services",
            path: "#",
        },
        {
            name: "Features",
            path: "#",
        },
        {
            name: "Pricing",
            path: "#",
        },
        {
            name: "Tutorials",
            path: "#",
        },
        {
            name: "FAQ",
            path: "#",
        },
    ];
    return (
        <div className="text-white">
            <div className="container flex items-center justify-between py-4">
                <p className="text-2xl font-bold md:text-4xl">
                    Git<span className="text-theme-1">Sec</span>
                </p>
                <div className="flex-col items-center hidden md:flex md:space-x-4 md:flex-row">
                    {navList.map(function (value, i) {
                        return (
                            <Link
                                key={i}
                                href={value.path}
                                className="text-lg font-semibold"
                            >
                                {value.name}
                            </Link>
                        );
                    })}
                    {props.auth.user !== null ? (
                        <Link
                            href={route("dashboard")}
                            className="px-4 py-3 ml-4 text-lg min-w-[42px] font-semibold text-white rounded-full bg-theme-1 hover:bg-opacity-80"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href={route("login")}
                            className="px-4 py-3 ml-4 text-lg min-w-[42px] font-semibold text-white rounded-full bg-theme-1 hover:bg-opacity-80"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
