'use client'

import React, {FormEvent, useState} from "react";

export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    }
    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id.length <= 0) {
            alert('아이디를 입력해주세요.');
            return false;
        }
        if (password.length <= 0) {
            alert('비밀번호를 입력해주세요.');
            return false;
        }

        const option: RequestInit = {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: id,
                password,
            }),
        };
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/login`, option)
            .then((response) => {
                if (response.status === 400) {
                    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
                    throw new Error("USER_NOT_FOUND");
                } else if (!response.ok) {
                    throw new Error("RESPONSE_NOT_OK");
                }
                return response.json();
            })
            .then((data) => {
                document.cookie = `accessToken=${data.accessToken}; max-age=86400; path=/`;
                document.cookie = `refreshToken=${data.refreshToken} ; max-age=86400; path=/`;
                location.href = '/';
            })
            .catch((error) => {
                if (error.message === 'USER_NOT_FOUND') {
                    return;
                }
                alert('로그인에 실패하였습니다.');
                console.error(error);
            });
    }

    return <section id="logInPage">
        <h2 className="hidden">로그인 페이지</h2>
        <div className="inner">
            <h3>LOGIN</h3>
            <p>서브웨이 회원으로 로그인하시면 제공하는 다양한 서비스를 이용할 수 있습니다.</p>

            <form id="logIn" onSubmit={onSubmit}>
                <div className="textBox">
                    <label htmlFor="id">
                        <span>이메일 아이디</span>
                        <input type="text" placeholder="이메일 아이디 입력" id="id" name="id" value={id} onChange={onChangeId}/>
                    </label>
                    <label htmlFor="pw">
                        <span>비밀번호</span>
                        <input type="password" placeholder="비밀번호 입력" id="pw" name="password" value={password} onChange={onChangePw}/>
                    </label>
                </div>
                <div className="idSave">
                    <input type="checkbox" id="saveCb" />
                        <label htmlFor="saveCb" >
                            <i className="fa-solid fa-check"></i>
                            <strong>아이디 저장</strong>
                        </label>
                </div>
                <input type="submit" id="btnIn" value="로그인"/>
            </form>
            <div className="logInMenu">
                <ul>
                    <li><a href="#;">아이디 찾기</a></li>
                    <li><a href="#;">비밀번호 찾기</a></li>
                    <li><a href="/join">회원가입</a></li>
                </ul>
            </div>
        </div>
    </section>
}
