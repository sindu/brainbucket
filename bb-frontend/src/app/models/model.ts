export interface Group {
  id: string;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
  lecturers?: Array<string>;
  ideas: Array<Idea>;
}

export interface Idea {
  id: string;
  name: string;
  description?: string;
  url?: string;
}


