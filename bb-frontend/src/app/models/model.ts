export interface Group {
  id: string;
  name: string;
  description?: string;
  dateFrom?: string;
  dateUntil?: string;
  lecturers?: Array<string>;
}

export interface Idea {
  id: string;
  groupId: string;
  name: string;
  description?: string;
  url?: string;
}


