import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import CloseIcon from '../assets/close.svg';
import MoreIcon from '../assets/more-horizontal.svg';
import Indicator from './Indicator';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<SafeAreaView style={styles.root}>
			<CloseIcon />
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
