'use client'

import HeaderLayout from "@/component/headerLayout";
import FooterLayout from "@/component/footerLayout";
import {CookiesProvider} from "react-cookie";
import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return <>
        <CookiesProvider>
            <HeaderLayout/>
            {children}
            <FooterLayout/>
        </CookiesProvider>
    </>;
}
