'use client';

import React from "react";

type RangeFilterProps = {
    filterName: string;
    minValue: number;
    setMinValue: (value: number) => void;
    maxValue: number;
    setMaxValue: (value: number) => void;
};

export default function RangeFilter({filterName, minValue, setMinValue, maxValue, setMaxValue}: RangeFilterProps) {
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
        const percent = ((Number(minRange.value) - min) / (max - min)) * 100;
        const minRangeSelector = multiRangeSliderEle.querySelector('.thumb.left') as HTMLElement;

        minRangeSelector.style.left = percent + "%";
        range.style.left = percent + "%";
        return Math.min(parseInt(minRange.value), parseInt(maxRange.value) - 1);
    };
    const maxRangeCalc = (event: React.ChangeEvent<HTMLInputElement>) => {
        const multiRangeSliderEle = event.target.closest('.multi-range-slider') as HTMLElement;
        const minRange = multiRangeSliderEle.querySelector('.min_range') as HTMLInputElement;
        const maxRange = multiRangeSliderEle.querySelector('.max_range') as HTMLInputElement;
        const range = multiRangeSliderEle.querySelector('.range') as HTMLElement;
        const [min, max] = [parseInt(maxRange.min), parseInt(maxRange.max)];
        const percent = ((Number(maxRange.value) - min) / (max - min)) * 100;
        const maxRangeSelector = multiRangeSliderEle.querySelector('.thumb.right') as HTMLElement;

        maxRangeSelector.style.right = 100 - percent + "%";
        range.style.right = 100 - percent + "%";
        return Math.max(parseInt(maxRange.value), parseInt(minRange.value) + 1);
    };

    return (
        <>
            <div className="slideBox">
                <div className="middle">
                    <div className="title">
                        <h4>{filterName}</h4>
                    </div>
                    <div className="multi-range-slider">
                        <input type="range" className="min_range" min="0" max="20000" value={minValue} onChange={onMinValueChange}/>
                        <input type="range" className="max_range" min="0" max="20000" value={maxValue} onChange={onMaxValueChange}/>
                        <div className="slider">
                            <div className="track"></div>
                            <div className="range"></div>
                            <div className="thumb left"></div>
                            <div className="thumb right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
