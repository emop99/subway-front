import Image from "next/image";
import logoImage from "../img/subwayLogo.png";

export default function HeaderLayout(){
    return <header>
        <div className="inner">
            <h1>
                <a href="/"><Image src={logoImage} alt="서브웨이 로고" width={202} height={52}/></a>
            </h1>
            <nav>
                <ul>
                    <li><a href="/login">로그인</a></li>
                    <li><a href="/join">회원가입</a></li>
                </ul>
            </nav>
        </div>
    </header>;
}
