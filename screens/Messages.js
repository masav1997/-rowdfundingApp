import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image } from 'react-native';
import MessageCard from '../components/MessageCard';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class Messages extends React.Component {
	render() {
		return (
			<View style={{ height: '100%', backgroundColor: 'white' }}>
				<StatusBar barStyle="light-content" />
				<View
					style={{
						backgroundColor: '#5339F2',
						height: '15%',
						width: width,
						alignItems: 'center',
						justifyContent: 'flex-end',
						borderBottomRightRadius: 25,
						borderBottomLeftRadius: 25,
						paddingBottom: 15,
					}}
				>
					<Text style={{ fontSize: 17, color: 'white', fontWeight: '600' }}>Сообщения</Text>
				</View>
				<ScrollView style={{ paddingRight: 15, paddingLeft: 15 }} showsVerticalScrollIndicator={false}>
						<MessageCard
							image={require('../assets/icons/pic1.png')}
							data="18 Янв 2020  23:45"
							title="Технические проблемы и уточнения"
							description="Натуральносухая куртка от Вули - создана без..."
							message="15 новых сообщений"
						/>
						<MessageCard
							image={require('../assets/icons/pic2.png')}
							data="18 Янв 2020  23:45"
							title="Организационные вопросы"
							description="Натуральносухая куртка от Вули - создана без..."
							message="8 новых сообщений"
						/>
						<MessageCard
							image={require('../assets/icons/pic3.png')}
							data="18 Янв 2020  23:45"
							title="Технические проблемы и уточнения"
							description="Натуральносухая куртка от Вули - создана без..."
							message="6 новых сообщений"
						/>
						<MessageCard
							image={require('../assets/icons/pic4.png')}
							data="18 Янв 2020  23:45"
							title="Организационные вопросы"
							description="Натуральносухая куртка от Вули - создана без..."
							message="4 новых сообщений"
						/>
						<MessageCard
							image={require('../assets/icons/pic5.png')}
							data="18 Янв 2020  23:45"
							title="Технические проблемы и уточнения"
							description="Натуральносухая куртка от Вули - создана без..."
							message="32 новых сообщений"
						/>
						<View style={{marginBottom: '25%'}}/>
				</ScrollView>
			</View>
		);
	}
}
