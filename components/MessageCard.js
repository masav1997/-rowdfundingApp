import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default class MessageCard extends React.Component {
	render() {
        const { image, data, title, description, message } = this.props;
		return (
			<View
				style={{
					width: width - 30,
					height: 'auto',
					padding: 10,
					borderWidth: 1.5,
					borderColor: '#EFF4FC',
                    borderRadius: 10,
                    marginTop: 15,
                    marginBottom: -10
				}}
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
