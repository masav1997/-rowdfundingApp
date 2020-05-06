import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import MessageCard from '../components/MessageCard';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class MyProjects extends React.Component {
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
						borderBottomRightRadius: 25,
						borderBottomLeftRadius: 25,
						paddingBottom: 15,
					}}
				>
					<View style={{ flex: 1 }} />
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
							Мои проекты
						</Text>
					</View>
					<TouchableOpacity
						style={{ marginTop: '5%', flex: 1, alignSelf: 'flex-end', justifyContent: 'center' }}
						onPress={() => {
							this.props.navigation.navigate('CreateProject');
						}}
					>
						<Image
							source={require('../assets/icons/add_icon.png')}
							style={{ width: 25, height: 25, marginLeft: 30 }}
						/>
					</TouchableOpacity>
				</View>
				<ScrollView style={{ paddingRight: 15, paddingLeft: 15 }} showsVerticalScrollIndicator={false}>
					<TouchableOpacity
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
						onPress={() => {
							this.props.navigation.navigate('Project');
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
								<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width - 150, marginBottom: 5 }}>
									<View
										style={{
											width: '100%',
											height: 7,
											borderRadius: 10,
											borderColor: '#EFF4FC',
											borderWidth: 1.5,
											marginLeft: 5,
											justifyContent: 'center'
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
										marginBottom: 5
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
					<TouchableOpacity
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
						onPress={() => {
							this.props.navigation.navigate('Project');
						}}
					>
						<View style={{ flexDirection: 'row', width: width - 30, paddingRight: 25 }}>
							<Image
								source={require('../assets/icons/avatar5.png')}
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
								<View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width - 150, marginBottom: 5 }}>
									<View
										style={{
											width: '100%',
											height: 7,
											borderRadius: 10,
											borderColor: '#EFF4FC',
											borderWidth: 1.5,
											marginLeft: 5,
											justifyContent: 'center'
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
										marginBottom: 5
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
			</View>
		);
	}
}
