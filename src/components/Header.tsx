import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import CloseIcon from '../assets/close.svg';
import MoreIcon from '../assets/more-horizontal.svg';
import Indicator from './Indicator';

interface HeaderProps {
	onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset }) => {
	return (
		<SafeAreaView style={styles.root}>
			<TouchableOpacity onPress={onReset}>
				<CloseIcon />
			</TouchableOpacity>
			<Indicator />
			<MoreIcon />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		marginHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default Header;
