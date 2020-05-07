import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class SearchUser extends React.Component {
	state = {
		switchValue: false,
		isModalVisible: false,
		isDropdown: false,
		isDropdown1: false,
		isCat1: false,
		isCat2: false,
		isCat3: false,
		isCat4: false,
		isCat5: false,
		isCat6: false,
		isRadio: false,
		isRadio1: false,
		bool: false,
	};

	toggleSearch = () => {
		this.props.navigation.navigate('Search');
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	toggleDropdown = () => {
		this.setState({ isDropdown: !this.state.isDropdown });
	};

	toggleCat1 = () => {
		this.setState({ isCat1: !this.state.isCat1 });
	};

	toggleCat2 = () => {
		this.setState({ isCat2: !this.state.isCat2 });
	};

	toggleCat3 = () => {
		this.setState({ isCat3: !this.state.isCat3 });
	};

	toggleDropdown1 = () => {
		this.setState({ isDropdown1: !this.state.isDropdown1 });
	};

	toggleCat4 = () => {
		this.setState({ isCat4: !this.state.isCat4 });
	};

	toggleCat5 = () => {
		this.setState({ isCat5: !this.state.isCat5 });
	};

	toggleCat6 = () => {
		this.setState({ isCat6: !this.state.isCat6 });
	};

	toggleRadio = () => {
		this.setState({ isRadio: !this.state.isRadio });
	};

	toggleRadio1 = () => {
		this.setState({ isRadio1: !this.state.isRadio1 });
	};
	render() {
		const { value } = this.props;
		return (
			<View style={{ height: '100%', backgroundColor: 'white' }}>
				<StatusBar barStyle="dark-content" />
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
						marginTop: 35
					}}
				>
					<TouchableOpacity style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
						<Image style={{ width: 21, height: 21 }} source={require('../assets/icons/right.png')} />
					</TouchableOpacity>
					<View style={{ flex: 11 }}>
						<TextInput
							style={{
								fontSize: 17,
							}}
							placeholderTextColor="#BBC5D0"
							placeholder="Ввелите ник пользователя"
							keyboardType="default"
							selectionColor="#5238F2"
						/>
					</View>
				</View>
				<ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
					<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
						<View style={{ marginRight: 5}}>
							<Image source={require('../assets/icons/avatar3.png')} style={{ width: 24, height: 24 }} />
						</View>
						<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
							<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>Kyle Russell</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
						<View style={{ marginRight: 5}}>
							<Image source={require('../assets/icons/avatar3.png')} style={{ width: 24, height: 24 }} />
						</View>
						<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
							<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>Kyle Russell</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ flexDirection: 'row', marginBottom: 25 }}>
						<View style={{ marginRight: 5}}>
							<Image source={require('../assets/icons/avatar3.png')} style={{ width: 24, height: 24 }} />
						</View>
						<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
							<Text style={{ fontSize: 16, color: '#0C0D0B', fontWeight: '500' }}>Kyle Russell</Text>
						</View>
					</TouchableOpacity>
					<View style={{ marginBottom: '25%' }} />
				</ScrollView>
			</View>
		);
	}
}
