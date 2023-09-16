'use client'

import React, {useEffect, useState} from "react";
import Script from "next/script";
import JoinForm from "@/component/join/joinForm";
import JoinResult from "@/component/join/joinResult";
import Agree from "@/component/join/agree";

export default function Page() {
    const [step, setStep] = useState('1');
    const [marketingAgree, setMarketingAgree] = useState(false);

    const onChangeStep = (step: string): void => {
        setStep(step);
    }
    const onChangeMarketingAgree = (value: boolean) => {
        setMarketingAgree(value);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    return <>
        <Script src={'https://kit.fontawesome.com/220fae79fc.js'}/>
        {step === '2' ? (<JoinForm setStep={onChangeStep} marketingAgree={marketingAgree}/>) :
            step === '3' ? (<JoinResult/>) :
                (<Agree setStep={onChangeStep} marketingAgree={marketingAgree} setMarketingAgree={onChangeMarketingAgree}/>)}
    </>;
}
