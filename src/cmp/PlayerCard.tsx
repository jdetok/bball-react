import {
    boxAvgs, boxTots, playerMeta, shootingAvgs, shootingTots,
} from "@/consts";
import Table from "./Table";

export type playerCardProps = {
    header?: string;
    subhdr?: string;
    infoStrs?: string[];
    tImgSrc?: string;
    pImgSrc?: string;
};

export default function PlayerCard({ header, subhdr, infoStrs, tImgSrc, pImgSrc }: playerCardProps) {
    return (
        <div className="pcard">
             <div className="head">
                <h2>{header}</h2>
                <h3>{subhdr}</h3>
                <ul>{infoStrs?.map((s) => <li>{s}</li>)}</ul>
            </div>
            <div className="imgs">
                <img src={tImgSrc} />
                <img src={pImgSrc} />
            </div>
            <div className="tbls">
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.cap_box_tot}`}
                    data={[boxTots]}
                />
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.cap_box_avg}`}
                    data={[boxAvgs]}
                />
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.cap_shtg_tot}`}
                    data={shootingTots}
                    rowHeaderFields={['Shot Type']}
                />
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.cap_shtg_avg}`}
                    data={shootingAvgs}
                    rowHeaderFields={['Shot Type']}
                />
            </div>
        </div>
    )
}