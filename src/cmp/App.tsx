import Table from "./tbl/Table";
import data from '../../data/api/recentGames.json';
import data1 from '../../data/api/teamRecords.json';
import playerData from '../../data/api/playerSearch.json';

const nbaTeamRecs = data1.nba_team_records;
const wnbaTeamRecs = data1.wnba_team_records;
const boxTots = playerData.player[0]?.totals.box_stats;
const boxAvgs = playerData.player[0]?.per_game.box_stats;
const shtAvgs = playerData.player[0]?.per_game.shooting;
const shtTots = playerData.player[0]?.totals.shooting;
const player = playerData.player[0];
const playerMeta = player?.player_meta;

export default function App() {
    return (
        <main className="app">
            <Table
                cssClass="tbl"
                type="ranked"
                header={`Top Scorers from ${data.recent_games[0]?.game_date}`}
                data={data.top_scorers}
                excludeFields={['player_id', 'team_id', 'league']}
                rowHeaderFields={['player']}
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
                header={`${wnbaTeamRecs[0]?.league} Team Records: ${wnbaTeamRecs[0]?.season_desc}`}
                data={wnbaTeamRecs}
                excludeFields={['league', 'season_id', 'season_desc', 'season', 'team_id', 'team']}
                rowHeaderFields={['team_long']}
            />

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
            </div>
        </main>
    )
}