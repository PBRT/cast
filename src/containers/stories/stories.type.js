// @flow
export type Storie = {
  +title: string,
  +description: string
};

export type Stories = Array<Storie>;

export type StoriesState = {
  +error: ?string,
  +loading: boolean,
  +timestamp: number,
  +stories: Stories
};
