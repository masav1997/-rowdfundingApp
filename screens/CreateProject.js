import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class CreateProject extends React.Component {
	state = { switchValue: false, switchValue1: false, switchValue2: false, switchValue3: false };

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
						style={{ marginTop: '7%', flex: 1, alignSelf: 'flex-end', justifyContent: 'center' }}
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
							Создание проекта
						</Text>
					</View>
					<View style={{ flex: 1 }} />
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={{
							width: width,
							height: 'auto',
							padding: 20,
							paddingTop: 15,
							backgroundColor: 'white',
							marginTop: 0,
							alignSelf: 'center',
							marginBottom: 10,
						}}
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
									flex: 2,
								}}
							>
								Фото и видео
							</Text>
							<TouchableOpacity style={{ flex: 1 }} onPress={this.toggleModal}>
								<Text
									style={{
										fontSize: 13,
										color: '#2E41BF',
										fontWeight: 'normal',
										textAlign: 'right',
									}}
								>
									Добавить
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
							}}
						>
							<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
								<View style={{ width: 82.5, height: 82.5, alignItems: 'flex-start', marginRight: 5 }}>
									<Image
										source={require('../assets/icons/pic10.png')}
										style={{ width: 70, height: 70, borderRadius: 5, top: 6 }}
									/>
									<TouchableOpacity
										style={{
											width: '100%',
											height: '100%',
											position: 'absolute',
											alignSelf: 'flex-end',
											justifyContent: 'flex-start',
											marginBottom: 25,
										}}
									>
										<Image
											source={require('../assets/icons/del.png')}
											style={{
												width: 25,
												height: 25,
												position: 'absolute',
												alignSelf: 'flex-end',
												justifyContent: 'flex-start',
												marginBottom: 25,
												right: 5,
											}}
										/>
									</TouchableOpacity>
								</View>
								<View style={{ width: 82.5, height: 82.5, alignItems: 'flex-start', marginRight: 5 }}>
									<Image
										source={require('../assets/icons/pic8.png')}
										style={{ width: 70, height: 70, borderRadius: 5, top: 6 }}
									/>
									<TouchableOpacity
										style={{
											width: '100%',
											height: '100%',
											position: 'absolute',
											alignSelf: 'flex-end',
											justifyContent: 'flex-start',
											marginBottom: 25,
										}}
									>
										<Image
											source={require('../assets/icons/del.png')}
											style={{
												width: 25,
												height: 25,
												position: 'absolute',
												alignSelf: 'flex-end',
												justifyContent: 'flex-start',
												marginBottom: 25,
												right: 5,
											}}
										/>
									</TouchableOpacity>
								</View>
								<View style={{ width: 82.5, height: 82.5, alignItems: 'flex-start', marginRight: 5 }}>
									<Image
										source={require('../assets/icons/pic9.png')}
										style={{ width: 70, height: 70, borderRadius: 5, top: 6 }}
									/>
									<TouchableOpacity
										style={{
											width: '100%',
											height: '100%',
											position: 'absolute',
											alignSelf: 'flex-end',
											justifyContent: 'flex-start',
											marginBottom: 25,
										}}
									>
										<Image
											source={require('../assets/icons/del.png')}
											style={{
												width: 25,
												height: 25,
												position: 'absolute',
												alignSelf: 'flex-end',
												justifyContent: 'flex-start',
												marginBottom: 25,
												right: 5,
											}}
										/>
									</TouchableOpacity>
								</View>
								<View style={{ width: 82.5, height: 82.5, alignItems: 'flex-start', marginRight: 5 }}>
									<Image
										source={require('../assets/icons/pic10.png')}
										style={{ width: 70, height: 70, borderRadius: 5, top: 6 }}
									/>
									<TouchableOpacity
										style={{
											width: '100%',
											height: '100%',
											position: 'absolute',
											alignSelf: 'flex-end',
											justifyContent: 'flex-start',
											marginBottom: 25,
										}}
									>
										<Image
											source={require('../assets/icons/del.png')}
											style={{
												width: 25,
												height: 25,
												position: 'absolute',
												alignSelf: 'flex-end',
												justifyContent: 'flex-start',
												marginBottom: 25,
												right: 5,
											}}
										/>
									</TouchableOpacity>
								</View>
								<View style={{ width: 82.5, height: 82.5, alignItems: 'flex-start', marginRight: 5 }}>
									<Image
										source={require('../assets/icons/pic8.png')}
										style={{ width: 70, height: 70, borderRadius: 5, top: 6 }}
									/>
									<TouchableOpacity
										style={{
											width: '100%',
											height: '100%',
											position: 'absolute',
											alignSelf: 'flex-end',
											justifyContent: 'flex-start',
											marginBottom: 25,
										}}
									>
										<Image
											source={require('../assets/icons/del.png')}
											style={{
												width: 25,
												height: 25,
												position: 'absolute',
												alignSelf: 'flex-end',
												justifyContent: 'flex-start',
												marginBottom: 25,
												right: 5,
											}}
										/>
									</TouchableOpacity>
								</View>
							</ScrollView>
						</View>
					</View>

					<View
						style={{
							width: width,
							height: 'auto',
							padding: 20,
							paddingTop: 15,
							backgroundColor: 'white',
							marginTop: 0,
							alignSelf: 'center',
							marginBottom: 10,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 20,
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#262626',
									fontWeight: 'bold',
									textAlign: 'left',
								}}
							>
								Общая информация
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Название
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 12,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="Натуральносухая куртка от Вули - создана без пластика"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Начало
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="18 Янв 2020"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Окончание
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="24 Апр 2020"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Цель US$
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="250,000"
								/>
							</View>
						</View>
					</View>

					<View
						style={{
							width: width,
							height: 'auto',
							padding: 20,
							paddingTop: 15,
							backgroundColor: 'white',
							marginTop: 0,
							alignSelf: 'center',
							marginBottom: 10,
						}}
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
								}}
							>
								Описание
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
								marginTop: 2,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
								}}
							>
								Категория
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="rgba(60, 60, 67, 0.29)"
									placeholder="Выберите категорию"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Описание
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="Duis qui exercitation do exercitation occaecat.."
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Хеш-теги
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="#cloth, #product_design #hashtag"
								/>
							</View>
						</View>
					</View>

					<View
						style={{
							width: width,
							height: 'auto',
							padding: 20,
							paddingTop: 15,
							backgroundColor: 'white',
							marginTop: 0,
							alignSelf: 'center',
							marginBottom: 10,
						}}
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
								}}
							>
								Цель №1
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Название
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="Название цели тут"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Окончание
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="24 Апр 2020"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								Цель US$
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="250,000"
								/>
							</View>
						</View>
						<TouchableOpacity>
							<Text style={{ alignSelf: 'center', fontSize: 16, color: '#5238F2' }}>
								Добавить ещё цель
							</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							width: width,
							height: 'auto',
							padding: 20,
							paddingTop: 15,
							backgroundColor: 'white',
							marginTop: 0,
							alignSelf: 'center',
							marginBottom: 10,
						}}
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
								}}
							>
								Награды
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								за 50$
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="#0C0D0B"
									placeholder="Что-то"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								за 100$
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 0.3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="rgba(60, 60, 67, 0.29)"
									placeholder="Ничего"
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
									marginTop: 2,
								}}
							>
								за 200$
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									justifyContent: 'center',
									marginRight: 5,
								}}
							>
								<TextInput
									style={{
										paddingTop: 0,
										flex: 12,
										fontSize: 16,
									}}
									multiline={true}
									placeholderTextColor="rgba(60, 60, 67, 0.29)"
									placeholder="Ничего"
								/>
							</View>
						</View>
					</View>

					<View
						style={{
							width: width,
							height: 'auto',
							padding: 20,
							paddingTop: 15,
							backgroundColor: 'white',
							marginTop: 0,
							alignSelf: 'center',
							marginBottom: 10,
						}}
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
								Банковские данные
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 1,
								}}
							>
								Карта №1
							</Text>
							<TouchableOpacity
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										color: '#0C0D0B',
										fontWeight: 'normal',
										textAlign: 'left',
										flex: 1,
									}}
								>
									**** **** **** **48
								</Text>
							</TouchableOpacity>
							<Image
								style={{ width: 25, height: 15 }}
								source={require('../assets/icons/mastercard.png')}
							/>
						</View>
					</View>

					<View style={{ marginBottom: '20%' }} />
				</ScrollView>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'flex-end',
						marginTop: 20,
						marginBottom: 20,
					}}
				>
					<TouchableOpacity
						style={{
							width: width - 50,
							alignSelf: 'flex-end',
							height: 50,
							backgroundColor: '#5238F2',
							borderRadius: 10,
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onPress={() => this.props.navigation.goBack()}
					>
						<Text
							style={{
								fontSize: 17,
								color: 'white',
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							Создать
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
