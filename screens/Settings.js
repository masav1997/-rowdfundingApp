import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class Settings extends React.Component {
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
							Настройки
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
								Уведомления по проекту
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								borderColor: 'rgba(60, 60, 67, 0.29)',
								borderBottomWidth: 1,
								paddingBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 3,
								}}
							>
								Пожертвования
							</Text>
							<View
								style={{
									flex: 3,
									alignItems: 'flex-end',
									justifyContent: 'center',
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

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 3,
								}}
							>
								Добавление в "Избранное"
							</Text>
							<View
								style={{
									flex: 3,
									alignItems: 'flex-end',
									justifyContent: 'center',
								}}
							>
								<Switch
									onValueChange={this.toggleSwitch1}
									value={this.state.switchValue1}
									trackColor={{ false: '#e9e9e9', true: '#5238F2' }}
									thumbColor="white"
									ios_backgroundColor={{ false: '#e9e9e9', true: '#5238F2' }}
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
								Другие уведомления
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								borderColor: 'rgba(60, 60, 67, 0.29)',
								borderBottomWidth: 1,
								paddingBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 3,
								}}
							>
								Проект завершил сбор
							</Text>
							<View
								style={{
									flex: 3,
									alignItems: 'flex-end',
									justifyContent: 'center',
								}}
							>
								<Switch
									onValueChange={this.toggleSwitch2}
									value={this.state.switchValue2}
									trackColor={{ false: '#e9e9e9', true: '#5238F2' }}
									thumbColor="white"
									ios_backgroundColor={{ false: '#e9e9e9', true: '#5238F2' }}
								/>
							</View>
						</View>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									flex: 3,
								}}
							>
								Новый проект у пользователя
							</Text>
							<View
								style={{
									flex: 3,
									alignItems: 'flex-end',
									justifyContent: 'center',
								}}
							>
								<Switch
									onValueChange={this.toggleSwitch3}
									value={this.state.switchValue3}
									trackColor={{ false: '#e9e9e9', true: '#5238F2' }}
									thumbColor="white"
									ios_backgroundColor={{ false: '#e9e9e9', true: '#5238F2' }}
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
