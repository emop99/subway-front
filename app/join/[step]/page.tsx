import React from "react";
import Script from "next/script";
import JoinForm from "@/component/join/joinForm";
import JoinResult from "@/component/join/joinResult";
import Agree from "@/component/join/agree";

export default function Page({ params }: { params: { step: string } }) {
    return <>
        <Script src='https://kit.fontawesome.com/220fae79fc.js'/>
        {params.step === '2' ? (<JoinForm/>) :
            params.step === '3' ? (<JoinResult/>) :
                (<Agree/>)}
    </>;
}
