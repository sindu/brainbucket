export interface Group {
  id: number;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
}

export interface Idea {
  id: number;
  groupId: number;
  name: string;
  description?: string;
  url?: string;
}


