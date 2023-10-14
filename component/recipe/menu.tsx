'use client';

import React from "react";

type MenuProps = {
    searchMenu: string;
    setSearchMenu: (value: string) => void;
};

export default function Menu({searchMenu, setSearchMenu}: MenuProps) {
    const MENU_LIST = [
        '스파이시 바비큐',
        '스파이시 쉬림프',
        '스파이시 이탈리안',
        '스테이크 & 치즈',
        '치킨 베이컨 아보카도',
        '쉬림프',
        '로스트 치킨',
        '로티세리 바비큐 치킨',
        'K-바비큐',
        '풀드 포크 바비큐',
        '서브웨이 클럽',
        '치킨 데리야끼',
        '이탈리안 비엠티',
        '비엘티',
        '치킨 슬라이스',
        '참치',
        '햄',
        '에그마요',
        '베지',
    ];

    const onSearchMenuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchMenu(event.target.value);
    };

    return (
        <>
            <tr>
                <th scope="row">메뉴</th>
                <td>
                    {MENU_LIST.map((value, index) => (
                        <div key={index}>
                            <label htmlFor={'menu' + index}>{value}</label>
                            <input id={'menu' + index} type="radio" name="메뉴" value={index+1}
                                   onChange={onSearchMenuChange}
                                   defaultChecked={searchMenu === index + 1 + ''}
                                   ref={input => {
                                       if (input && searchMenu === index + 1 + '') input.checked = true;
                                   }}/>
                        </div>
                    ))}
                </td>
            </tr>
        </>
    );
}
