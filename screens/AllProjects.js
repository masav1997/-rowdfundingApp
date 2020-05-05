import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import Popular from '../screens/Popular';

const { width } = Dimensions.get('window');

export default class AllProjects extends React.Component {
	toggleSearch = () => {
		this.props.navigation.navigate('Search');
	};
	render() {
		return (
			<View style={{ height: '100%', backgroundColor: 'white' }}>
				<StatusBar barStyle="light-content" />
				<View
					style={{
						backgroundColor: '#5339F2',
						height: '15%',
						width: width,
						alignItems: 'center',
						justifyContent: 'flex-end',
						borderBottomRightRadius: 25,
						borderBottomLeftRadius: 25,
						paddingBottom: 15,
					}}
				>
					<Text style={{ fontSize: 17, color: 'white', fontWeight: '600' }}>Все проекты</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: width - 30,
						alignSelf: 'center',
						height: 36,
						backgroundColor: '#F1F4FC',
						borderRadius: 10,
						marginTop: 15,
						alignItems: 'center',
						paddingHorizontal: 5,
						marginBottom: 15,
					}}
				>
					<View style={{ flex: 1 }}>
						<Image style={{ width: 14, height: 14 }} source={require('../assets/icons/search.png')} />
					</View>
					<View style={{ flex: 11 }}>
						<TextInput
							style={{
								fontSize: 17,
							}}
							placeholderTextColor="#BBC5D0"
							placeholder="Поиск"
							keyboardType="default"
							selectionColor="#5238F2"
							onChangeText={this.toggleSearch}
						/>
					</View>
					<TouchableOpacity
						style={{
							flex: 1,
							width: '100%',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image style={{ width: 20, height: 20 }} source={require('../assets/icons/filter.png')} />
					</TouchableOpacity>
				</View>

				<ScrollableTabView
					renderTabBar={() => <ScrollableTabBar style={styles.scrollStyle} tabStyle={styles.tabStyle} />}
					tabBarTextStyle={styles.tabBarTextStyle}
					tabBarInactiveTextColor={'#BBC5D0'}
					tabBarActiveTextColor={'#2E41BF'}
					tabBarUnderlineStyle={styles.underlineStyle}
					tabBarTextStyle={{ fontSize: 17, fontWeight: '500' }}
				>
					<Popular key={'1'} tabLabel={'Популярные'} />
					<Popular key={'2'} tabLabel={'Новые'} />
					<Popular key={'3'} tabLabel={'Вещи'} />
					<Popular key={'4'} tabLabel={'Мода'} />
				</ScrollableTabView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabStyle: {},
	scrollStyle: {
		backgroundColor: 'white',
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
