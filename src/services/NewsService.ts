import { IStory, IUser, ICompleteStory } from 'src/models/Interfaces';

export const tenRandomFromList = (list: Array<number>) => {
  const randomIds = Array<number>(); 
  for (let i = 0; i < 10; i++) {
    const rnd: number = Math.floor(Math.random() * list.length)
    randomIds.push(list[rnd])
    list.splice(rnd, 1)
  };
  return randomIds; 
};

export const fetchTopStories = async () => {
  try {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('error fetching list of top stories => ', err)
  };
};

export const fetchTopStory = async (storyId: number) => {
  try {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
    const data = await res.json();
    const story: IStory = {
      title: data.title,
      by: data.by,
      url: data.url,
      timestamp: data.time,
      score: data.score
    }
    return story;
  } catch (err) {
    console.error('error fetching story => ', err);
  }
};

export const fetchUser = async (userId: string) => {
  try {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`);
    const data = await res.json();

    const user: IUser = {
      authorId: data.id,
      karma: data.karma,
    }
    
    return user;
  } catch (err) {
    console.error('error fetching story => ', err);
  }
};


export const fetchStoriesFromList = async (list: Array<number>) => {
  const stories: Array<ICompleteStory> = [];
  try {
    await Promise.all(
      list.map(async (e) => {
        const topStory = await fetchTopStory(e)
          if (topStory) {
            const user = await fetchUser(topStory.by)
            if (user) { 
              const completeStory: ICompleteStory = {
                title: topStory.title,
                url: topStory.url,
                by: topStory.by,
                timestamp: topStory.timestamp,
                score: topStory.score,
                authorId: user.authorId,
                karma: user.karma,
              }
              stories.push(completeStory);
            }
          }
      })
    )

    const sortedList: Array<ICompleteStory> = stories.sort((a, b) => a.karma - b.karma);
    return sortedList;

  } catch (err) {
    console.error('error fetching top story => ', err);
  }

};

export const fetchNewsFeed = async () => {
  const topStories = await fetchTopStories();
  const randomIdsFromList = await tenRandomFromList(topStories)
  return await fetchStoriesFromList(randomIdsFromList);
}