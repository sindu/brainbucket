export interface Group {
  id: number | string;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
  lecturers?: Array<string>;
}

export interface Idea {
  id: number | string;
  groupId: number | string;
  name: string;
  description?: string;
  url?: string;
}


