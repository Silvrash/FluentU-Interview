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
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import BookmarkIcon from '../assets/icon_bookmark.svg';
import $MicIcon from '../assets/mic.svg';
import $Clip from '../assets/top_clip.svg';
import ConditionRender, { ConditionRenderComponent } from '../components/ConditionRender';
import Info from '../components/Info/Info';

interface SpeechIntroProps {
	subText: React.ReactChild;
	showGradient?: boolean;
	showMic?: boolean;
	score?: React.ReactChild;
	action?: React.ReactChild;
}

const SpeechScore: React.FC<SpeechIntroProps> = ({
	subText,
	showGradient,
	showMic,
	score,
	action,
}) => {
	const FooterWrapper = React.useMemo(
		() =>
			showGradient ? (
				<ImageBackground
					source={require('../assets/green_gradient.png')}
					style={styles.bottomContent}
				/>
			) : (
				<View style={styles.bottomContent} />
			),
		[showGradient]
	);

	return (
		<View style={styles.background}>
			{React.cloneElement(FooterWrapper, {
				children: React.Children.toArray(
					<View>
						<Info style={styles.bottomInfo}>
							<ConditionRenderComponent renderIf={!!score}>
								<View style={styles.topClip}>
									<$Clip />
									{score}
								</View>
							</ConditionRenderComponent>
							<BookmarkIcon style={styles.bookmark} />
							<Info.MainText text={'WELL DONE!'} style={styles.bottomMainTextStyle} />

							<View style={styles.subTextWrapper}>
								<Info.SubText text={subText} style={styles.bottomSubTextStyle} />
							</View>
							<ConditionRenderComponent renderIf={!!showMic}>
								<View style={styles.micContainer}>
									<Image source={require('../assets/mic_container.png')} />
									<TouchableOpacity style={styles.micIcon}>
										<$MicIcon />
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
	bottomMainTextStyle: { color: '#05AA1F', fontWeight: 'bold', fontSize: 13 },
	subTextWrapper: {
		backgroundColor: 'rgba(5, 170, 31, 0.19)',
		paddingHorizontal: 12,
		paddingVertical: 3,
		borderRadius: 7,
		marginTop: 10,
	},
	bottomSubTextStyle: {
		color: '#05AA1F',
		fontSize: 18,
		fontWeight: '600',
		opacity: 1,
	},
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

export default ConditionRender(SpeechScore);
