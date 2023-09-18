'use client';

import Image from "next/image";
import logoImage from "../img/subwayLogo.png";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

export default function HeaderLayout(){
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(['accessToken', 'refreshToken']);

    const authCheck = async () => {
        if (!cookies.accessToken) {
            setIsLoginLoading(true);
            return false;
        } else if (location.pathname === '/login') {
            return false;
        }

        const option: RequestInit = {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.accessToken,
            },
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/my-info`, option)
            .then((response) => {
                if (!response.ok && response.status !== 403) {
                    throw new Error("RESPONSE_NOT_OK");
                }
                return response.json();
            })
            .then((data) => {
                if (data.message && data.message.includes('JWT expired')) {
                    const option: RequestInit = {
                        method: 'POST',
                        credentials: 'include',
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            'refreshToken': cookies.refreshToken,
                        }),
                    };
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/refresh`, option)
                        .then((response) => {
                            if (!response.ok) {
                                removeCookies('accessToken');
                                removeCookies('refreshToken');
                                setIsLoginLoading(true);
                                setIsLogin(false);
                                throw new Error("LOGIN_EXPIRED");
                            }
                            return response.json();
                        })
                        .then((data) => {
                            setCookies('accessToken', data.accessToken, { path: '/', maxAge: 86400 });
                            setCookies('refreshToken', data.refreshToken, { path: '/', maxAge: 86400 });
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    setIsLogin(true);
                    setIsLoginLoading(true);
                }
            })
            .catch((error) => {
                setIsLoginLoading(true);
                setIsLogin(false);
                console.error(error);
            });
    }

    useEffect(() => {
        authCheck().then(r => {});
    }, [cookies.accessToken]);

    const logout = () => {
        removeCookies('accessToken');
        removeCookies('refreshToken');
        setIsLogin(false);
    }

    return <header>
        <div className="inner">
            <h1>
                <a href="/"><Image src={logoImage} alt="서브웨이 로고" width={202} height={52}/></a>
            </h1>
            <nav>
                <ul>
                    {isLoginLoading ? isLogin ?
                            <>
                                <li><a href="/" onClick={logout}>로그아웃</a></li>
                            </> :
                            <>
                                <li><a href="/login">로그인</a></li>
                                <li><a href="/join">회원가입</a></li>
                            </> :
                        <></>
                    }
                </ul>
            </nav>
        </div>
    </header>;
}
