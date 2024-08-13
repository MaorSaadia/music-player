import CustomHeader from '@/components/CustomHeader'
import { colors } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Platform, View } from 'react-native'

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: () =>
							Platform.OS === 'android' ? <CustomHeader title="Songs" /> : 'Songs',
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

export default SongsScreenLayout
