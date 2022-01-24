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
import { StyleSheet, View } from 'react-native';
import ConditionRender from '../components/ConditionRender';
import Info from '../components/Info/Info';

interface SpeechIntroProps {
	mainText: React.ReactChild;
	subText: React.ReactChild;
}

const SpeechIntro: React.FC<SpeechIntroProps> = ({ mainText, subText }) => {
	return (
		<View style={styles.background}>
			<View style={styles.content}>
				<Info style={styles.topContent}>
					<Info.MainText text={mainText} style={styles.topMainTextStyle} />

					<Info.SubText text={subText} style={styles.topSubTextStyle} />
				</Info>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	background: { flex: 1 },
	tutor: { position: 'absolute', bottom: 0, right: 0 },
	content: { paddingHorizontal: 15 },
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
	action: { position: 'absolute', bottom: 40, alignSelf: 'center' },
});

export default ConditionRender(SpeechIntro);
