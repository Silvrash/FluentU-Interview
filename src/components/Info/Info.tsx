import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ConditionRenderProps } from '../ConditionRender';
import { InfoTextProps, MainText, SubText } from './Text';

interface CardProps {
	style?: ViewStyle;
}

interface InfoProps extends React.FC<CardProps> {
	MainText: React.FC<ConditionRenderProps<InfoTextProps>>;
	SubText:React.FC<ConditionRenderProps<InfoTextProps>>;
}
const Info: InfoProps = ({ children, style }) => {
	return <View style={{ ...styles.root, ...style }}>{children}</View>;
};

Info.MainText = MainText;
Info.SubText = SubText;

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#fff',
		minHeight: 103,
		flex: 1,
		borderRadius: 12,
		paddingHorizontal: 36,
		paddingVertical: 19,
		alignItems: 'center',
		justifyContent: 'center'
	},
});

export default Info;
