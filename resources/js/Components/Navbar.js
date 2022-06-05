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
                <div className="flex items-center">
                    <div className="flex-col hidden md:flex md:space-x-4 md:flex-row">
                        {navList.map(function (value) {
                            return (
                                <Link
                                    href={value.path}
                                    className="text-lg font-semibold"
                                >
                                    {value.name}
                                </Link>
                            );
                        })}
                    </div>
                    {props.auth.user !== null ? (
                        <div>
                            <Link
                                href={route("dashboard")}
                                className="px-4 py-3 ml-4 text-lg font-semibold text-white rounded-full bg-theme-1 hover:bg-opacity-80"
                            >
                                Dashboard
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
