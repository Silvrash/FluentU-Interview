/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Voice from '@react-native-community/voice';
import React from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import BookmarkIcon from '../assets/icon_bookmark.svg';
import $MicIcon from '../assets/mic.svg';
import $CheckIcon from '../assets/check.svg';
import SpeakerIcon from '../assets/speaker.svg';
import ConditionRender, { ConditionRenderComponent } from '../components/ConditionRender';
import Info from '../components/Info/Info';

interface SpeechIntroProps {
	mainText: React.ReactChild;
	subText: React.ReactChild;
	speakMode?: boolean;
	action?: React.ReactChild;
	onVoiceStart?: () => void;
	onVoiceEnd?: () => void;
}

const SpeechDialogue: React.FC<SpeechIntroProps> = ({
	mainText,
	subText,
	speakMode,
	action,
	onVoiceEnd,
	onVoiceStart,
}) => {
	const FooterWrapper = React.useMemo(
		() =>
			speakMode ? (
				<ImageBackground
					source={require('../assets/blue_gradient.png')}
					style={styles.bottomContent}
				/>
			) : (
				<View style={styles.bottomContent} />
			),
		[speakMode]
	);

	return (
		<View style={styles.background}>
			{React.cloneElement(FooterWrapper, {
				children: React.Children.toArray(
					<View>
						<Info style={styles.bottomInfo}>
							<BookmarkIcon style={styles.bookmark} />
							{speakMode && (
								<Info.SubText text={'Speak now...'} style={styles.speakNow} />
							)}

							<Info.MainText
								icon={!speakMode && <SpeakerIcon />}
								text={mainText}
								style={styles.bottomMainTextStyle}
							/>

							{!speakMode && (
								<Info.SubText text={subText} style={styles.bottomSubTextStyle} />
							)}
							<ConditionRenderComponent>
								<View style={styles.micContainer}>
									<Image source={require('../assets/mic_container.png')} />
									<TouchableOpacity
										style={styles.micIcon}
										onPress={!speakMode ? onVoiceStart : onVoiceEnd}
									>
										{!speakMode ? <$MicIcon /> : <$CheckIcon />}
									</TouchableOpacity>
								</View>
							</ConditionRenderComponent>
						</Info>
					</View>
				),
			})}
			{action && <View style={styles.action}>{action}</View>}
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
	speakNow: { marginTop: -50 },
});

export default ConditionRender(SpeechDialogue);
