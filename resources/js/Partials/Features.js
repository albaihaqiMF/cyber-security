import React from "react";
import Shield from "@/Assets/Images/Shield.png";
export default function Features() {
    const features = [
        {
            icon: Shield,
            title: "Cloud Security",
            description:
                "Keeping your cloud secure is a constantly evolving challenge that legacy security tools are",
        },
        {
            icon: Shield,
            title: "Cloud Security",
            description:
                "Keeping your cloud secure is a constantly evolving challenge that legacy security tools are",
        },
        {
            icon: Shield,
            title: "Cloud Security",
            description:
                "Keeping your cloud secure is a constantly evolving challenge that legacy security tools are",
        },
    ];
    return (
        <div className="py-4">
            <div className="w-full">
                <h1 className="mb-4 text-2xl font-semibold text-center text-white md:text-4xl">
                    Featured Service and Solutions
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                {features.map((value, i) => {
                    return (
                        <div
                            className="p-6 mx-3 space-y-3 text-center md:text-left col-span-full md:col-span-4 bg-theme-5"
                            key={i}
                        >
                            <img
                                src={value.icon}
                                alt={value.title}
                                className="h-8 mx-auto md:h-12 md:mx-0"
                            />
                            <h3 className="text-lg font-semibold text-white">
                                {value.title}
                            </h3>
                            <p className="text-justify text-white md:text-left">
                                {value.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
