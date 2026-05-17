// global export consts

import data from '../data/api/recentGames.json';
import data1 from '../data/api/teamRecords.json';
import data2 from '../data/api/scoringLeaders.json';
import playerData from '../data/api/playerSearch.json';
import { flattenShootingStats } from './utils';

// recentGames.json consts
export const recentGames = data.recent_games;
export const recGamesDate = recentGames[0]?.game_date;
export const recTopScorers = data.top_scorers;

// teamRecords.json consts
export const nbaTeamRecs = data1.nba_team_records;
export const wnbaTeamRecs = data1.wnba_team_records;

// scoringLeaders.json consts
export const nbaLeaders = data2.nba;
export const wnbaLeaders = data2.wnba;

// playerSearch.json consts
export const player = playerData.player[0];
export const playerMeta = player?.player_meta;
export const boxTots = player?.totals.box_stats;
export const boxAvgs = player?.per_game.box_stats;
export const shtAvgs = player?.per_game.shooting;
export const shtTots = player?.totals.shooting;
export const shootingAvgs = flattenShootingStats(shtAvgs);
export const shootingTots = flattenShootingStats(shtTots);