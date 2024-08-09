import React from 'react'
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native'

import { utilsStyles } from '@/styles'
import { Track } from 'react-native-track-player'
import TrackListItem from './TrackListItem'

export type TracksListProps = Partial<
	FlatListProps<Track> & {
		tracks: Track[]
	}
>

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

const TrackLists = ({ tracks, ...flatlistProps }: TracksListProps) => {
	const handleTrackSelect = (track: Track) => {
		console.log(track)
	}

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}

export default TrackLists

const styles = StyleSheet.create({})
