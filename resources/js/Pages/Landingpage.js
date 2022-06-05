import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";
import Animation from "@/Assets/Images/animasi.png";
import Features from "@/Partials/Features";

export default function Landingpage(props) {
    return (
        <Layout auth={props.auth}>
            <Head title="Welcome" />
            <div className="flex flex-col w-full py-4 md:flex-row xl:py-0 md:h-[90vh]">
                <div className="flex flex-col items-start justify-center w-full space-y-4 text-white md:w-1/2 md:pr-4">
                    <p className="font-semibold textlg md:text-2xl">
                        KILLBOT FOR YOUR ENTIRE DIGITAL ECOSYSTEM
                    </p>
                    <p className="text-2xl font-semibold text-justify md:text-4xl">
                        Protect and accelerate your websites and apps
                    </p>
                    <p className="w-1/2 mb-6 text-base text-justify md:text-lg">
                        Magang Kerja menjembatani teman-teman mahasiswa dan
                        pencari kerja dengan mitra perusahaan yang menanti Anda
                        untuk menjadi bagian dari perusahaan mereka
                    </p>
                    <Link
                        href={route("register")}
                        className="px-4 py-3 font-semibold text-white rounded-full bg-theme-1"
                    >
                        Create An Account
                    </Link>
                </div>
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <img
                        src={Animation}
                        alt="Cyber Security"
                        className="h-full md:h-auto md:w-3/4"
                    />
                </div>
            </div>
            <Features />
        </Layout>
    );
}
