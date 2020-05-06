import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class Comments extends React.Component {
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
						padding: 5
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
							Комментарии
						</Text>
					</View>
					<TouchableOpacity
						style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'center'}}
						onPress={() => {
							this.props.navigation.navigate('CreateTopic');
						}}
					>
						<Image
							source={require('../assets/icons/add_icon.png')}
							style={{ width: 25, height: 25, marginLeft: 30 }}
						/>
					</TouchableOpacity>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<TouchableOpacity
						style={{
							width: '100%',
							height: 'auto',
							backgroundColor: 'white',
							padding: 15,
							marginBottom: 10,
						}}
						onPress={() => {
							this.props.navigation.navigate('Topic');
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
								}}
							>
								Организационные вопросы
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
						<View style={{ flexDirection: 'row', width: '100%', marginTop: 3 }}>
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
								154 комментария
							</Text>

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
					</TouchableOpacity>
					<TouchableOpacity
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
								}}
							>
								Технические проблемы и уточнения
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
						<View style={{ flexDirection: 'row', width: '100%', marginTop: 3 }}>
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
								154 комментария
							</Text>

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
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}
