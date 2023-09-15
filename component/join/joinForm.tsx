import React from "react";

export default function JoinForm() {
    return <section id="joinPage">
        <h3>회원가입</h3>
        <div className="step">
            <ul>
                <li><i className="fa-solid fa-stamp"></i></li>
                <li className="on"><i className="fa-solid fa-user"></i></li>
                <li><i className="fa-solid fa-check"></i></li>
            </ul>
        </div>
        <div className="inner">
            <h2>STAP.2 정보입력</h2>

            <form action="result.html" id="join">
                <h3>기본 정보 (필수 입력)</h3>
                <div className="joinText">
                    <div className="joinId">
                        <dl>
                            <dt>아이디(이메일)</dt>
                            <dd>
                                <span>
                                    <input type="text" placeholder="이메일 아이디 입력"/>
                                </span>
                                @
                                <span>
                                    <input type="text" placeholder="이메일 도메인 입력"/>
                                </span>
                                <span>
                                    <select name="joinIdSelect" id="joinIdSelect">
                                        <option value="직접입력">직접입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="daum.net">daum.net</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="icloud.com">icloud.com</option>
                                    </select>
                                </span>
                                <div className="idTest">
                                    <a href="#">중복확인</a>
                                </div>
                            </dd>
                        </dl>
                    </div>

                    <div className="joinPw">
                        <dl>
                            <dt>비밀번호</dt>
                            <dd>
                                <span>
                                    <input type="text" placeholder="비밀번호 입력"/>
                                </span>
                            </dd>
                        </dl>
                    </div>

                    <div className="joinPw2">
                        <dl>
                            <dt>비밀번호 확인</dt>
                            <dd>
                                <span>
                                    <input type="text" placeholder="비밀번호 입력"/>
                                </span>
                            </dd>
                        </dl>
                    </div>
                </div>
                <input type="submit" id="joinNext" value="회원가입 완료"/>
            </form>
        </div>
    </section>
}
