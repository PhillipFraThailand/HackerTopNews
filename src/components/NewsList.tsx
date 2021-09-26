import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NewsCard } from './NewsCard';
import { ICompleteStory } from 'src/models/Interfaces';

export type IProps = {
  topStories: Array<ICompleteStory> | any;
};

export const NewsList = (props: IProps)=> {
  const { 
    topStories,
  } = props

  const news = topStories.map((item: ICompleteStory) => (
    <NewsCard
      key={item.timestamp}
      title={item.title}
      url={item.url}
      timestamp={item.timestamp}
      score={item.score}
      authorId={item.authorId}
      karma={item.karma}
    />
  ));

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      {news}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 25,
  },
})
