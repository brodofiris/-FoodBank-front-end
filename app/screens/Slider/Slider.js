import React from 'react';
import { View, ScrollView, StatusBar,  StyleSheet, PixelRatio,  Dimensions  } from 'react-native'
import DefStyles from '../../config/DefStyles';

import FirstSlide from './FirstSlide'
import SecondSlide from './SecondSlide'
import ThirdSlide from './ThirdSlide'


class  Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {slideActive: 1, offset: '', scroll: true};
  }
  /*offsetEval () {
      if(this.state.offset== 'right'){ this.setState(prevState => {return {slideActive: prevState.slideActive>1? prevState.slideActive- 1: 1}}); console.log(this.state.slideActive)}
      else if(this.state.offset == 'left'){this.setState(prevState => {return {slideActive:prevState.slideActive<3? prevState.slideActive + 1: 3}});  console.log(this.state.slideActive)}
      else console.log('wtf');
  };*/

    handleScroll =(e)=>{
      /*if (this.state.scroll) {
        this.setState({scroll:false});
        const currentOffset = e.nativeEvent.contentOffset.x;
        const dif = currentOffset - (this.offset || 0);
        console.log(this.offset);

        if (Math.abs(dif) < 3) {
          console.log('unclear');
          this.setState({offset: 'unclear'});
        } else if (dif < 0) {
          console.log('right');
          this.setState({offset: 'right'});

        } else {
          this.setState({offset: 'left'});
          console.log('left');
        }
        this.offset = currentOffset;
        setTimeout(() => this.setState({scroll:true}), 160);
        this.offsetEval()};*/

        const { width } = Dimensions.get('window');
        const currentX = e.nativeEvent.contentOffset.x;
        if(currentX==0)  this.setState({slideActive: 1});
        if(currentX<width&& currentX>0)  this.setState({slideActive: 2});
        if(currentX>width)  this.setState({slideActive: 3});
    }

    render(){
    const { width, height } = Dimensions.get('window');
    
    return (
      <>
      
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{ flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={this.handleScroll}
          >
            <View style={{ width, height }}>
               <FirstSlide/>
            </View>
            <View style={{ width, height }}>
                <SecondSlide/>
            </View>
            <View style={{ width, height }}>
               <ThirdSlide/>
            </View>
          </ScrollView>

          <View style={styles.paginationWrapper}>
            <View  style={[styles.paginationDots,this.state.slideActive===1? {backgroundColor: DefStyles.colors.mainPink} : {backgroundColor: DefStyles.colors.text}]}/>
            <View  style={[styles.paginationDots, this.state.slideActive===2? {backgroundColor: DefStyles.colors.mainPink} : {backgroundColor: DefStyles.colors.text}]}/>
            <View  style={[styles.paginationDots, this.state.slideActive===3? {backgroundColor: DefStyles.colors.mainPink} : {backgroundColor: DefStyles.colors.text}]}/>
          </View>
        </View>
      </>
    )};
  };
  
  const styles = StyleSheet.create({
    imageStyle: {
      height: PixelRatio.getPixelSizeForLayoutSize(135),
      width: '100%',
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 17,
    },
    paginationWrapper: {
      position: 'absolute',
      bottom: 100,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    paginationDots: {
      height: 9,
      width: 25,
      borderRadius: 10 / 2,
      marginLeft: 10,
    },
  });




  export default Slider;