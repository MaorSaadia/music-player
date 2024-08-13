import { colors } from '@/constants/tokens'
import { StyleSheet, Text, View } from 'react-native'

type CustomHeaderProps = {
	title: string
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => (
	<View style={styles.headerContainer}>
		<Text style={styles.headerTitle}>{title}</Text>
	</View>
)

export default CustomHeader

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
