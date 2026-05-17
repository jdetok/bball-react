import Table from "./tbl/Table";
import {
    boxAvgs, boxTots, nbaLeaders, nbaTeamRecs, playerMeta, recGamesDate, recTopScorers,
    shootingAvgs, shootingTots, wnbaLeaders, wnbaTeamRecs
} from "@/consts";

export default function App() {
    return (
        <main className="app">
            <div>
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.player} ${playerMeta?.cap_box_tot}`}
                    data={[boxTots]}
                />
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.player} ${playerMeta?.cap_box_avg}`}
                    data={[boxAvgs]}
                />
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.player} ${playerMeta?.cap_shtg_tot}`}
                    data={shootingTots}
                    rowHeaderFields={['type']}
                />
                <Table
                    cssClass="tbl"
                    type="basic"
                    header={`${playerMeta?.player} ${playerMeta?.cap_shtg_avg}`}
                    data={shootingAvgs}
                    rowHeaderFields={['type']}
                />
            </div>
            <Table
                cssClass="tbl"
                type="ranked"
                header={`Top Scorers from ${recGamesDate}`}
                data={recTopScorers}
                excludeFields={['player_id', 'team_id', 'league']}
                rowHeaderFields={['player']}
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`${wnbaTeamRecs[0]?.league} Team Records: ${wnbaTeamRecs[0]?.season_desc}`}
                data={wnbaTeamRecs}
                excludeFields={['league', 'season_id', 'season_desc', 'season', 'team_id', 'team']}
                rowHeaderFields={['team_long']}
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`${nbaTeamRecs[0]?.league} Team Records: ${nbaTeamRecs[0]?.season_desc}`}
                data={nbaTeamRecs}
                excludeFields={['league', 'season_id', 'season_desc', 'season', 'team_id', 'team']}
                rowHeaderFields={['team_long']}
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`NBA Scoring Leaders: ${nbaLeaders[0]?.season}`}
                data={nbaLeaders}
                excludeFields={['player_id', 'season']}
                rowHeaderFields={['player']}
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`WNBA Scoring Leaders: ${wnbaLeaders[0]?.season}`}
                data={wnbaLeaders}
                excludeFields={['player_id', 'season']}
                rowHeaderFields={['player']}
            />


        </main>
    )
}