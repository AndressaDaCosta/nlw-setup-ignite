import './src/lib/dayjs'
import { StatusBar, Button } from 'react-native'
import { useEffect } from 'react'

import {
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold
} from '@expo-google-fonts/inter'

import * as Notifications from 'expo-notifications'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold
	})

	async function schedulePushNotifications() {
		const schedule = await Notifications.getAllScheduledNotificationsAsync()
		console.log('Agendadas: ', schedule)

		if (schedule.length > 0) {
			await Notifications.cancelAllScheduledNotificationsAsync()
		}
		const trigger = new Date(Date.now())
		trigger.setMinutes(trigger.getMinutes() + 1)

		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'Olá, Andressa! 😀',
				body: 'Você praticou seus hábitos hoje?'
			},
			trigger
		})
	}

	useEffect(() => {
		schedulePushNotifications()
	}, [])

	if (!fontsLoaded) {
		return <Loading />
	}
	return (
		<>
			<Routes />
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</>
	)
}
