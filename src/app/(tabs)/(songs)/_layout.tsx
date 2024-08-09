import { colors } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

type CustomHeaderProps = {
	title: string
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => (
	<View style={styles.headerContainer}>
		<Text style={styles.headerTitle}>{title}</Text>
	</View>
)

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

const styles = StyleSheet.create({
	headerContainer: {
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	headerTitle: {
		fontSize: 28,
		color: colors.text,
		fontWeight: 'bold',
	},
})

export default SongsScreenLayout
