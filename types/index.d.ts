export interface userState {
  user: User;
}

export interface User {
  name: string;
  email: string;
}
//
export interface leagueState {
  leagueBoard: LeaguePlayer[];
}

export interface LeaguePlayer {
  name: string;
  xp: number;
}
