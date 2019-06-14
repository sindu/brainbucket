export interface Group {
  id: number;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
  lecturers?: Array<string>;
}

export interface Idea {
  id: number;
  groupId: number;
  name: string;
  description?: string;
  url?: string;
}


