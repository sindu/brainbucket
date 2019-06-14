export interface Group {
  id: number | string;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
}

export interface Idea {
  id: number | string;
  name: string;
  description?: string;
  url?: string;
}


