import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class Topic extends React.Component {
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
						style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'center' }}
						onPress={() => {
							this.props.navigation.navigate('CreateComment');
						}}
					>
						<Image
							source={require('../assets/icons/messages.png')}
							style={{ width: 25, height: 25, marginLeft: 30, tintColor: 'white' }}
						/>
					</TouchableOpacity>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={{
							width: '100%',
							height: 'auto',
							backgroundColor: 'white',
							padding: 15,
							marginBottom: 10,
						}}
					>
						<View style={{ flexDirection: 'row', width: '100%' }}>
							<Image
								source={require('../assets/icons/avatar2.png')}
								style={{ width: 24, height: 24, borderRadius: 24 }}
							/>
							<View style={{ flex: 2, alignSelf: 'center' }}>
								<Text
									style={{
										fontSize: 13,
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
								style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}
								onPress={() => {
									this.props.navigation.navigate('UserProjects');
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										alignSelf: 'flex-end',
										marginRight: 10,
										alignSelf: 'center',
									}}
								>
									18 Янв 2020 23:45
								</Text>
							</TouchableOpacity>
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
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									marginLeft: 29,
								}}
							>
								Duis qui exercitation do exercitation occaecat exercitation cillum veniam ad amet magna
								eu sunt. Veniam laboris adipisicing labore sit ipsum...
							</Text>
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
						<View style={{ flexDirection: 'row', width: '100%' }}>
							<Image
								source={require('../assets/icons/avatar2.png')}
								style={{ width: 24, height: 24, borderRadius: 24 }}
							/>
							<View style={{ flex: 2, alignSelf: 'center' }}>
								<Text
									style={{
										fontSize: 13,
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
								style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}
								onPress={() => {
									this.props.navigation.navigate('UserProjects');
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										alignSelf: 'flex-end',
										marginRight: 10,
										alignSelf: 'center',
									}}
								>
									18 Янв 2020 23:45
								</Text>
							</TouchableOpacity>
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
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									marginLeft: 29,
								}}
							>
								Duis qui exercitation do exercitation occaecat exercitation cillum veniam ad amet magna
								eu sunt. Veniam laboris adipisicing labore sit ipsum...
							</Text>
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
						<View style={{ flexDirection: 'row', width: '100%' }}>
							<Image
								source={require('../assets/icons/avatar2.png')}
								style={{ width: 24, height: 24, borderRadius: 24 }}
							/>
							<View style={{ flex: 2, alignSelf: 'center' }}>
								<Text
									style={{
										fontSize: 13,
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
								style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}
								onPress={() => {
									this.props.navigation.navigate('UserProjects');
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										alignSelf: 'flex-end',
										marginRight: 10,
										alignSelf: 'center',
									}}
								>
									18 Янв 2020 23:45
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								width: '100%',
								marginTop: 5,
							}}
						>
							<View style={{height: 'auto', width: 'auto', padding: 5, backgroundColor: '#05C53B', borderRadius: 5, alignItems: 'center', marginLeft: 29, marginBottom: 5,}}>
								<Text style={{fontSize: 11, color: 'white'}}>Создатель</Text>
							</View>
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
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									marginLeft: 29,
								}}
							>
								Duis qui exercitation do exercitation occaecat exercitation cillum veniam ad amet magna
								eu sunt. Veniam laboris adipisicing labore sit ipsum...
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
