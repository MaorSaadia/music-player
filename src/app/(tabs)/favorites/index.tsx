import library from '@/assets/data/library.json'
import TrackLists from '@/components/TrackLists'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

const FavoritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOption: {
			placeholder: 'Find In Song',
		},
	})

	const favoritesTracks = useMemo(() => {
		return library.filter((track) => track.rating === 1)
	}, [])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				style={{ paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TrackLists scrollEnabled={false} tracks={favoritesTracks} />
			</ScrollView>
		</View>
	)
}

export default FavoritesScreen
