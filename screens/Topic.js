import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';

import AnswerCard from '../components/AnswerCard';

const { width, height } = Dimensions.get('window');

export default class Topic extends React.Component {
	state = {
		switchValue: false,
		switchValue1: false,
		switchValue2: false,
		switchValue3: false,
		bool: false,
		answer: false,
	};

	toggleSwitch = (value) => {
		this.setState({ switchValue: value });
	};

	toggleSwitch1 = (value) => {
		this.setState({ switchValue1: value });
	};

	toggleSwitch2 = (value) => {
		this.setState({ switchValue2: value });
	};

	toggleSwitch3 = (value) => {
		this.setState({ switchValue3: value });
	};

	render() {
		return (
			<View style={{ height: '100%', backgroundColor: '#F1F4FC' }}>
				<StatusBar barStyle="light-content" />
				<View
					style={{
						backgroundColor: '#5339F2',
						height: '15%',
						width: width,
						paddingBottom: 15,
						flexDirection: 'row',
						alignItems: 'flex-end',
						justifyContent: 'center',
						padding: 5,
					}}
				>
					<TouchableOpacity
						style={{ marginTop: '5%', flex: 1, alignSelf: 'flex-end', justifyContent: 'center' }}
						onPress={() => this.props.navigation.goBack()}
					>
						<Image
							source={require('../assets/icons/back_icon.png')}
							style={{ width: 32, height: 32, marginLeft: 15 }}
						/>
					</TouchableOpacity>
					<View style={{ flex: 3, alignSelf: 'flex-end', justifyContent: 'center' }}>
						<Text
							style={{
								fontSize: 17,
								color: 'white',
								fontWeight: '600',
								textAlign: 'center',
								marginBottom: 5,
							}}
						>
							Комментарии к теме
						</Text>
					</View>
					<TouchableOpacity
						style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'center' }}
						onPress={() => {
							this.props.navigation.navigate('CreateComment');
						}}
					>
						<Image
							source={require('../assets/icons/messages.png')}
							style={{ width: 25, height: 25, marginLeft: 30, tintColor: 'white' }}
						/>
					</TouchableOpacity>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={{
							width: '100%',
							height: 'auto',
							backgroundColor: 'white',
							padding: 15,
							marginBottom: 10,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								width: '100%',
								marginTop: 5,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									flex: 1,
									alignSelf: 'flex-end',
								}}
							>
								Организационные вопросы
							</Text>
							<TouchableOpacity
								style={{ alignSelf: 'flex-start', height: 20, width: 20, justifyContent: 'center' }}
							>
								<Image
									source={require('../assets/icons/dots.png')}
									style={{ width: 16, height: 16, alignSelf: 'center' }}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: 'row', width: '100%', marginTop: 3 }}>
							<Text
								style={{
									fontSize: 13,
									color: '#BBC5D0',
									width: 'auto',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
								}}
							>
								12.02.2020 23:45
							</Text>
							<View />
						</View>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								width: '100%',
								marginTop: 5,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#BBC5D0',
									fontWeight: 'normal',
									textAlign: 'left',
								}}
							>
								Duis qui exercitation do exercitation occaecat exercitation cillum veniam ad amet magna
								eu sunt. Veniam laboris adipisicing labore sit ipsum...
							</Text>
						</View>
						<TouchableOpacity
							style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}
							onPress={() => {
								this.props.navigation.navigate('Topic');
							}}
						>
							<Image
								source={require('../assets/icons/topic.png')}
								style={{ width: 16, height: 16, marginRight: 5 }}
							/>

							<Text
								style={{
									fontSize: 13,
									color: '#BBC5D0',
									width: 'auto',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
								}}
							>
								528 всего
							</Text>
							<View />
						</TouchableOpacity>
					</View>
					<View
						style={{
							width: width+width/7,
							height: height,
							backgroundColor: 'white',
							padding: 15,
							marginBottom: 10,
						}}
					>
						<ScrollableTabView
							renderTabBar={() => (
								<ScrollableTabBar style={styles.scrollStyle} tabStyle={styles.tabStyle}/>
							)}
							tabBarTextStyle={styles.tabBarTextStyle}
							tabBarInactiveTextColor={'#BBC5D0'}
							tabBarActiveTextColor={'#2E41BF'}
							tabBarUnderlineStyle={styles.underlineStyle}
							tabBarTextStyle={{ fontSize: 17, fontWeight: '500' }}
						>
							<AnswerCard key={'1'} tabLabel={'Все комментарии'}  onPress={() => {
									this.props.navigation.navigate('SearchUser');
								}}/>
							<AnswerCard key={'2'} tabLabel={'Автора'} onPress={() => {
									this.props.navigation.navigate('SearchUser');
								}}/>
						</ScrollableTabView>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabStyle: {},
	scrollStyle: {
		backgroundColor: 'white',
		marginBottom: 10,
	},
	tabBarTextStyle: {
		fontSize: 14,
		fontWeight: 'normal',

	},
	underlineStyle: {
		height: 2.5,
		backgroundColor: '#2E41BF',
		borderRadius: 3,
	},
});
