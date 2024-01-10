export const demoNflGame11: any = {
  id: 'demo-nfl-game-11',
  status: 'inprogress',
  scheduled: '2024-01-07T01:15:00+00:00',
  entry_mode: 'LDE',
  clock: '00:07',
  quarter: 4,
  sr_id: 'sr:match:41209665',
  game_type: 'regular',
  conference_game: true,
  weather: {
    condition: 'Mist',
    humidity: 92,
    temp: 35,
    wind: {
      speed: 2,
      direction: 'N',
    },
  },
  coin_toss: [
    {
      home: {
        outcome: 'lost',
        decision: 'receive',
      },
      away: {
        outcome: 'won',
        decision: 'defer',
      },
      quarter: 1,
    },
    {
      home: {
        outcome: 'lost',
        decision: 'kick',
      },
      away: {
        outcome: 'won',
        decision: 'receive',
      },
      quarter: 3,
    },
  ],
  summary: {
    season: {
      id: 'a538d200-e916-4272-aa07-b486094a1668',
      year: 2023,
      type: 'REG',
      name: 'REG',
    },
    week: {
      id: '7723bce4-a683-4152-b95d-42bce6e98d9c',
      sequence: 18,
      title: '18',
    },
    venue: {
      id: '6ed18563-53e0-46c2-a91d-12d73a16456d',
      name: 'Lucas Oil Stadium',
      city: 'Indianapolis',
      state: 'IN',
      country: 'USA',
      zip: '46225',
      address: '500 South Capitol Avenue',
      capacity: 67000,
      surface: 'artificial',
      roof_type: 'retractable_dome',
      sr_id: 'sr:venue:8185',
      location: {
        lat: '39.760008',
        lng: '-86.163906',
      },
    },
    home: {
      id: '82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9',
      name: 'Colts',
      market: 'Indianapolis',
      alias: 'IND',
      sr_id: 'sr:competitor:4421',
      used_timeouts: 3,
      remaining_timeouts: 0,
      points: 17,
      used_challenges: 1,
      remaining_challenges: 1,
    },
    away: {
      id: '82d2d380-3834-4938-835f-aec541e5ece7',
      name: 'Texans',
      market: 'Houston',
      alias: 'HOU',
      sr_id: 'sr:competitor:4324',
      used_timeouts: 1,
      remaining_timeouts: 2,
      points: 23,
      used_challenges: 0,
      remaining_challenges: 2,
    },
  },
  situation: {
    clock: '00:07',
    down: 4,
    yfd: 2,
    possession: {
      id: '82d2d380-3834-4938-835f-aec541e5ece7',
      name: 'Texans',
      market: 'Houston',
      alias: 'HOU',
      sr_id: 'sr:competitor:4324',
    },
    location: {
      id: '82d2d380-3834-4938-835f-aec541e5ece7',
      name: 'Texans',
      market: 'Houston',
      alias: 'HOU',
      sr_id: 'sr:competitor:4324',
      yardline: 23,
    },
  },
  last_event: {
    type: 'event',
    id: '7eccd100-ad13-11ee-b18e-11f7316c1a9e',
    sequence: 1704601020128,
    clock: '00:07',
    event_type: 'timeout',
    description: 'Timeout #1 by HOU.',
    created_at: '2024-01-07T04:17:00+00:00',
    updated_at: '2024-01-07T04:17:01+00:00',
    wall_clock: '2024-01-07T04:16:54+00:00',
  },
  scoring: [
    {
      period_type: 'quarter',
      id: '3783d9e7-4fb1-44ed-823b-d98f3f1642d3',
      number: 1,
      sequence: 1,
      home_points: 3,
      away_points: 7,
    },
    {
      period_type: 'quarter',
      id: '2b6d464b-9d52-409f-a8b3-d10f4c81fc33',
      number: 2,
      sequence: 2,
      home_points: 3,
      away_points: 7,
    },
    {
      period_type: 'quarter',
      id: '31b467ed-0f08-4499-9f26-bab75a930809',
      number: 3,
      sequence: 3,
      home_points: 8,
      away_points: 3,
    },
    {
      period_type: 'quarter',
      id: '3edcce8e-baa0-4fc5-8900-061bedcb5ee4',
      number: 4,
      sequence: 4,
      home_points: 3,
      away_points: 6,
    },
  ],
};
