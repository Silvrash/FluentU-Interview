import React from 'react';
import { Text, TextStyle, StyleSheet, View } from 'react-native';
import ConditionRender from '../ConditionRender';

export interface InfoTextProps {
	icon?: JSX.Element;
	text: React.ReactChild;
	style: TextStyle;
}

export const MainText: React.FC<InfoTextProps> = ConditionRender(({ text, style, icon }) => {
	return (
		<View style={{ ...styles.root, marginBottom: !icon ? 0 : 7 }}>
			{text ? icon : null}
			<Text
				style={{
					marginLeft: !!icon ? 12 : 0,
					marginBottom: !!icon ? 0 : 7,
					...styles.mainText,
					...style,
				}}
			>
				{text}
			</Text>
		</View>
	);
});

export const SubText: React.FC<InfoTextProps> = ConditionRender(({ text, style }) => {
	return <MainText style={{ ...styles.subText, ...style }} text={text} />;
});

const styles = StyleSheet.create({
	root: { flexDirection: 'row', alignItems: 'center' },
	mainText: { fontSize: 18, textAlign: 'center' },
	subText: { marginBottom: 0, opacity: 0.5, fontSize: 13 },
});
