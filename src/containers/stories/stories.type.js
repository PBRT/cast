// @flow
export type Story = {
  +title: string,
  +description: string,
  +date: number
};

export type Stories = Array<Story>;

export type StoriesState = {
  +error: ?string,
  +loading: boolean,
  +timestamp: number,
  +stories: Stories
};
