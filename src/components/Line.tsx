import React from 'react'
import { View } from 'react-native'

interface IProps {
  height: number,
  width: number,
  backgroundColor: string,
}

export const Line = (props: IProps) => {
  const {
    height = 5,
    width = 5,
    backgroundColor = 'black',
  } = props;

  return (
    <View style={{height, width,backgroundColor}}/>
  )
};
