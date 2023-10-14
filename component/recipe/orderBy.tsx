'use client';

import React from "react";

type OrderByProps = {
    orderBySearchType: string;
    setOrderBySearchType: (value: string) => void;
    orderByType: string;
    setOrderByType: (value: string) => void;
};

export default function OrderBy({orderBySearchType, setOrderBySearchType, orderByType, setOrderByType}: OrderByProps) {
    const onOrderBySearchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrderBySearchType(event.target.value);
    };
    const onOrderByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrderByType(event.target.value);
    };

    return (
        <>
            <div className="drop">
                <div className="dropBox">
                    <select className="form-select" onChange={onOrderBySearchChange} value={orderBySearchType}>
                        <option value="">정렬</option>
                        <option value="new">최신순</option>
                        <option value="price">가격순</option>
                        <option value="recommended">추천순</option>
                        <option value="kacl">칼로리순</option>
                        <option value="protein">단백질순</option>
                        <option value="fat">지방순</option>
                    </select>
                </div>
                <div className="sortOption">
                    <div>
                        <label htmlFor="orderByAsc">오름차 순</label>
                        <input id="orderByAsc" type="radio" name="orderBy" value="asc"
                               onChange={onOrderByChange} defaultChecked={true}
                               ref={input => {
                                   if (input) input.checked = true;
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="orderByDesc">내림차 순</label>
                        <input id="orderByDesc" type="radio" name="orderBy" value="desc" onChange={onOrderByChange}/>
                    </div>
                </div>
            </div>
        </>
    )
}
