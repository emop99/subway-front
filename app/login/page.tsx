import React from "react";

export default function Login() {
    return <section id="logInPage">
        <h2 className="hidden">로그인 페이지</h2>
        <div className="inner">
            <h3>LOGIN</h3>
            <p>서브웨이 회원으로 로그인하시면 제공하는 다양한 서비스를 이용할 수 있습니다.</p>

            <form action="index.html" id="logIn">
                <div className="textBox">
                    <label htmlFor="id">
                        <span>이메일 아이디</span>
                        <input type="text" placeholder="이메일 아이디 입력" id="id"/>
                    </label>
                    <label htmlFor="pw">
                        <span>비밀번호</span>
                        <input type="password" placeholder="비밀번호 입력" id="pw"/>
                    </label>
                </div>
                <div className="idSave">
                    <input type="checkbox" id="saveCb"/>
                        <label htmlFor="saveCb" >
                            <i className="fa-solid fa-check"></i>
                            <strong>아이디 저장</strong>
                        </label>
                </div>
                <input type="submit" id="btnIn" value="로그인"/>
                    <a href="#;"></a>
            </form>
            <div className="logInMenu">
                <ul>
                    <li><a href="#;">아이디 찾기</a></li>
                    <li><a href="#;">비밀번호 찾기</a></li>
                    <li><a href="#;">회원가입</a></li>
                </ul>
            </div>
        </div>
    </section>
}
