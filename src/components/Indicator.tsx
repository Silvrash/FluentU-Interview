import React from 'react';
import { StyleSheet, View } from 'react-native';

const Indicator: React.FC = () => {
	return (
		<View style={styles.root}>
			<View style={styles.container} />
			<View style={styles.indicator} />
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		height: 6,
		marginHorizontal: 24,
	},
	container: {
		flex: 1,
		backgroundColor: '#707070',
		opacity: 0.224,
		borderRadius: 100,
	},
	indicator: {
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		width: 60,
		backgroundColor: '#40CC1D',
		borderRadius: 100,
	},
});

export default Indicator;
