'use client'

import React, {ReactHTMLElement, useRef, useState} from "react";

type JoinFormProps = {
    setStep: (step: string) => void;
    marketingAgree: boolean;
}
export default function JoinForm({setStep, marketingAgree}: JoinFormProps) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [idDuplication, setIdDuplication] = useState(false);
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordCheckRef = useRef<HTMLInputElement>(null);

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const onChangePwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordCheck(e.target.value);
    };

    const idDuplicationCheck = async () => {
        const option: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/id-check?userId=${id}`, option)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("RESPONSE_NOT_OK");
                }
                return response.json();
            })
            .then((data) => {
                if (data.duplicate) {
                    alert('중복된 아이디입니다.');
                    setIdDuplication(false);
                    return false;
                } else {
                    alert('사용 가능한 아이디입니다.');
                    setIdDuplication(true);
                    return true;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id.length <= 0) {
            alert('아이디를 입력해주세요.');
            idRef.current && idRef.current.focus();
            return false;
        }
        if (!idDuplication) {
            alert('아이디 중복확인을 해주세요.');
            return false;
        }
        if (password.length <= 0) {
            alert('비밀번호를 입력해주세요.');
            passwordRef.current && passwordRef.current.focus();
            return false;
        }
        if (passwordCheck.length <= 0) {
            alert('비밀번호 확인을 입력해주세요.');
            passwordCheckRef.current && passwordCheckRef.current.focus();
            return false;
        }
        if (password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            passwordCheckRef.current && passwordCheckRef.current.focus();
            return false;
        }
        setStep('3');
    }

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
            <h2>STEP.2 정보입력</h2>

            <form id="join" onSubmit={onSubmit}>
                <h3>기본 정보 (필수 입력)</h3>
                <div className="joinText">
                    <div className="joinId">
                        <dl>
                            <dt>아이디(이메일)</dt>
                            <dd>
                                <span>
                                    <input type="text" placeholder="이메일 아이디 입력" value={id} onChange={onChangeId} ref={idRef}/>
                                </span>
                                <div className="idTest">
                                    <a href="#" onClick={idDuplicationCheck}>중복확인</a>
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div className="joinPw">
                        <dl>
                            <dt>비밀번호</dt>
                            <dd>
                                <span>
                                    <input type="password" placeholder="비밀번호 입력" value={password} onChange={onChangePw} ref={passwordRef}/>
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <div className="joinPw2">
                        <dl>
                            <dt>비밀번호 확인</dt>
                            <dd>
                                <span>
                                    <input type="password" placeholder="비밀번호 입력" value={passwordCheck} onChange={onChangePwCheck} ref={passwordCheckRef}/>
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
