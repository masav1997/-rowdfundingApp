import * as React from 'react';
import {
	View,
	Dimensions,
	StatusBar,
	Text,
	Image,
	ImageBackground,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class Profile extends React.Component {
	render() {
		return (
			<View style={{ height: '100%', backgroundColor: '#F1F4FC' }}>
				<StatusBar barStyle="light-content" />
				<ImageBackground
					resizeMode={'cover'}
					style={{
						height: '45%',
						width: width,
						alignItems: 'center',
						backgroundColor: 'white',
					}}
					source={require('../assets/icons/avatar1.png')}
					imageStyle={{
						flex: 1,
						width: width,
						height: '100%',
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
						justifyContent: 'flex-end',
					}}
				>
					<SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
						<View style={{ flex: 1 }} />
						<Text
							style={{
								fontSize: 17,
								flex: 1,
								color: 'white',
								fontWeight: '600',
								marginTop: '5%',
								textAlign: 'center',
							}}
						>
							Профиль
						</Text>
						<View style={{ flex: 1 }} />
					</SafeAreaView>
				</ImageBackground>

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
						<View style={{ flexDirection: 'row', width: '100%' }}>
							<View style={{ flexDirection: 'column', flex: 1 }}>
								<Text
									style={{
										fontSize: 20,
										color: '#0C0D0B',
										fontWeight: '600',
										textAlign: 'left',
										marginLeft: 5,
										marginBottom: 2,
									}}
								>
									Константин Константинопольский
								</Text>
								<Text
									style={{
										fontSize: 14,
										color: '#BBC5D0',
										fontWeight: 'normal',
										textAlign: 'left',
										marginLeft: 5,
										marginBottom: 5,
									}}
								>
									newuser@gmail.com
								</Text>
							</View>
							<View
								style={{
									width: 40,
									height: 40,
									borderRadius: 40,
									backgroundColor: '#05C53B',
									justifyContent: 'center',
								}}
							>
								<Text
									style={{
										fontSize: 17,
										color: 'white',
										fontWeight: 'bold',
										textAlign: 'center',
									}}
								>
									4.8
								</Text>
							</View>
						</View>
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
						<TouchableOpacity
							style={{ flexDirection: 'row', width: '100%', marginBottom: 30 }}
							onPress={() => {
								this.props.navigation.navigate('ProfileEdit');
							}}
						>
							<Image
								source={require('../assets/icons/edit.png')}
								style={{ width: 25, height: 25, alignSelf: 'center' }}
							/>
							<Text
								style={{
									fontSize: 17,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 10,
									marginBottom: 2,
								}}
							>
								Данные профиля
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={{ flexDirection: 'row', width: '100%', marginBottom: 30 }}
							onPress={() => {
								this.props.navigation.navigate('Settings');
							}}
						>
							<Image
								source={require('../assets/icons/settings.png')}
								style={{ width: 25, height: 25, alignSelf: 'center' }}
							/>
							<Text
								style={{
									fontSize: 17,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 10,
									marginBottom: 2,
								}}
							>
								Настройки
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={{ flexDirection: 'row', width: '100%', marginBottom: 30 }}
							onPress={() => {
								this.props.navigation.navigate('Balance');
							}}
						>
							<Image
								source={require('../assets/icons/invoice.png')}
								style={{ width: 25, height: 25, alignSelf: 'center' }}
							/>
							<Text
								style={{
									fontSize: 17,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 10,
									marginBottom: 2,
								}}
							>
								Баланс
							</Text>
							<Text
								style={{
									fontSize: 14,
									color: '#BBC5D0',
									fontWeight: '500',
									textAlign: 'right',
									flex: 1,
									marginLeft: 10,
									marginBottom: 2,
								}}
							>
								255,000.00 руб.
							</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ flexDirection: 'row', width: '100%', marginBottom: 30 }} onPress={() => {
								this.props.navigation.navigate('ProfilePage');
							}}>
							<Image
								source={require('../assets/icons/about.png')}
								style={{ width: 25, height: 25, alignSelf: 'center' }}
							/>
							<Text
								style={{
									fontSize: 17,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 10,
									marginBottom: 2,
								}}
							>
								О приложении
							</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ flexDirection: 'row', width: '100%' }}>
							<Text
								style={{
									fontSize: 17,
									color: '#FB0000',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 35,
									marginBottom: 2,
								}}
							>
								Выйти
							</Text>
						</TouchableOpacity>
					</View>

					<View style={{ marginBottom: '25%' }} />
				</ScrollView>
			</View>
		);
	}
}
