'use client'

import {HomePageAgreeText, MarketingAgreeText, PersonalAgreeText} from "@/component/join/agreeText";
import React, {useRef, useState} from "react";

type AgreeProps = {
    setStep: (step: string) => void;
    marketingAgree: boolean;
    setMarketingAgree: (value: boolean) => void;
}

export default function Agree({setStep, marketingAgree, setMarketingAgree}: AgreeProps) {
    const [allChecked, setAllChecked] = useState(false);
    const [homePageAgree, setHomePageAgree] = useState(false);
    const [personalAgree, setPersonalAgree] = useState(false);
    const homePageAgreeRef = useRef<HTMLInputElement>(null);
    const personalAgreeRef = useRef<HTMLInputElement>(null);

    const onChangeAllAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllChecked(e.target.checked);
        setHomePageAgree(e.target.checked);
        setPersonalAgree(e.target.checked);
        setMarketingAgree(e.target.checked);
    }
    const onChangeHomePageAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checked) {
            setAllChecked(false);
        }
        setHomePageAgree(e.target.checked);
    }
    const onChangePersonalAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checked) {
            setAllChecked(false);
        }
        setPersonalAgree(e.target.checked);
    }
    const onChangeMarketingAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checked) {
            setAllChecked(false);
        }
        setMarketingAgree(e.target.checked);
    }

    const onClickNext = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!homePageAgree) {
            alert('홈페이지 이용약관에 동의해주세요.');
            homePageAgreeRef.current && homePageAgreeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return false;
        }
        if (!personalAgree) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            personalAgreeRef.current && personalAgreeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return false;
        }
        setStep('2');
    }

    return <section id="agreementPage">
        <h3>회원가입</h3>
        <div className="step">
            <ul>
                <li className="on"><i className="fa-solid fa-stamp"></i></li>
                <li><i className="fa-solid fa-user"></i></li>
                <li><i className="fa-solid fa-check"></i></li>
            </ul>
        </div>
        <div className="inner">
            <h2>STEP.1 약관동의</h2>
            <form id="agreement">
                <div className="allAgree">
                    <input type="checkbox" id="allAgreeCb" checked={allChecked} onChange={onChangeAllAgree} tabIndex={1}/>
                    <label htmlFor="allAgreeCb" >
                        <i className="fa-solid fa-check"></i>
                        <strong>약관 전체 동의</strong>
                    </label>
                </div>
                <div className="agreeMain">
                    <div className="agree">
                        <div className="agreeBox" ref={homePageAgreeRef}>
                            <input type="checkbox" id="agreeCb1" checked={homePageAgree} onChange={onChangeHomePageAgree} tabIndex={2}/>
                            <label htmlFor="agreeCb1" >
                                <i className="fa-solid fa-check"></i>
                                <span>(필수)</span>
                                <p>홈페이지 이용약관 동의</p>
                            </label>
                        </div>
                        <div className="agreeText">
                            <HomePageAgreeText/>
                        </div>
                    </div>

                    <div className="agree">
                        <div className="agreeBox" ref={personalAgreeRef}>
                            <input type="checkbox" id="agreeCb2" checked={personalAgree} onChange={onChangePersonalAgree} tabIndex={3}/>
                            <label htmlFor="agreeCb2">
                                <i className="fa-solid fa-check"></i>
                                <span>(필수)</span>
                                <p>개인정보 수집 및 이용동의</p>
                            </label>
                        </div>
                        <div className="agreeText">
                            <PersonalAgreeText/>
                        </div>
                    </div>

                    <div className="agree">
                        <div className="agreeBox">
                            <input type="checkbox" id="agreeCb3" checked={marketingAgree} onChange={onChangeMarketingAgree} tabIndex={4}/>
                            <label htmlFor="agreeCb3" >
                                <i className="fa-solid fa-check"></i>
                                <span>(선택)</span>
                                <p>마케팅 전체 동의</p>
                            </label>
                        </div>
                        <div className="agreeText">
                            <MarketingAgreeText/>
                        </div>
                    </div>
                </div>
                <input type="submit" id="agreeNext" value="다음" onClick={onClickNext}/>
            </form>
        </div>
    </section>
}
