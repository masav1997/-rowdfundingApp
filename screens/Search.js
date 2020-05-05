import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class Search extends React.Component {
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
		const { value } = this.props;
		return (
			<View style={{ height: '100%', backgroundColor: 'white' }}>
				<StatusBar barStyle="light-content" />
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
					<TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.goBack()}>
						<Image style={{ width: 21, height: 21 }} source={require('../assets/icons/right.png')} />
					</TouchableOpacity>
					<View style={{ flex: 11 }}>
						<TextInput
							style={{
								fontSize: 17,
							}}
							placeholderTextColor="#0C0D0B"
							placeholder={value}
							keyboardType="default"
							selectionColor="#5238F2"
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
				<ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
					<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
						<View style={{ flex: 1 }}>
							<Image source={require('../assets/icons/hashtag.png')} style={{ width: 40, height: 40 }} />
						</View>
						<View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
							<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>#project</Text>
							<Text style={{ fontSize: 13, color: '#BBC5D0', fontWeight: '500' }}>305 проектов</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
						<View style={{ flex: 1 }}>
							<Image source={require('../assets/icons/hashtag.png')} style={{ width: 40, height: 40 }} />
						</View>
						<View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
							<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>#project</Text>
							<Text style={{ fontSize: 13, color: '#BBC5D0', fontWeight: '500' }}>305 проектов</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
						<View style={{ flex: 1 }}>
							<Image source={require('../assets/icons/hashtag.png')} style={{ width: 40, height: 40 }} />
						</View>
						<View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
							<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>#project</Text>
							<Text style={{ fontSize: 13, color: '#BBC5D0', fontWeight: '500' }}>305 проектов</Text>
						</View>
					</TouchableOpacity>
					<View style={{ flexDirection: 'row', marginBottom: 10 }}>
						<Text style={{ fontSize: 17, color: '#BBC5D0', fontWeight: '500' }}>Проекты (35)</Text>
					</View>
					<TouchableOpacity
						style={{
							width: width - 30,
							height: 'auto',
							padding: 10,
							borderWidth: 1.5,
							borderColor: '#EFF4FC',
							borderRadius: 10,
							marginBottom: 10,
						}}
					>
						<View style={{ flexDirection: 'row', width: width - 30, paddingRight: 25 }}>
							<Image
								source={require('../assets/icons/avatar4.png')}
								style={{ width: 100, height: 100, borderRadius: 5 }}
							/>
							<View style={{ flexDirection: 'column' }}>
								<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width - 150 }}>
									<Text
										style={{
											fontSize: 11,
											color: '#BBC5D0',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											marginBottom: 2,
											flex: 1,
										}}
									>
										18 Янв 2020
									</Text>
									<View />
									<Text
										style={{
											fontSize: 11,
											color: '#BBC5D0',
											width: 'auto',
											fontWeight: '600',
											textAlign: 'right',
											marginLeft: 5,
											flex: 1,
										}}
									>
										24 Апр 2020
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										flexWrap: 'wrap',
										width: width - 150,
										marginBottom: 5,
									}}
								>
									<Text
										style={{
											fontSize: 15,
											color: '#0C0D0B',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
										}}
									>
										Натуральносухая куртка от Вули - создана без...
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										flexWrap: 'wrap',
										width: width - 150,
										marginBottom: 5,
									}}
								>
									<View
										style={{
											width: '100%',
											height: 7,
											borderRadius: 10,
											borderColor: '#EFF4FC',
											borderWidth: 1.5,
											marginLeft: 5,
											justifyContent: 'center',
										}}
									>
										<View
											style={{
												width: '45%',
												height: 7,
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
										fontSize: 13,
										color: '#05C53B',
										fontWeight: '500',
										textAlign: 'left',
										marginLeft: 5,
										marginBottom: 5,
									}}
								>
									US$ 128,731
								</Text>
								<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width - 150 }}>
									<Text
										style={{
											fontSize: 11,
											color: '#BBC5D0',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											marginBottom: 2,
											flex: 1,
										}}
									>
										цель US$ 250,000
									</Text>
									<View />
									<Text
										style={{
											fontSize: 11,
											color: '#BBC5D0',
											width: 'auto',
											fontWeight: '600',
											textAlign: 'right',
											marginLeft: 5,
											flex: 1,
										}}
									>
										587 пожертвований
									</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
					<View style={{ marginBottom: '25%' }} />
				</ScrollView>
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
