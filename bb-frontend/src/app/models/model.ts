export interface Group {
  id: string;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
  lecturers?: Array<string>;
  ideas: Array<Idea>;
  locked: boolean;
}

export interface Idea {
  id: string;
  name: string;
  description?: string;
  url?: string;
}

export interface LoginData {
  user: string;
}

