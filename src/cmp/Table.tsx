import { capitalizeEachWord } from "@/utils";

export type tableProps = {
    header: string;
    cssClass: string;
    data: any[];
    type: 'basic' | 'ranked'; // assigned as table element's class
    excludeFields?: string[];
    rowHeaderFields?: string[]; // render these fields as th rather than td
}

export default function Table({ header, cssClass, type, data, excludeFields, rowHeaderFields }: tableProps) {
    // keys of first object in array are the headers
    const headers = (Object.keys(data[0])
        .filter((k) => !excludeFields?.includes(k)))
        .map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`);

    // new array of objects only wiith the fields with headers
    const filtered = data.map((obj) => Object.fromEntries(Object.entries(obj)
        .filter(([k]) => !excludeFields?.includes(k))));

    return (
        <div className={`${cssClass}`}>
            <div className='ttl'>{header}</div>
            <table className={type}>
                <thead>
                    <tr>
                        {type === 'ranked'  && <th>Rank</th>}
                        {headers.map((h, i) => <th key={`header-${i}`}>{h}</th>)}
                    </tr> 
                </thead>
                <tbody>
                    {filtered.map((obj, rowIdx) => (
                        <tr>
                            {type === 'ranked' && <th>{rowIdx + 1}</th>}
                            {Object.entries(obj).map(([k, v]: any, i) => (
                                rowHeaderFields?.includes(k)
                                    ? <th key={`val-${i}`}>{capitalizeEachWord(v)}</th>
                                    : <td key={`val-${i}`}>{typeof v === 'object' ? JSON.stringify(v) : v}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}