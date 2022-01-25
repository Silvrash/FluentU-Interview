/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import $Score from '../assets/score.svg';
import Header from '../components/Header';
import SpeechScore from '../speech.score/SpeechScore';
import SpeechDialogue from '../speech/SpeechDialogue';
import SpeechIntro from '../speech/SpeechIntro';
import useWorkspace from './useWorkspace';

const Workspace = () => {
	const state = useWorkspace();

	return (
		<ImageBackground source={require('../assets/background.png')} style={styles.background}>
			{/* <Image source={require('../assets/tutor.png')} style={styles.tutor} /> */}

			<Video
				source={state.source}
				ref={state.player}
				style={styles.tutor}
				paused={state.isPaused}
				onProgress={state.onProgress}
				onEnd={state.onVideoEnd}
				resizeMode="cover"
			/>

			<Header  onReset={state.reset}/>

			<SpeechIntro
				renderIf={state.showIntro}
				mainText={state.intro?.spanish}
				subText={state.intro?.eng}
			/>
			<SpeechDialogue
				renderIf={state.showDialogue}
				mainText={
					state.isPaused
						? state.userText ?? state.userPartialResult
						: state.dialogue?.spanish
				}
				subText={state.dialogue?.eng}
				speakMode={state.isPaused}
				onVoiceStart={state.startRecognizing}
				onVoiceEnd={state.stopRecognizing}
			/>
			<SpeechScore
				renderIf={state.showCompleted}
				subText={state.dialogue?.spanish}
				showGradient
				action={
					<TouchableOpacity onPress={state.onContinue} style={styles.continueBtn}>
						<Text style={styles.continueText}>CONTINUE</Text>
					</TouchableOpacity>
				}
				score={<$Score style={styles.score} />}
			/>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: { flex: 1 },
	tutor: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
	continueBtn: {
		backgroundColor: '#1E1F27',
		width: 162,
		height: 42.74,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
	},
	continueText: { color: '#fff', fontWeight: 'bold' },
	pagerView: {
		flex: 1,
	},

	topContent: { marginTop: 18, backgroundColor: '#000000' },
	topMainTextStyle: { color: '#fff' },
	topSubTextStyle: { color: '#fff' },
	bottomContent: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		paddingHorizontal: 15,
		height: 336,
		justifyContent: 'center',
	},
	bottomInfo: { marginBottom: 118, minHeight: 126 },
	bottomMainTextStyle: { color: '#000' },
	bottomSubTextStyle: { color: '#000' },
	bookmark: { position: 'absolute', top: 8, right: 5 },
	micContainer: {
		position: 'absolute',
		bottom: -30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	micIcon: { position: 'absolute' },
	topClip: { position: 'absolute', top: -75, justifyContent: 'center', alignItems: 'center' },
	score: { position: 'absolute', top: 55, left: 85 },
});

export default Workspace;
