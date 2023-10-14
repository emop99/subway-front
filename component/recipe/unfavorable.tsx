'use client';

import React from "react";

type UnfavorableProps = {
    unfavorable: Set<string>;
    setUnfavorable: (value: Set<string>) => void;
};

export default function Unfavorable({unfavorable, setUnfavorable}: UnfavorableProps) {
    const onUnfavorableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newUnfavorable = new Set(unfavorable);
        if (event.target.checked) {
            newUnfavorable.add(value);
        } else {
            newUnfavorable.delete(value);
        }
        setUnfavorable(newUnfavorable);
    };

    return (
        <>
            <tr>
                <th scope="row">싫은 채소</th>
                <td>
                    <div>
                        <label htmlFor="cucumber">오이 제외</label>
                        <input id="cucumber" type="checkbox" value="cucumber" onChange={onUnfavorableChange}/>
                    </div>
                </td>
            </tr>
        </>
    )
}
