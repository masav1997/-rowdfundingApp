import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class UserProjects extends React.Component {
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
			<View style={{ height: '100%', backgroundColor: 'white' }}>
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
							Проекты пользователя
						</Text>
					</View>
					<View style={{ flex: 1 }} />
				</View>

				<ScrollView style={{ paddingRight: 15, paddingLeft: 15 }} showsVerticalScrollIndicator={false}>
					<View
						style={{
							width: width - 30,
							height: 'auto',
							padding: 10,
							borderWidth: 1.5,
							borderColor: '#EFF4FC',
							borderRadius: 10,
							marginTop: 15,
							marginBottom: -10,
						}}
					>
						<Image
							source={require('../assets/icons/pic6.png')}
							style={{ width: width - 52, height: 160, borderRadius: 5 }}
						/>

						<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 15 }}>
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
							}}
						>
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
					</View>
					<View
						style={{
							width: width - 30,
							height: 'auto',
							padding: 10,
							borderWidth: 1.5,
							borderColor: '#EFF4FC',
							borderRadius: 10,
							marginTop: 20,
							marginBottom: -10,
						}}
					>
						<Image
							source={require('../assets/icons/pic7.png')}
							style={{ width: width - 52, height: 160, borderRadius: 5 }}
						/>

						<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 15 }}>
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
							}}
						>
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
							<TouchableOpacity style={{ padding: 3, width: 'auto', height: 'auto', marginRight: 10 }}>
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
					</View>
					<View style={{ marginBottom: '25%' }} />
				</ScrollView>
			</View>
		);
	}
}
