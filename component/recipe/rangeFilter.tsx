'use client';

import React from "react";

type RangeFilterProps = {
    filterName: string;
    minValue: number;
    setMinValue: (value: number) => void;
    maxValue: number;
    setMaxValue: (value: number) => void;
    maximumValue: number;
};

export default function RangeFilter({filterName, minValue, setMinValue, maxValue, setMaxValue, maximumValue}: RangeFilterProps) {
    const onMinValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(minRangeCalc(event));
    };
    const onMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(maxRangeCalc(event));
    };

    const minRangeCalc = (event: React.ChangeEvent<HTMLInputElement>) => {
        const multiRangeSliderEle = event.target.closest('.multi-range-slider') as HTMLElement;
        const minRange = multiRangeSliderEle.querySelector('.min_range') as HTMLInputElement;
        const maxRange = multiRangeSliderEle.querySelector('.max_range') as HTMLInputElement;
        const range = multiRangeSliderEle.querySelector('.range') as HTMLElement;
        const [min, max] = [parseInt(minRange.min), parseInt(minRange.max)];
        const minPercent = ((Number(minRange.value) - min) / (max - min)) * 100;
        const maxPercent = ((Number(maxRange.value) - min) / (max - min)) * 100;
        const minRangeSelector = multiRangeSliderEle.querySelector('.thumb.left') as HTMLElement;

        minRangeSelector.style.left = (minPercent >= maxPercent ? maxPercent : minPercent) + "%";
        range.style.left = (minPercent >= maxPercent ? maxPercent : minPercent) + "%";

        return filterName === '가격'
            ? Math.floor(Math.min(parseInt(minRange.value), parseInt(maxRange.value) - 1)/100) * 100
            : Math.min(parseInt(minRange.value), parseInt(maxRange.value) - 1);
    };
    const maxRangeCalc = (event: React.ChangeEvent<HTMLInputElement>) => {
        const multiRangeSliderEle = event.target.closest('.multi-range-slider') as HTMLElement;
        const minRange = multiRangeSliderEle.querySelector('.min_range') as HTMLInputElement;
        const maxRange = multiRangeSliderEle.querySelector('.max_range') as HTMLInputElement;
        const range = multiRangeSliderEle.querySelector('.range') as HTMLElement;
        const [min, max] = [parseInt(maxRange.min), parseInt(maxRange.max)];
        const minPercent = ((Number(minRange.value) - min) / (max - min)) * 100;
        const maxPercent = ((Number(maxRange.value) - min) / (max - min)) * 100;
        const maxRangeSelector = multiRangeSliderEle.querySelector('.thumb.right') as HTMLElement;

        maxRangeSelector.style.right = 100 - (minPercent < maxPercent ? maxPercent : minPercent) + "%";
        range.style.right = 100 - (minPercent < maxPercent ? maxPercent : minPercent) + "%";
        return filterName === '가격'
            ? Math.floor(Math.max(parseInt(maxRange.value), parseInt(minRange.value) + 1) / 100) * 100
            : Math.max(parseInt(maxRange.value), parseInt(minRange.value) + 1);
    };

    return (
        <>
            <div className="slideBox">
                <div className="middle">
                    <h2>{filterName}</h2>
                    <div className="multi-range-slider">
                        <input type="range" className="min_range" min="0" max={maximumValue} value={minValue} onChange={onMinValueChange}/>
                        <input type="range" className="max_range" min="0" max={maximumValue} value={maxValue} onChange={onMaxValueChange}/>
                        <div className="slider">
                            <div className="track"></div>
                            <div className="range"></div>
                            <div className="thumb left"></div>
                            <div className="thumb right"></div>
                        </div>
                    </div>
                    <div className="valueBox">
                        <p>최솟값 : <span className="minValue">{minValue}</span></p>
                        <p>최댓값 : <span className="maxValue">{maxValue}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
