import * as React from 'react';
import {
	View,
	Dimensions,
	StatusBar,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import Popular from '../screens/Popular';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class AllProjects extends React.Component {
	state = {
		switchValue: false,
		isModalVisible: false,
		isDropdown: false,
		isDropdown1: false,
		isCat1: false,
		isCat2: false,
		isCat3: false,
		isCat4: false,
		isCat5: false,
		isCat6: false,
		isRadio: false,
		isRadio1: false,
		bool: false,
	};

	toggleSearch = () => {
		this.props.navigation.navigate('Search');
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	toggleDropdown = () => {
		this.setState({ isDropdown: !this.state.isDropdown });
	};

	toggleCat1 = () => {
		this.setState({ isCat1: !this.state.isCat1 });
	};

	toggleCat2 = () => {
		this.setState({ isCat2: !this.state.isCat2 });
	};

	toggleCat3 = () => {
		this.setState({ isCat3: !this.state.isCat3 });
	};

	toggleDropdown1 = () => {
		this.setState({ isDropdown1: !this.state.isDropdown1 });
	};

	toggleCat4 = () => {
		this.setState({ isCat4: !this.state.isCat4 });
	};

	toggleCat5 = () => {
		this.setState({ isCat5: !this.state.isCat5 });
	};

	toggleCat6 = () => {
		this.setState({ isCat6: !this.state.isCat6 });
	};

	toggleRadio = () => {
		this.setState({ isRadio: !this.state.isRadio });
	};

	toggleRadio1 = () => {
		this.setState({ isRadio1: !this.state.isRadio1 });
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
						onPress={this.toggleModal}
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
					<Popular
						key={'1'}
						tabLabel={'Популярные'}
						onPress={() => this.props.navigation.navigate('Project')}
					/>
					<Popular key={'2'} tabLabel={'Новые'} onPress={() => this.props.navigation.navigate('Project')} />
					<Popular key={'3'} tabLabel={'Вещи'} onPress={() => this.props.navigation.navigate('Project')} />
					<Popular key={'4'} tabLabel={'Мода'} onPress={() => this.props.navigation.navigate('Project')} />
				</ScrollableTabView>
				<Modal
					isVisible={this.state.isModalVisible}
					style={{
						width: width,
						height: Platform.OS === 'android' ? height + 40 : height - 30,
						backgroundColor: '#FFF',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						margin: 0,
						flex: 0,
						bottom: 0,
						textAlign: 'left',
						padding: 20,
						justifyContent: 'flex-end',
						position: 'absolute',
					}}
				>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								height: 'auto',
								marginBottom: 11,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#262626',
									fontWeight: 'bold',
									textAlign: 'left',
									flex: 2,
								}}
							>
								Добавление карты
							</Text>
							<TouchableOpacity style={{ flex: 1, width: '100%', height: '100%' }}>
								<Text
									style={{
										fontSize: 15,
										color: '#5238F2',
										fontWeight: 'bold',
										textAlign: 'right',
									}}
								>
									Отменить
								</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								height: 58,
								width: '100%',
								borderBottomWidth: 0.3,
								borderBottomColor: 'rgba(60, 60, 67, 0.29)',
								alignItems: 'center',
							}}
							onPress={this.toggleDropdown}
						>
							<View style={{ flex: 11 }}>
								<Text
									style={{
										fontSize: 17,
										color: '#000',
										fontWeight: 'normal',
										textAlign: 'left',
									}}
								>
									Строительство и архитектура
								</Text>
							</View>
							<View style={{ justifyContent: 'flex-end', flex: 1 }}>
								<Image
									style={{
										width: 12,
										height: 7,
									}}
									source={
										this.state.isDropdown
											? require('../assets/icons/drop1.png')
											: require('../assets/icons/drop.png')
									}
								/>
							</View>
						</TouchableOpacity>
						{this.state.isDropdown && (
							<View>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										height: 58,
										width: '100%',
										borderBottomWidth: 0.3,
										borderBottomColor: 'rgba(60, 60, 67, 0.29)',
										alignItems: 'center',
									}}
									onPress={this.toggleCat1}
								>
									<View style={{ flex: 11 }}>
										<Text
											style={{
												fontSize: 15,
												color: '#000',
												fontWeight: this.state.isCat1 ? 'bold' : 'normal',
												textAlign: 'left',
												marginLeft: 15,
											}}
										>
											Подкатегория
										</Text>
									</View>
									<View style={{ justifyContent: 'flex-end', flex: 1 }}>
										<Image
											style={{
												width: 11,
												height: 9.34,
											}}
											source={this.state.isCat1 ? require('../assets/icons/done.png') : null}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										height: 58,
										width: '100%',
										borderBottomWidth: 0.3,
										borderBottomColor: 'rgba(60, 60, 67, 0.29)',
										alignItems: 'center',
									}}
									onPress={this.toggleCat2}
								>
									<View style={{ flex: 11 }}>
										<Text
											style={{
												fontSize: 15,
												color: '#000',
												fontWeight: this.state.isCat2 ? 'bold' : 'normal',
												textAlign: 'left',
												marginLeft: 15,
											}}
										>
											Подкатегория
										</Text>
									</View>
									<View style={{ justifyContent: 'flex-end', flex: 1 }}>
										<Image
											style={{
												width: 11,
												height: 9.34,
											}}
											source={this.state.isCat2 ? require('../assets/icons/done.png') : null}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										height: 58,
										width: '100%',
										borderBottomWidth: 0.3,
										borderBottomColor: 'rgba(60, 60, 67, 0.29)',
										alignItems: 'center',
									}}
									onPress={this.toggleCat3}
								>
									<View style={{ flex: 11 }}>
										<Text
											style={{
												fontSize: 15,
												color: '#000',
												fontWeight: this.state.isCat3 ? 'bold' : 'normal',
												textAlign: 'left',
												marginLeft: 15,
											}}
										>
											Подкатегория
										</Text>
									</View>
									<View style={{ justifyContent: 'flex-end', flex: 1 }}>
										<Image
											style={{
												width: 11,
												height: 9.34,
											}}
											source={this.state.isCat3 ? require('../assets/icons/done.png') : null}
										/>
									</View>
								</TouchableOpacity>
							</View>
						)}

						<TouchableOpacity
							style={{
								flexDirection: 'row',
								height: 58,
								width: '100%',
								borderBottomWidth: 0.3,
								borderBottomColor: 'rgba(60, 60, 67, 0.29)',
								alignItems: 'center',
							}}
							onPress={this.toggleDropdown1}
						>
							<View style={{ flex: 11 }}>
								<Text
									style={{
										fontSize: 17,
										color: '#000',
										fontWeight: 'normal',
										textAlign: 'left',
									}}
								>
									Технологии и изобретения
								</Text>
							</View>
							<View style={{ justifyContent: 'flex-end', flex: 1 }}>
								<Image
									style={{
										width: 12,
										height: 7,
									}}
									source={
										this.state.isDropdown1
											? require('../assets/icons/drop1.png')
											: require('../assets/icons/drop.png')
									}
								/>
							</View>
						</TouchableOpacity>
						{this.state.isDropdown1 && (
							<View>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										height: 58,
										width: '100%',
										borderBottomWidth: 0.3,
										borderBottomColor: 'rgba(60, 60, 67, 0.29)',
										alignItems: 'center',
									}}
									onPress={this.toggleCat4}
								>
									<View style={{ flex: 11 }}>
										<Text
											style={{
												fontSize: 15,
												color: '#000',
												fontWeight: this.state.isCat4 ? 'bold' : 'normal',
												textAlign: 'left',
												marginLeft: 15,
											}}
										>
											Подкатегория
										</Text>
									</View>
									<View style={{ justifyContent: 'flex-end', flex: 1 }}>
										<Image
											style={{
												width: 11,
												height: 9.34,
											}}
											source={this.state.isCat4 ? require('../assets/icons/done.png') : null}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										height: 58,
										width: '100%',
										borderBottomWidth: 0.3,
										borderBottomColor: 'rgba(60, 60, 67, 0.29)',
										alignItems: 'center',
									}}
									onPress={this.toggleCat5}
								>
									<View style={{ flex: 11 }}>
										<Text
											style={{
												fontSize: 15,
												color: '#000',
												fontWeight: this.state.isCat5 ? 'bold' : 'normal',
												textAlign: 'left',
												marginLeft: 15,
											}}
										>
											Подкатегория
										</Text>
									</View>
									<View style={{ justifyContent: 'flex-end', flex: 1 }}>
										<Image
											style={{
												width: 11,
												height: 9.34,
											}}
											source={this.state.isCat5 ? require('../assets/icons/done.png') : null}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										height: 58,
										width: '100%',
										borderBottomWidth: 0.3,
										borderBottomColor: 'rgba(60, 60, 67, 0.29)',
										alignItems: 'center',
									}}
									onPress={this.toggleCat6}
								>
									<View style={{ flex: 11 }}>
										<Text
											style={{
												fontSize: 15,
												color: '#000',
												fontWeight: this.state.isCat6 ? 'bold' : 'normal',
												textAlign: 'left',
												marginLeft: 15,
											}}
										>
											Подкатегория
										</Text>
									</View>
									<View style={{ justifyContent: 'flex-end', flex: 1 }}>
										<Image
											style={{
												width: 11,
												height: 9.34,
											}}
											source={this.state.isCat6 ? require('../assets/icons/done.png') : null}
										/>
									</View>
								</TouchableOpacity>
							</View>
						)}
						<TouchableOpacity
							style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}
							onPress={this.toggleRadio}
						>
							<View
								style={{
									width: 16,
									height: 16,
									borderRadius: 2,
									borderWidth: 1.5,
									borderColor: 'rgba(187, 197, 208, 0.69)',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								{this.state.isRadio && (
									<View
										style={{
											width: 13,
											height: 13,
											backgroundColor: '#5238F2',
											borderRadius: 2,
										}}
									/>
								)}
							</View>
							<View style={{ flex: 11 }}>
								<Text
									style={{
										fontSize: 15,
										color: '#000',
										fontWeight: this.state.isRadio ? 'bold' : 'normal',
										textAlign: 'left',
										marginLeft: 15,
									}}
								>
									Какой-то пункт
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}
							onPress={this.toggleRadio1}
						>
							<View
								style={{
									width: 16,
									height: 16,
									borderRadius: 2,
									borderWidth: 1.5,
									borderColor: 'rgba(187, 197, 208, 0.69)',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								{this.state.isRadio1 && (
									<View
										style={{
											width: 13,
											height: 13,
											backgroundColor: '#5238F2',
											borderRadius: 2,
										}}
									/>
								)}
							</View>
							<View style={{ flex: 11 }}>
								<Text
									style={{
										fontSize: 15,
										color: '#000',
										fontWeight: this.state.isRadio1 ? 'bold' : 'normal',
										textAlign: 'left',
										marginLeft: 15,
									}}
								>
									Какой-то пункт
								</Text>
							</View>
						</TouchableOpacity>
					</ScrollView>
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'flex-end',
							bottom: 0,
						}}
					>
						<TouchableOpacity
							style={{
								width: width - 50,
								alignSelf: 'center',
								height: 50,
								backgroundColor: '#5238F2',
								borderRadius: 10,
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={this.toggleModal}
						>
							<Text
								style={{
									fontSize: 17,
									color: 'white',
									fontWeight: '600',
									textAlign: 'center',
								}}
							>
								Показать 74
							</Text>
						</TouchableOpacity>
					</View>
				</Modal>
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
