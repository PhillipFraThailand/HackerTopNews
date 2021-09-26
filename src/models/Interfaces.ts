export interface IStory {
  title: string,
  url: string,
  by: string,
  timestamp: string,
  score: string,
}

export interface IUser {
  authorId: string,
  karma: number,
}

export interface ICompleteStory extends IStory, IUser {}