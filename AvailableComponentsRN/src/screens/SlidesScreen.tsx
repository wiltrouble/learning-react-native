import { StyleSheet, Text, View, Dimensions, ImageSourcePropType, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]
const width = Dimensions.get('window').width;

const SlidesScreen = () => {

  const renderItem = (item: Slide, index: number) => {
    return (
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 5, padding: 40, justifyContent: 'center'}}>
        <Image source={ item.img } style={{width: 350, height: 400, resizeMode: 'center'}} />
        <Text style={styles.title}>{ item.title }</Text>
        <Text style={styles.subtitle}>{ item.desc }</Text>
        <Text>{index +1}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                // height={width / 2}
                autoPlay={true}
                data={items}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({item, index}) => renderItem(item, index)}
                pagingEnabled={true}
            />
            

        </SafeAreaView>
  )
}

export default SlidesScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D^'
  },
  subtitle: {
    fontSize: 16
  }
})