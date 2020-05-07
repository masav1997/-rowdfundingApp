import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default class MessageCard extends React.Component {
	render() {
		const { image, data, title, description, message } = this.props;
		const viewStyle = {
			width: width - 30,
					height: 'auto',
					padding: 10,
					borderWidth: 1.5,
					borderColor: '#EFF4FC',
                    borderRadius: 10,
                    marginTop: 15,
                    marginBottom: -10
		};
		
		const viewStyle1 = {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'flex-start',
			top: '10%',
		};
		
		const textStyle = {
			fontWeight: 'bold',
			fontSize: 9,
			textAlign: 'center',
		};
		
		const batteryStyle = {
			width: 32,
			height: 10,
			borderRadius: 2,
			borderColor: '#000',
			borderWidth: 0.5,
			alignItems: 'flex-start',
			justifyContent: 'center',
			padding: 1,
		};
		
		const batteryStyle1 = {
			width: '95%',
			height: 6,
			backgroundColor: '#000',
		};
		
		const viewStyle2 = {
			flex: 3,
			alignItems: 'center',
			justifyContent: 'center',
		};
		
		const viewStyle3 = {
			flexDirection: 'row',
			width: width,
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			marginTop: -20,
		};
		
		const viewStyle4 = {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
		};
		
		const viewStyle5 = {
			flexDirection: 'row',
			width: width,
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			marginTop: 5,
		};
		
		const viewStyle6 = {
			flexDirection: 'row',
			width: width,
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			marginTop: 10,
		};
		
		const viewStyle7 = {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
			marginBottom: 10,
		};
		return (
			<View
				style={viewStyle}
			>
				<View style={{ flexDirection: 'row', width: '100%', paddingRight: 25 }}>
					<Image source={image} style={{ width: 30, height: 30 }} />
					<View style={{ flexDirection: 'column' }}>
						<Text
							style={{
								fontSize: 11,
								color: '#BBC5D0',
								fontWeight: '600',
								textAlign: 'left',
								marginLeft: 5,
								marginBottom: 2,
							}}
						>
							{data}
						</Text>
						<Text
							style={{
								fontSize: 15,
								color: '#0C0D0B',
								fontWeight: '600',
								textAlign: 'left',
								marginLeft: 5,
							}}
						>
							{title}
						</Text>
						<Text
							style={{
								fontSize: 11,
								color: '#BBC5D0',
								fontWeight: '600',
								textAlign: 'left',
								marginLeft: 5,
								marginBottom: 5,
							}}
						>
							{description}
						</Text>
						<Text
							style={{
								fontSize: 13,
								color: '#05C53B',
								fontWeight: '500',
								textAlign: 'left',
								marginLeft: 5,
							}}
						>
							{message}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
