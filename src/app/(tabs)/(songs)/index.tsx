import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

import library from '@/assets/data/library.json'
import TrackLists from '@/components/TrackLists'
import { screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { defaultStyles } from '@/styles'

const SongsScreen = () => {
	const { search } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) return library

		return library.filter(trackTitleFilter(search))
	}, [search])

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
