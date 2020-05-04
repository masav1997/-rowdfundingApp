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

export default class ProfilePage extends React.Component {
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
						<TouchableOpacity
							style={{ marginTop: '5%', flex: 1, alignSelf: 'flex-start', justifyContent: 'center' }}
							onPress={() => this.props.navigation.goBack()}
						>
							<Image
								source={require('../assets/icons/back_icon.png')}
								style={{ width: 32, height: 32, marginLeft: 15 }}
							/>
						</TouchableOpacity>
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
									Company/User name
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
									Все проекты
								</Text>
							</View>
							<TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
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
							<TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
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
									Duis qui exercitation do exercitation occaecat exercitation cillum veniam ad amet
									magna eu sunt. Veniam laboris adipisicing labore sit ipsum ea ea excepteur culpa
									commodo veniam. Incididunt excepteur cillum esse sunt ipsum ipsum elit ipsum nulla
									nostrud reprehenderit sit elit. Adipisicing qui Duis qui exercitation do
									exercitation occaecat exercitation cillum veniam ad amet magna eu sunt. Veniam
									laboris adipisicing labore sit ipsum ea ea excepteur culpa commodo veniam.
									Incididunt excepteur cillum esse sunt ipsum ipsum elit ipsum nulla nostrud
									reprehenderit sit elit. Adipisicing qui
								</Text>
							</View>
						</View>
					</View>

					<View style={{ marginBottom: '25%' }} />
				</ScrollView>
			</View>
		);
	}
}
