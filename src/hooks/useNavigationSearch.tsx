import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

export const useNavigationSearch = (options: any) => {
	const [search, setSearch] = useState('')
	const navigation = useNavigation()

	useEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...options.searchBarOptions,
				onChangeText: (event: { nativeEvent: { text: string } }) =>
					setSearch(event.nativeEvent.text),
			},
		})
	}, [navigation])

	return { search, setSearch, searchBarOptions: options.searchBarOptions }
}
