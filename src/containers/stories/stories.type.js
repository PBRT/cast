// @flow
export type Story = {
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
