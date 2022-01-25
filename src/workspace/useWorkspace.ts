import Voice, {
	SpeechEndEvent,
	SpeechErrorEvent,
	SpeechResultsEvent,
	SpeechStartEvent,
	SpeechVolumeChangeEvent,
} from '@react-native-community/voice';
import { useEffect, useReducer, useRef, useState } from 'react';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import { correctVideoTimestamps, inCorrectVideoTimestamps } from './data';
import { Actions } from './types';

interface HookState {
	action: Actions;
	userText: string;
	videoEnded: boolean;
	videoTimestamps: typeof correctVideoTimestamps | typeof inCorrectVideoTimestamps;
	currentTime: number;
	userPartialResult: string;
	isCorrect: boolean;
}

const initialState: HookState = {
	action: Actions.none,
	userText: '',
	videoEnded: false,
	videoTimestamps: correctVideoTimestamps,
	currentTime: 0,
	userPartialResult: '',
	isCorrect: false,
};

function reducer(state: HookState, newState: Partial<HookState>) {
	return { ...state, ...newState };
}

const useWorkspace = () => {
	const [
		{
			action,
			userText,
			videoEnded,
			videoTimestamps,
			currentTime,
			userPartialResult,
			isCorrect,
		},
		updateState,
	] = useReducer(reducer, initialState);

	const player = useRef<Video>(null);
	const intro = videoTimestamps.intro.find((i) => i.start <= currentTime && i.end >= currentTime);
	const dialogue = videoTimestamps.dialogue.find(
		(i) => i.start <= currentTime && i.end >= currentTime
	);

	useEffect(() => {
		if (!player) return;

		function onSpeechStart(e: SpeechStartEvent) {
			console.log('onSpeechStart:', e);
			updateState({ action: Actions.speaking, isCorrect: false });
		}
		function onSpeechResults(e: SpeechResultsEvent) {
			console.log('onSpeechResults: ', e);
			const text = e.value.join(' ');
			setTimeout(() => {
				if (text.toLowerCase() === dialogue?.spanish.toLowerCase()) {
					updateState({ isCorrect: true });
					Voice.destroy().then(Voice.removeAllListeners);
				}
			}, 300);
			updateState({ userText: text });
		}
		function onSpeechPartialResults(e: SpeechResultsEvent) {
			console.log('onSpeechPartialResults: ', e);
			updateState({ userPartialResult: e.value.join(' ') });
		}

		function onSpeechEnd(e: SpeechEndEvent) {
			updateState({ action: Actions.done });
		}

		function onSpeechError(e: SpeechErrorEvent) {
			console.log('onSpeechError: ', e);
			updateState({ action: Actions.done });
		}

		function onSpeechVolumeChanged(e: SpeechVolumeChangeEvent) {}

		Voice.onSpeechStart = onSpeechStart;
		Voice.onSpeechEnd = onSpeechEnd;
		Voice.onSpeechError = onSpeechError;
		Voice.onSpeechResults = onSpeechResults;
		Voice.onSpeechPartialResults = onSpeechPartialResults;
		Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
		return () => {
			Voice.destroy().then(Voice.removeAllListeners);
		};
	}, [dialogue?.eng]);

	/**
	 * start listening for speech
	 */
	async function startRecognizing() {
		try {
			await Voice.start('es');
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * stop listening for speech
	 */
	async function stopRecognizing() {
		await Voice.stop().catch((e) => console.log(e));
		Voice.removeAllListeners();
		updateState({ userText: '', userPartialResult: '' });
	}

	/**
	 * update video progress
	 */
	function onProgress(progress: OnProgressData) {
		updateState({ currentTime: progress.currentTime });
	}

	/**
	 * when session is done, we reset to initial state
	 */
	function onContinue() {
		updateState({
			action: Actions.none,
			isCorrect: false,
			userText: '',
			userPartialResult: '',
		});
	}

	function onVideoEnd() {
		updateState({
			videoEnded: true,
			videoTimestamps:
				videoTimestamps.type === 'correct'
					? inCorrectVideoTimestamps
					: correctVideoTimestamps,
		});
		player.current?.seek(0);
	}

	function reset() {
		updateState(initialState);
		player.current?.seek(0);
	}

	return {
		...videoTimestamps,
		userText,
		userPartialResult,
		intro,
		dialogue,
		isPaused: action === Actions.speaking || action === Actions.done,
		showDialogue: !!dialogue?.eng && !isCorrect,
		showCompleted: isCorrect,
		showIntro: !!intro,
		player,
		action,
		videoEnded,
		onProgress,
		onVideoEnd,
		startRecognizing,
		stopRecognizing,
		onContinue,
		reset,
	};
};

export default useWorkspace;
