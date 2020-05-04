import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class ProfileEdit extends React.Component {
	state = { switchValue: false, isModalVisible: false, bool: false };

	toggleSwitch = (value) => {
		this.setState({ switchValue: value });
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
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
					}}
				>
					<TouchableOpacity
						style={{ marginTop: '5%', flex: 1, alignSelf: 'flex-end', justifyContent: 'center' }}
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
							Данные профиля
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
								justifyContent: 'center',
								marginBottom: 20,
							}}
						>
							<Image
								source={require('../assets/icons/avatar1.png')}
								style={{
									width: 95,
									height: 95,
									borderRadius: 95,
									backgroundColor: 'black',
									justifyContent: 'center',
								}}
							/>
						</View>

						<TouchableOpacity
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 15,
							}}
						>
							<Text
								style={{
									fontSize: 14,
									color: '#5238F2',
									fontWeight: '600',
									textAlign: 'center',
								}}
							>
								Изменить фото профиля
							</Text>
						</TouchableOpacity>

						<View
							style={{
								width: width,
								height: 0.5,
								backgroundColor: 'rgba(60, 60, 67, 0.29)',
								alignSelf: 'center',
								marginBottom: 15,
							}}
						/>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 20,
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
								Имя
							</Text>
							<TextInput
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 1,
									flex: 3,
								}}
								multiline={true}
								placeholderTextColor="#0C0D0B"
								placeholder="Константин Константинопольский"
							/>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 20,
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
								Почта
							</Text>
							<TextInput
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 1,
									flex: 3,
								}}
								multiline={true}
								placeholderTextColor="#0C0D0B"
								placeholder="newuser@gmail.com"
							/>
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
								Описание
							</Text>
							<TextInput
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
								}}
								multiline={true}
								placeholderTextColor="#0C0D0B"
								placeholder="Делаю разные штуки. Люблю помогать людям."
							/>
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
								Связанные приложения
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								marginBottom: 20,
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
								Uknow
							</Text>
							<View
								style={{
									height: 'auto',
									paddingBottom: 15,
									paddingTop: 0,
									flex: 3,
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 1,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'left',
										flex: 1,
									}}
								>
									Синхронизирован
								</Text>
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
								}}
							>
								Rating
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
										color: '#2E41BF',
										fontWeight: 'normal',
										textAlign: 'left',
										flex: 1,
									}}
								>
									Подключить интеграцию
								</Text>
							</TouchableOpacity>
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
							<TouchableOpacity style={{ flex: 1 }} onPress={this.toggleModal}>
								<Text
									style={{
										fontSize: 16,
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
								Соц.сети
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
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
								Facebook
							</Text>
							<View
								style={{
									flex: 3,
									alignItems: 'flex-end',
									justifyContent: 'center',
									borderColor: 'rgba(60, 60, 67, 0.29)',
									borderBottomWidth: 1,
									paddingBottom: 10,
								}}
							>
								<Switch
									onValueChange={this.toggleSwitch}
									value={this.state.switchValue}
									trackColor={{ false: '#e9e9e9', true: '#5238F2' }}
									thumbColor="white"
									ios_backgroundColor={{ false: '#e9e9e9', true: '#5238F2' }}
								/>
							</View>
						</View>
					</View>
					<View style={{ marginBottom: '25%' }} />
				</ScrollView>
				<Modal
					isVisible={this.state.isModalVisible}
					style={{
						width: width,
						height: 265,
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
							Добавление карты
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'flex-start',
							marginBottom: 15,
						}}
					>
						{this.state.bool ? (
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
									flexDirection: 'row',
								}}
							>
								<TextInput
									placeholderTextColor="#BBC5D0"
									placeholder="Номер карты"
									keyboardType="number-pad"
									selectionColor="#5238F2"
									textContentType="creditCardNumber"
									maxLength={16}
									style={{ fontSize: 16, flex: 3 }}
								/>
								<Image
									source={require('../assets/icons/visa.png')}
									style={{ width: 46, height: 15, alignSelf: 'center' }}
								/>
							</View>
						) : (
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
									placeholder="Номер карты"
									keyboardType="number-pad"
									selectionColor="#5238F2"
									textContentType="creditCardNumber"
									maxLength={16}
									onChangeText={() => this.setState({ bool: !this.state.bool })}
									style={{ fontSize: 16 }}
								/>
							</View>
						)}
					</View>

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
								style={{
									fontSize: 16,
								}}
								placeholderTextColor="#BBC5D0"
								placeholder="ММ/ГГ"
								keyboardType="number-pad"
								selectionColor="#5238F2"
								textContentType="creditCardNumber"
								maxLength={5}
							/>
						</View>
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
								style={{
									fontSize: 16,
								}}
								placeholderTextColor="#BBC5D0"
								placeholder="CVV"
								keyboardType="number-pad"
								selectionColor="#5238F2"
								textContentType="creditCardNumber"
								secureTextEntry={true}
								maxLength={3}
							/>
						</View>
					</View>
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
								Добавить карту
							</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		);
	}
}
