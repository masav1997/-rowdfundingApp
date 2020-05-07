import * as React from 'react';
import {
	View,
	Dimensions,
	StatusBar,
	Text,
	Image,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class Project extends React.Component {
	state = {
		like: false,
		isModalVisible: false,
		mon1: false,
		mon2: false,
		mon3: false,
		mon4: false,
		card1: true,
		card2: false,
	};

	toggleLike = () => {
		this.setState({ like: !this.state.like });
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	toggleMon1 = () => {
		this.setState({ mon1: !this.state.mon1 });
	};

	toggleMon2 = () => {
		this.setState({ mon2: !this.state.mon2 });
	};

	toggleMon3 = () => {
		this.setState({ mon3: !this.state.mon3 });
	};

	toggleMon4 = () => {
		this.setState({ mon4: !this.state.mon4 });
	};

	toggleCard1 = () => {
		this.setState({ card1: !this.state.card1 });
	};

	toggleCard2 = () => {
		this.setState({ card2: !this.state.card2 });
	};
	render() {
		return (
			<View style={{ height: '100%', backgroundColor: '#F1F4FC' }}>
				<StatusBar barStyle="light-content" />
				<View style={{ height: '45%', borderRadius: 25 }}>
					<Swiper
						from={0}
						minDistanceForAction={0.1}
						controlsProps={{
							dotsTouchable: true,
							prevPos: 'left',
							nextPos: 'right',
							nextTitleStyle: { width: 0, height: 0, fontSize: 0, fontWeight: '500' },
							PrevComponent: ({ onPress }) => (
								<TouchableOpacity onPress={onPress}>
									<Text
										style={{ width: 0, height: 0, color: 'white', fontSize: 0, fontWeight: '500' }}
									>
										{'<'}
									</Text>
								</TouchableOpacity>
							),
							dotActiveStyle: { backgroundColor: 'white' },
						}}
						containerStyle={{ backgroundColor: 'white' }}
					>
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								borderBottomRightRadius: 25,
								borderBottomLeftRadius: 25,
							}}
						>
							<ImageBackground
								resizeMode={'cover'}
								style={{
									height: '100%',
									width: width,
									alignItems: 'center',
									backgroundColor: 'white',
								}}
								source={require('../assets/icons/img.png')}
								imageStyle={{
									flex: 1,
									width: width,
									height: '100%',
									borderBottomLeftRadius: 20,
									borderBottomRightRadius: 20,
									justifyContent: 'flex-end',
								}}
							>
								<View style={{ flexDirection: 'row', marginTop: 10 }}>
									<TouchableOpacity
										style={{
											marginTop: '5%',
											flex: 1,
											alignSelf: 'flex-start',
											justifyContent: 'center',
										}}
										onPress={() => this.props.navigation.goBack()}
									>
										<Image
											source={require('../assets/icons/back_icon.png')}
											style={{ width: 32, height: 32, marginLeft: 15 }}
										/>
									</TouchableOpacity>
									<View style={{ flex: 2, alignSelf: 'flex-end' }}>
										<Text
											style={{
												fontSize: 17,
												color: 'white',
												fontWeight: '600',
												textAlign: 'center',
												marginBottom: 5,
											}}
										>
											Проект
										</Text>
									</View>
									<View
										style={{
											marginTop: '5%',
											flex: 1,
											alignSelf: 'center',
											justifyContent: 'center',
											flexDirection: 'row',
										}}
									>
										<TouchableOpacity>
											<Image
												source={require('../assets/icons/share.png')}
												style={{ width: 20, height: 20, marginLeft: 15 }}
											/>
										</TouchableOpacity>
										<TouchableOpacity onPress={this.toggleLike}>
											<Image
												source={require('../assets/icons/favorites.png')}
												style={
													this.state.like
														? {
																width: 20,
																height: 20,
																marginLeft: 15,
																tintColor: '#5238F2',
														  }
														: { width: 20, height: 20, marginLeft: 15, tintColor: 'white' }
												}
											/>
										</TouchableOpacity>
									</View>
								</View>
							</ImageBackground>
						</View>
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: 'white',
							}}
						>
							<ImageBackground
								resizeMode={'cover'}
								style={{
									height: '100%',
									width: width,
									alignItems: 'center',
									backgroundColor: 'white',
								}}
								source={require('../assets/icons/img1.png')}
								imageStyle={{
									flex: 1,
									width: width,
									height: '100%',
									borderBottomLeftRadius: 20,
									borderBottomRightRadius: 20,
								}}
							>
								<View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
									<TouchableOpacity
										style={{
											marginTop: '5%',
											flex: 1,
											alignSelf: 'flex-start',
											justifyContent: 'center',
										}}
										onPress={() => this.props.navigation.goBack()}
									>
										<Image
											source={require('../assets/icons/back_icon.png')}
											style={{ width: 32, height: 32, marginLeft: 15 }}
										/>
									</TouchableOpacity>
									<View style={{ flex: 2, alignSelf: 'flex-end' }}>
										<Text
											style={{
												fontSize: 17,
												color: 'white',
												fontWeight: '600',
												textAlign: 'center',
												marginBottom: 5,
											}}
										>
											Проект
										</Text>
									</View>
									<View
										style={{
											marginTop: '5%',
											flex: 1,
											alignSelf: 'center',
											justifyContent: 'center',
											flexDirection: 'row',
										}}
									>
										<TouchableOpacity>
											<Image
												source={require('../assets/icons/share.png')}
												style={{ width: 20, height: 20, marginLeft: 15 }}
											/>
										</TouchableOpacity>
										<TouchableOpacity onPress={this.toggleLike}>
											<Image
												source={require('../assets/icons/favorites.png')}
												style={
													this.state.like
														? {
																width: 20,
																height: 20,
																marginLeft: 15,
																tintColor: '#5238F2',
														  }
														: { width: 20, height: 20, marginLeft: 15, tintColor: 'white' }
												}
											/>
										</TouchableOpacity>
									</View>
								</View>
							</ImageBackground>
						</View>
					</Swiper>
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={{
							height: '100%',
							backgroundColor: '#EFF4FC',
						}}
					>
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
									height: 'auto',
									backgroundColor: 'white',
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'left',
										marginBottom: 2,
										flex: 1,
									}}
								>
									Начало: 18 Янв 2020
								</Text>
								<View />
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'right',
										flex: 1,
									}}
								>
									Окончание: 24 Апр 2020
								</Text>
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
										fontSize: 20,
										color: '#0C0D0B',
										fontWeight: '600',
										textAlign: 'left',
									}}
								>
									Натуральносухая куртка от Вули - создана без пластика
								</Text>
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
										fontSize: 14,
										color: '#0C0D0B',
										fontWeight: 'normal',
										textAlign: 'left',
									}}
								>
									Создание 100% шерстяной всепогодной куртки
								</Text>
							</View>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 15 }}>
								<View
									style={{
										width: '100%',
										height: 10,
										borderRadius: 10,
										borderColor: '#EFF4FC',
										borderWidth: 1.5,
										justifyContent: 'center',
									}}
								>
									<View
										style={{
											width: '45%',
											height: 10,
											backgroundColor: '#05C53B',
											borderRadius: 10,
											borderWidth: 1.5,
											borderColor: '#EFF4FC',
										}}
									/>
								</View>
							</View>
							<Text
								style={{
									fontSize: 17,
									color: '#05C53B',
									fontWeight: '500',
									textAlign: 'left',
									marginTop: 9,
								}}
							>
								US$ 128,731
							</Text>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 3 }}>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'left',
										marginBottom: 2,
										flex: 1,
									}}
								>
									цель US$ 250,000
								</Text>
								<View />
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										width: 'auto',
										fontWeight: 'normal',
										textAlign: 'right',
										flex: 1,
									}}
								>
									587 пожертвований
								</Text>
							</View>
							<ScrollView
								showsHorizontalScrollIndicator={false}
								horizontal={true}
								style={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									width: '100%',
									marginTop: 20,
									marginBottom: 20,
								}}
							>
								<TouchableOpacity
									style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}
								>
									<Text
										style={{
											fontSize: 13,
											color: '#5339F2',
											fontWeight: 'normal',
											textAlign: 'left',
										}}
									>
										#cloth
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}
								>
									<Text
										style={{
											fontSize: 13,
											color: '#5339F2',
											fontWeight: 'normal',
											textAlign: 'left',
										}}
									>
										#product_design
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}
								>
									<Text
										style={{
											fontSize: 13,
											color: '#5339F2',
											fontWeight: 'normal',
											textAlign: 'left',
										}}
									>
										#hashtag
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}
								>
									<Text
										style={{
											fontSize: 13,
											color: '#5339F2',
											fontWeight: 'normal',
											textAlign: 'left',
										}}
									>
										#hashtag1
									</Text>
								</TouchableOpacity>
							</ScrollView>
							<View
								style={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									width: '100%',
									height: 'auto',
									backgroundColor: 'white',
									marginBottom: 16,
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'left',
										marginBottom: 2,
										flex: 1,
									}}
								>
									587 пожертвований
								</Text>
								<View />
								<TouchableOpacity>
									<Text
										style={{
											fontSize: 13,
											color: '#5238F2',
											fontWeight: '500',
											textAlign: 'right',
											flex: 1,
										}}
									>
										Показать всех
									</Text>
								</TouchableOpacity>
							</View>
							<ScrollView
								showsHorizontalScrollIndicator={false}
								horizontal={true}
								style={{ flexDirection: 'row' }}
							>
								<View
									style={{
										width: 'auto',
										marginRight: 10,
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Image
										source={require('../assets/icons/avatar2.png')}
										style={{ width: 24, height: 24, borderRadius: 24, marginRight: 5 }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#0C0D0B',
											fontWeight: '500',
										}}
									>
										Kyle Russell
									</Text>
								</View>
								<View
									style={{
										width: 'auto',
										marginRight: 10,
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Image
										source={require('../assets/icons/avatar2.png')}
										style={{ width: 24, height: 24, borderRadius: 24, marginRight: 5 }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#0C0D0B',
											fontWeight: '500',
										}}
									>
										Kyle Russell
									</Text>
								</View>
								<View
									style={{
										width: 'auto',
										marginRight: 10,
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Image
										source={require('../assets/icons/avatar2.png')}
										style={{ width: 24, height: 24, borderRadius: 24, marginRight: 5 }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#0C0D0B',
											fontWeight: '500',
										}}
									>
										Kyle Russell
									</Text>
								</View>
							</ScrollView>
						</View>
						<View
							style={{
								width: width,
								height: 'auto',
								padding: 20,
								backgroundColor: 'white',
								marginTop: 0,
								alignSelf: 'center',
								marginBottom: 10,
							}}
						>
							<View style={{ flexDirection: 'row', width: '100%' }}>
								<Image
									source={require('../assets/icons/avatar2.png')}
									style={{ width: 40, height: 40, borderRadius: 40, marginRight: 5 }}
								/>
								<View style={{ flex: 2, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 17,
											color: '#0C0D0B',
											fontWeight: '500',
											textAlign: 'left',
											marginLeft: 5,
											marginBottom: 2,
										}}
									>
										Company/username
									</Text>
								</View>
								<TouchableOpacity
									style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}
									onPress={() => {
										this.props.navigation.navigate('UserProjects');
									}}
								>
									<Text
										style={{
											fontSize: 13,
											color: '#BBC5D0',
											fontWeight: 'normal',
											alignSelf: 'center',
											marginRight: 10,
											alignSelf: 'center',
										}}
									>
										58 проектов
									</Text>
									<Image
										source={require('../assets/icons/arrow.png')}
										style={{ width: 12, height: 20.5, alignSelf: 'center' }}
									/>
								</TouchableOpacity>
							</View>
						</View>
						<TouchableOpacity
							style={{
								width: width,
								height: 'auto',
								padding: 20,
								backgroundColor: 'white',
								marginTop: 0,
								alignSelf: 'center',
								marginBottom: 10,
							}}
							onPress={() => {
								this.props.navigation.navigate('Comments');
							}}
						>
							<View style={{ flexDirection: 'row', width: '100%' }}>
								<View style={{ flex: 1, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 17,
											color: '#0C0D0B',
											fontWeight: '500',
											textAlign: 'left',
											marginLeft: 5,
											marginBottom: 2,
										}}
									>
										Комментарии
									</Text>
								</View>
								<TouchableOpacity
									style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}
									onPress={() => {
										this.props.navigation.navigate('Comments');
									}}
								>
									<Text
										style={{
											fontSize: 13,
											color: '#BBC5D0',
											fontWeight: 'normal',
											alignSelf: 'center',
											marginRight: 10,
											alignSelf: 'center',
										}}
									>
										154 комментария
									</Text>
									<Image
										source={require('../assets/icons/arrow.png')}
										style={{ width: 12, height: 20.5, alignSelf: 'center' }}
									/>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
						<View
							style={{
								width: width,
								height: 'auto',
								padding: 20,
								backgroundColor: 'white',
								marginTop: 0,
								alignSelf: 'center',
								marginBottom: 10,
							}}
						>
							<View style={{ flexDirection: 'row', width: '100%' }}>
								<View style={{ flex: 1, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 13,
											color: '#BBC5D0',
											fontWeight: '500',
											textAlign: 'left',
											marginLeft: 5,
											marginBottom: 5,
										}}
									>
										Описание
									</Text>
								</View>
							</View>
							<View style={{ flexDirection: 'row', width: '100%' }}>
								<View style={{ flex: 1, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 15,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'left',
											marginLeft: 5,
											marginBottom: 5,
										}}
									>
										Duis qui exercitation do exercitation occaecat exercitation cillum veniam ad
										amet magna eu sunt. Veniam laboris adipisicing labore sit ipsum ea ea excepteur
										culpa commodo veniam. Incididunt excepteur cillum esse sunt ipsum ipsum elit
										ipsum nulla nostrud reprehenderit sit elit.
									</Text>
								</View>
							</View>
						</View>

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
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: '500',
										textAlign: 'left',
									}}
								>
									Цель №1
								</Text>
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
										fontSize: 14,
										color: '#0C0D0B',
										fontWeight: 'normal',
										textAlign: 'left',
									}}
								>
									Создание 100% шерстяной всепогодной куртки
								</Text>
							</View>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 15 }}>
								<View
									style={{
										width: '100%',
										height: 10,
										borderRadius: 10,
										borderColor: '#EFF4FC',
										borderWidth: 1.5,
										justifyContent: 'center',
									}}
								>
									<View
										style={{
											width: '45%',
											height: 10,
											backgroundColor: '#05C53B',
											borderRadius: 10,
											borderWidth: 1.5,
											borderColor: '#EFF4FC',
										}}
									/>
								</View>
							</View>
							<Text
								style={{
									fontSize: 17,
									color: '#05C53B',
									fontWeight: '500',
									textAlign: 'left',
									marginTop: 9,
								}}
							>
								US$ 128,731
							</Text>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 3 }}>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'left',
										marginBottom: 2,
										flex: 1,
									}}
								>
									цель US$ 250,000
								</Text>
								<View />
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										width: 'auto',
										fontWeight: 'normal',
										textAlign: 'right',
										flex: 1,
									}}
								>
									Окончание: 24 Апр 2020
								</Text>
							</View>
						</View>
					</View>
					<View style={{ marginBottom: '20%' }} />
				</ScrollView>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'center',
						bottom: 10,
						position: 'absolute',
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
							Пожертвовать
						</Text>
					</TouchableOpacity>
				</View>
				<Modal
					isVisible={this.state.isModalVisible}
					style={{
						width: width,
						height: this.state.mon4 ? 346 : 285,
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
					onBackdropPress={this.toggleModal}
				>
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							flex: 1,
							justifyContent: 'flex-start',
							marginBottom: 20,
						}}
					>
						<Text
							style={{
								fontSize: 15,
								color: '#262626',
								fontWeight: 'bold',
								textAlign: 'left',
								flex: 1,
							}}
						>
							Пожертвование
						</Text>
					</View>
					<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'flex-start',
							}}
						>
							{this.state.mon1 ? (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#5238F2',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon1}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#5238F2',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										50$
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#BBC5D0',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon1}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#BBC5D0',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										50$
									</Text>
								</TouchableOpacity>
							)}
							{this.state.mon2 ? (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#5238F2',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon2}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#5238F2',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										100$
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#BBC5D0',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon2}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#BBC5D0',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										100$
									</Text>
								</TouchableOpacity>
							)}
							{this.state.mon3 ? (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#5238F2',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon3}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#5238F2',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										200$
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#BBC5D0',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon3}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#BBC5D0',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										200$
									</Text>
								</TouchableOpacity>
							)}
							{this.state.mon4 ? (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#5238F2',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon4}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#5238F2',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										Своя
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										height: 38,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#BBC5D0',
										borderRadius: 20,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleMon4}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#BBC5D0',
											fontWeight: '500',
											textAlign: 'center',
										}}
									>
										Своя
									</Text>
								</TouchableOpacity>
							)}
						</View>
					</ScrollView>
					{this.state.mon4 && (
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'flex-start',
								marginBottom: 15,
							}}
						>
							<View
								style={{
									height: 'auto',
									padding: Platform.OS === 'android' ? 10 : 15,
									backgroundColor: '#F1F4FC',
									borderRadius: 10,
									flex: 3,
									alignSelf: 'center',
									marginRight: 10,
									paddingTop: Platform.OS === 'android' ? null : 15,
									fontSize: 16,
								}}
							>
								<TextInput
									placeholderTextColor="#BBC5D0"
									placeholder="Собственная карта"
									keyboardType="number-pad"
									selectionColor="#5238F2"
									textContentType="creditCardNumber"
									maxLength={16}
									style={{ fontSize: 16 }}
								/>
							</View>
						</View>
					)}

					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							flex: 1,
							justifyContent: 'flex-start',
							marginBottom: 10,
						}}
					>
						<Text
							style={{
								fontSize: 15,
								color: '#BBC5D0',
								fontWeight: '500',
								textAlign: 'left',
								flex: 1,
							}}
						>
							Способ оплаты
						</Text>
					</View>

					<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'flex-start',
							}}
						>
							{this.state.card1 ? (
								<TouchableOpacity
									style={{
										height: 48,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#5238F2',
										borderRadius: 10,
										justifyContent: 'center',
										marginRight: 5,
										flexDirection: 'row',
									}}
									onPress={this.toggleCard1}
								>
									<Text
										style={{
											fontSize: 15,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Карта №1
									</Text>
									<Text
										style={{
											fontSize: 16,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'center',
											alignSelf: 'center',
											marginLeft: 10,
										}}
									>
										**** **** **** **48
									</Text>
									<Image
										source={require('../assets/icons/mastercard.png')}
										style={{ width: 25, height: 15, alignSelf: 'center', marginLeft: 10 }}
									/>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										height: 48,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#BBC5D0',
										borderRadius: 10,
										justifyContent: 'center',
										marginRight: 5,
										flexDirection: 'row',
									}}
									onPress={this.toggleCard1}
								>
									<Text
										style={{
											fontSize: 15,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Карта №1
									</Text>
									<Text
										style={{
											fontSize: 16,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'center',
											alignSelf: 'center',
											marginLeft: 10,
										}}
									>
										**** **** **** **48
									</Text>
									<Image
										source={require('../assets/icons/mastercard.png')}
										style={{ width: 25, height: 15, alignSelf: 'center', marginLeft: 10 }}
									/>
								</TouchableOpacity>
							)}
							{this.state.card2 ? (
								<TouchableOpacity
									style={{
										height: 48,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#5238F2',
										borderRadius: 10,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleCard2}
								>
									<Text
										style={{
											fontSize: 15,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Счёт №1245623
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										height: 48,
										width: 'auto',
										paddingHorizontal: 10,
										paddingVertical: 5,
										borderWidth: 1.5,
										borderColor: '#BBC5D0',
										borderRadius: 10,
										justifyContent: 'center',
										marginRight: 5,
									}}
									onPress={this.toggleCard2}
								>
									<Text
										style={{
											fontSize: 15,
											color: '#0C0D0B',
											fontWeight: 'normal',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Счёт №1245623
									</Text>
								</TouchableOpacity>
							)}
						</View>
					</ScrollView>

					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							flex: 1,
							justifyContent: 'flex-start',
							marginBottom: 20,
							marginTop: 20,
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
								Пожертвовать
							</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		);
	}
}
