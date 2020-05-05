import * as React from 'react';
import {
	View,
	Dimensions,
	StatusBar,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class Search extends React.Component {
	render() {
		const { value } = this.props;
		return (
			<View style={{ height: '100%', backgroundColor: 'white' }}>
				<StatusBar barStyle="light-content" />
				<View
					style={{
						flexDirection: 'row',
						width: width - 30,
						alignSelf: 'center',
						height: 36,
						backgroundColor: '#F1F4FC',
						borderRadius: 10,
						marginTop: 15,
						alignItems: 'center',
						paddingHorizontal: 5,
						marginBottom: 15,
					}}
				>
					<TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.goBack()}>
						<Image style={{ width: 21, height: 21 }} source={require('../assets/icons/right.png')} />
					</TouchableOpacity>
					<View style={{ flex: 11 }}>
						<TextInput
							style={{
								fontSize: 17,
							}}
							placeholderTextColor="#0C0D0B"
							placeholder={value}
							keyboardType="default"
							selectionColor="#5238F2"
						/>
					</View>
					<TouchableOpacity
						style={{
							flex: 1,
							width: '100%',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image style={{ width: 20, height: 20 }} source={require('../assets/icons/filter.png')} />
					</TouchableOpacity>
				</View>
					<ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
						<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../assets/icons/hashtag.png')}
									style={{ width: 40, height: 40 }}
								/>
							</View>
							<View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>#project</Text>
								<Text style={{ fontSize: 13, color: '#BBC5D0', fontWeight: '500' }}>305 проектов</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../assets/icons/hashtag.png')}
									style={{ width: 40, height: 40 }}
								/>
							</View>
							<View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>#project</Text>
								<Text style={{ fontSize: 13, color: '#BBC5D0', fontWeight: '500' }}>305 проектов</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../assets/icons/hashtag.png')}
									style={{ width: 40, height: 40 }}
								/>
							</View>
							<View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>#project</Text>
								<Text style={{ fontSize: 13, color: '#BBC5D0', fontWeight: '500' }}>305 проектов</Text>
							</View>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row', marginBottom: 10 }}>
							<Text style={{ fontSize: 17, color: '#BBC5D0', fontWeight: '500' }}>Проекты (35)</Text>
						</View>
						<TouchableOpacity
							style={{
								width: width - 30,
								height: 'auto',
								padding: 10,
								borderWidth: 1.5,
								borderColor: '#EFF4FC',
								borderRadius: 10,
								marginBottom: 10,
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
									<View
										style={{
											flexDirection: 'row',
											flexWrap: 'wrap',
											width: width - 150,
											marginBottom: 5,
										}}
									>
										<View
											style={{
												width: '100%',
												height: 7,
												borderRadius: 10,
												borderColor: '#EFF4FC',
												borderWidth: 1.5,
												marginLeft: 5,
												justifyContent: 'center',
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
											marginBottom: 5,
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
