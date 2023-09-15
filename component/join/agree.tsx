import {HomePageAgreeText, MarketingAgreeText, PersonalAgreeText} from "@/component/join/agreeText";
import React from "react";

export default function Agree() {
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
            <h2>STAP.1 약관동의</h2>
            <form action="join.html" id="agreement">
                <div className="allAgree">
                    <input type="checkbox" id="allAgreeCb"/>
                    <label htmlFor="allAgreeCb" >
                        <i className="fa-solid fa-check"></i>
                        <strong>약관 전체 동의</strong>
                    </label>
                </div>
                <div className="agreeMain">
                    <div className="agree">
                        <div className="agreeBox">
                            <input type="checkbox" id="agreeCb1"/>
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
                        <div className="agreeBox">
                            <input type="checkbox" id="agreeCb2"/>
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
                            <input type="checkbox" id="agreeCb3"/>
                            <label htmlFor="agreeCb3" >
                                <i className="fa-solid fa-check"></i>
                                <span>(선택)</span>
                                <p>마케팅 전체 동의</p>
                            </label>
                        </div>
                        <div className="agreeText">
                            <MarketingAgreeText/>
                        </div>
                        <div className="agreeSmsCheck">
                            <ul>
                                <li>
                                    <input type="checkbox" id="smsCb1"/>
                                    <label htmlFor="smsCb1" >
                                        <i className="fa-solid fa-check"></i>
                                        <p>SMS/LMS/MMS 수신 동의</p>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="smsCb2"/>
                                    <label htmlFor="smsCb2" >
                                        <i className="fa-solid fa-check"></i>
                                        <p>E-mail 수신 동의</p>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="smsCb3"/>
                                    <label htmlFor="smsCb3" >
                                        <i className="fa-solid fa-check"></i>
                                        <p>알림톡 수신 동의</p>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <input type="submit" id="agreeNext" value="다음"/>
            </form>
        </div>
    </section>
}
