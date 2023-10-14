'use client';

import React, {useState} from "react";
import Menu from "@/component/recipe/menu";
import Unfavorable from "@/component/recipe/unfavorable";
import OrderBy from "@/component/recipe/orderBy";
import RangeFilter from "@/component/recipe/rangeFilter";

type searchParams = {
    sortOption: string,
    sortDirection: string,
    pageNum: string,
    pageSize: string,
    sandwichBaseId: string,
    memberId: string,
    isWithOutCucumber: string,
    maxKcal: string,
    minKcal: string,
    maxPrice: string,
    minPrice: string,
    maxFat: string,
    minFat: string,
    maxProtein: string,
    minProtein: string,
};

export default function Home() {
    const [searchMenu, setSearchMenu] = useState('1');

    const [unfavorable, setUnfavorable] = useState(new Set<string>());

    const [minPrice, setMinPrice] = useState(5000);
    const [maxPrice, setMaxPrice] = useState(15000);
    const [minKcal, setMinKcal] = useState(500);
    const [maxKcal, setMaxKcal] = useState(1500);
    const [minProtein, setMinProtein] = useState(0);
    const [maxProtein, setMaxProtein] = useState(100);
    const [minFat, setMinFat] = useState(0);
    const [maxFat, setMaxFat] = useState(100);

    const [orderBySearchType, setOrderBySearchType] = useState('');
    const [orderByType, setOrderByType] = useState('asc');

    const onSearch = () => {
        const searchParams: searchParams = {
            sortOption: orderBySearchType,
            sortDirection: orderByType,
            pageNum: String(1),
            pageSize: String(10),
            sandwichBaseId: searchMenu,
            memberId: String(1),
            isWithOutCucumber: unfavorable.has('cucumber') ? 'true' : 'false',
            maxKcal: String(maxKcal),
            minKcal: String(minKcal),
            maxPrice: String(maxPrice),
            minPrice: String(minPrice),
            maxFat: String(maxFat),
            minFat: String(minFat),
            maxProtein: String(maxProtein),
            minProtein: String(minProtein),
        };
        const queryString = new URLSearchParams(searchParams).toString();
    };

    return (
        <>
            <section className="search">
                <h1>검색 조건을 선택해주세요.</h1>
                <div className="inner">
                    <table>
                        <caption className="hidden">검색을 위한 조건 테이블</caption>
                        <thead>
                        <Menu searchMenu={searchMenu} setSearchMenu={setSearchMenu}/>
                        <Unfavorable unfavorable={unfavorable} setUnfavorable={setUnfavorable}/>
                        </thead>
                    </table>
                    <RangeFilter filterName="가격" minValue={minPrice} setMinValue={setMinPrice}
                                 maxValue={maxPrice} setMaxValue={setMaxPrice}/>
                    <RangeFilter filterName="칼로리" minValue={minKcal} setMinValue={setMinKcal}
                                 maxValue={maxKcal} setMaxValue={setMaxKcal}/>
                    <RangeFilter filterName="단백질" minValue={minProtein} setMinValue={setMinProtein}
                                 maxValue={maxProtein} setMaxValue={setMaxProtein}/>
                    <RangeFilter filterName="지방" minValue={minFat} setMinValue={setMinFat}
                                 maxValue={maxFat} setMaxValue={setMaxFat}/>
                    <OrderBy orderBySearchType={orderBySearchType} orderByType={orderByType}
                             setOrderBySearchType={setOrderBySearchType} setOrderByType={setOrderByType}/>
                    <button type={"button"} onClick={onSearch}>검색</button>
                </div>
            </section>
        </>
    )
}
