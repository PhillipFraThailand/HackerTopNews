import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type IProps = {
  title: string,
  url: string,
  key: string,
  timestamp: string,
  score: string,
  authorId: string,
  karma: number,
};

export const NewsCard = (props :IProps) => {
  const {
    title,
    url,
    timestamp,
    score,
    authorId,
    karma,
  } = props

  const date = new Date(timestamp).toDateString()

  return (
    <View 
      style={styles.shadow}
        key={url}
      >
    <View 
      style={styles.card}
        key={url}
      >
      <Text
        style={styles.title}>
        {title}
      </Text>
      <Text
        style={styles.text}>
        {url}
      </Text>
      <Text
        style={styles.text}>
        {`Timestamp: ${timestamp}`}
      </Text>
      <Text
        style={styles.text}>
        {`Date: ${date}`}
      </Text>
      <Text
        style={styles.text}>
        {`Score: ${score}`}
      </Text>
      <Text
        style={styles.text}>
        {`AuthorId: ${authorId}`}
      </Text>
      <Text
        style={styles.text}>
        {`Karma: ${karma}`}
      </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  card: {
    margin: 5,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
  },
})
