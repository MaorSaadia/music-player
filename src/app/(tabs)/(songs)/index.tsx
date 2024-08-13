import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

import TrackLists from '@/components/TrackLists'
import { colors, screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { useTracks } from '@/store/library'
import { defaultStyles } from '@/styles'

const SongsScreen = () => {
	const { search } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
			headerIconColor: colors.maximumTrackTintColor,
			barTintColor: colors.maximumTrackTintColor,
			hintTextColor: colors.maximumTrackTintColor,
			textColor: colors.text,
		},
	})

	const tracks = useTracks()

	const filteredTracks = useMemo(() => {
		if (!search) return tracks

		return tracks.filter(trackTitleFilter(search))
	}, [search, tracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TrackLists tracks={filteredTracks} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
