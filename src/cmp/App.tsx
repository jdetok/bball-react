import PlayerCard from "./PlayerCard";
import Table from "./Table";
import {
    nbaLeaders, nbaTeamRecs, playerMeta, recGamesDate, recTopScorers,
    wnbaLeaders, wnbaTeamRecs, player
} from "@/consts";

export default function App() {
    return (
        <main className="app">
            <PlayerCard
                header={`${playerMeta?.player as string} | ${playerMeta?.team_name as string}`}
                subhdr={playerMeta?.season as string}
                infoStrs={[`${player?.playtime.games_played} Games Played`, `${player?.playtime.minutes} Minutes Played`, `${player?.playtime.minutes_pg} Minutes Per Game`]}
                tImgSrc={playerMeta?.team_logo_url as string}
                pImgSrc={playerMeta?.headshot_url as string}
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`Top Scorers from ${recGamesDate}`}
                data={recTopScorers}
                excludeFields={['player_id', 'team_id', 'league']}
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
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`NBA Scoring Leaders: ${nbaLeaders[0]?.season}`}
                data={nbaLeaders}
                excludeFields={['player_id', 'season']}
            />
            <Table
                cssClass="tbl"
                type="ranked"
                header={`WNBA Scoring Leaders: ${wnbaLeaders[0]?.season}`}
                data={wnbaLeaders}
                excludeFields={['player_id', 'season']}
            />
        </main>
    )
}