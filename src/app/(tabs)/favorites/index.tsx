import TrackLists from '@/components/TrackLists'
import { colors, screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useFavorites } from '@/store/library'
import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

const FavoritesScreen = () => {
	const { search } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
			headerIconColor: colors.maximumTrackTintColor,
			barTintColor: colors.maximumTrackTintColor,
			hintTextColor: colors.maximumTrackTintColor,
			textColor: colors.text,
		},
	})
	const favoritesTracks = useFavorites().favorites

	const filteredFavoritesTracks = useMemo(() => {
		if (!search) return favoritesTracks

		return favoritesTracks.filter(trackTitleFilter(search))
	}, [search, favoritesTracks])

	// const filteredFavoritesTracks = useMemo(() => {
	// 	return favoritesTracks
	// }, [favoritesTracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				style={{ paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TrackLists scrollEnabled={false} tracks={filteredFavoritesTracks} />
			</ScrollView>
		</View>
	)
}

export default FavoritesScreen
