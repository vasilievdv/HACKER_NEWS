export type Comment = {
  by?: string;
  id?: number;
  kids?: number[];
  parent?: number;
  text?: string;
  score?: number;
  time?: number;
  type?: string;
};
