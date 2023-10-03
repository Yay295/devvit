import { Devvit } from '@devvit/public-api';
import {
  BaseballGameScoreInfo,
  fetchActiveGames,
  GeneralGameScoreInfo,
  fetchAllTeams,
} from '../espn.js';
import { timezoneOptions } from '../helpers.js';
import { leaguesSupported } from '../sports.js';
import { gameSelectForm } from './GameSelectionForm.js';
import { singleTeamSelectForm } from './SingleTeamSelectionForm.js';

export const scoreboardCreationForm = Devvit.createForm(
  () => {
    return {
      fields: [
        {
          name: 'league',
          label: 'League',
          helpText: 'Select a league',
          type: 'select',
          required: true,
          options: leaguesSupported,
        },
        {
          name: 'filterby',
          label: 'Filter By',
          helpText: 'Filter games by',
          type: 'select',
          required: true,
          options: [
            {
              label: 'All games available',
              value: 'all',
            },
            {
              label: 'Specific Team',
              value: 'team',
            },
          ],
        },
        {
          name: 'timezone',
          label: 'Timezone',
          helpText: 'Timezone to display game times in',
          type: 'select',
          required: false,
          options: timezoneOptions,
          defaultValue: ['America/Los_Angeles'],
        },
      ],
      title: 'Create Live Scoreboard Post',
      acceptLabel: 'Next',
      cancelLabel: 'Back',
    };
  },
  async ({ values }, ctx) => {
    const league = values['league'][0];
    const filterBy = values['filterby'][0];
    const timezone = values['timezone'][0];

    if (filterBy == 'all' && league == 'mlb') {
      const scores: BaseballGameScoreInfo[] = await fetchActiveGames<BaseballGameScoreInfo>(league);
      return ctx.ui.showForm(gameSelectForm, {
        league: league,
        timezone: timezone,
        events: scores.map((score: BaseballGameScoreInfo) => score.event),
      });
    } else if (filterBy == 'all') {
      const scores: GeneralGameScoreInfo[] = await fetchActiveGames<GeneralGameScoreInfo>(league);
      return ctx.ui.showForm(gameSelectForm, {
        league: league,
        timezone: timezone,
        events: scores.map((score: GeneralGameScoreInfo) => score.event),
      });
    } else if (filterBy == 'team') {
      const teams = await fetchAllTeams(league);
      return ctx.ui.showForm(singleTeamSelectForm, {
        league: league,
        teams: teams,
        timezone: timezone,
      });
    }
  }
);