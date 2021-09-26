import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { fetchNewsFeed, fetchTopStories, fetchStoriesFromList,tenRandomFromList } from '../services/NewsService'
import { NewsList } from '../components/NewsList';
import { ICompleteStory } from 'src/models/Interfaces';

export const NewsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [topStories, setTopStories] = useState <Array<ICompleteStory> | Promise<any> | void> ([]);

  useEffect(() => {
    const asyncUseEffect = async () => {
      setLoading(true)
      const stories = await fetchNewsFeed()
      setTopStories(stories);
      setLoading(false)
    };
    asyncUseEffect();
  },[]);

  const loadingView = () => (
    <View style={styles.flexOne}>
      <ActivityIndicator
        style={styles.flexOne}
        size="large"
        color="#e67e22"
      />
    </View>
  )

  return (
    <View style={styles.container}>
      {loading
        ? loadingView()
        : <NewsList topStories={topStories}/>
      } 
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 28,
    backgroundColor: '#0000'
  },
  flexOne: {
    flex: 1
  }
});
