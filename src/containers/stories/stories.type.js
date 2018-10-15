// @flow
export type Story = {
  +id: number,
  +username: string,
  +title: string,
  +description: string,
  +timestamp: number
};

export type Stories = Array<Story>;

export type StoriesState = {
  +error: ?string,
  +loading: boolean,
  +timestamp: number,
  +stories: Stories
};

export type StoryState = {
  +error: ?string,
  +loading: boolean,
  +timestamp: number,
  +story: Story
};
