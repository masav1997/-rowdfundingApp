import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class CreateComment extends React.Component {
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
							Ваш комментарий
						</Text>
					</View>
					<View style={{ flex: 1 }} />
				</View>

				<ScrollView showsVerticalScrollIndicator={false} style={{ padding: 15 }}>
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							flex: 1,
							justifyContent: 'center',
							borderBottomWidth: 0.3,
							borderBottomColor: 'rgba(60, 60, 67, 0.29)',
							marginBottom: 35,
							marginTop: 20
						}}
					>
						<TextInput
							style={{
								height: 'auto',
								paddingBottom: 15,
								paddingTop: 0,
								flex: 12,
								fontSize: 16,
							}}
							placeholderTextColor="#BBC5D0"
							placeholder="Ваш комментарий пишется тут"
						/>
					</View>
				</ScrollView>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						flex: 1,
						justifyContent: 'center',
						marginTop: 20,
						marginBottom: 20
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
							Оставить комментарий
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
