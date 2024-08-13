import { Stack } from 'expo-router'
import { Platform, View } from 'react-native'

import CustomHeader from '@/components/CustomHeader'
import { colors } from '@/constants/tokens'
import { defaultStyles } from '@/styles'

const ArtistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: () =>
							Platform.OS === 'android' ? <CustomHeader title="Artists" /> : 'Artists',
						headerStyle: {
							backgroundColor: colors.background,
						},
						headerTitleStyle: {
							color: colors.text,
						},
						headerTintColor: colors.text,
						headerTransparent: Platform.OS === 'ios',
						headerShadowVisible: false,
					}}
				/>
			</Stack>
		</View>
	)
}

export default ArtistsScreenLayout
