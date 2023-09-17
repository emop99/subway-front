'use client';

import Image from "next/image";
import logoImage from "../img/subwayLogo.png";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

export default function HeaderLayout(){
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken, removeAccessToken] = useCookies(['accessToken']);
    const [refreshToken, setRefreshToken, removeRefreshToken] = useCookies(['refreshToken']);

    const authCheck = async () => {
        if (!accessToken.accessToken) {
            setIsLoginLoading(true);
            return false;
        }

        const option: RequestInit = {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken.accessToken,
            },
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/my-info`, option)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("RESPONSE_NOT_OK");
                }
                return response.json();
            })
            .then((data) => {
                setIsLogin(true);
                setIsLoginLoading(true);
            })
            .catch((error) => {
                setIsLoginLoading(true);
                setIsLogin(false);
                console.error(error);
            });
    }

    useEffect(() => {
        authCheck().then(r => {});
    }, [accessToken.accessToken]);

    const logout = () => {
        removeAccessToken('accessToken');
        removeRefreshToken('refreshToken');
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
