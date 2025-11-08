'use client';

export default function Searchbox({value, onChange}) {
    return ( 
        <label>
            Search Box:
            <input type="text" placeholder="Search" value = {value} onChange={(e) => onChange(e.target.value)}/>
        </label>
    );
};