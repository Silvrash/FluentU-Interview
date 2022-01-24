/**
 * video time stamps
 */

export const correctVideoTimestamps = {
	type: 'correct',
	source: require('../assets/Feedback_Drills_Correct.mp4'),
	intro: [
		{ start: 1.0, end: 2.1, eng: "Right, let's begin.", spanish: 'Bien, comencemos' },
		{
			start: 2.1,
			end: 6.0,
			eng: 'This is the shooting sample for the correct drill',
			spanish: 'Esta es la muestra de tiro para los viajes correctos',
		},
		{ start: 6.1, end: 7.1, eng: "Let's begin.", spanish: 'Vamos a empezar' },
	],
	dialogue: [
		{ start: 8.5, end: 13.6, eng: 'Great Job', spanish: 'Estupendo trabajo' },
		{ start: 13.6, end: 18.0, eng: 'Excellent', spanish: 'Excelente' },
		{ start: 18.0, end: 23.4, eng: 'Amazing', spanish: 'Genial' },
		{ start: 23.4, end: 28.5, eng: 'Well done', spanish: 'Bien hecho' },
		{ start: 28.5, end: 34.6, eng: "I'm impressed.", spanish: 'Estoy impresionada' },
		{ start: 34.6, end: 38, eng: "You're doing well.", spanish: 'Vas muy bien' },
	],
};

export const inCorrectVideoTimestamps = {
	type: 'incorrect',
	source: require('../assets/Feedback_Drills_Incorrect.mp4'),
	intro: [
		{
			start: 2.3,
			end: 5.3,
			eng: 'Okay, this is the incorrect response shooting sample',
			spanish: 'Bien, esta es la muestra de disparo de respuesta incorrecta',
		},
		{ start: 5.3, end: 6.9, eng: "Let's do this", spanish: 'Vamos a empezar' },

		{ start: 13.4, end: 18.8, eng: "Let's try again.", spanish: 'Intentemoslo de nuevo' },
		{ start: 18.8, end: 24.0, eng: "Let's do it again.", spanish: 'Hagámoslo de nuevo' },

		{ start: 24.0, end: 32.0, eng: 'Oops, one more time', spanish: 'Uy, una vez más' },
		{ start: 32.0, end: 37.0, eng: 'Almost to the other side', spanish: 'Casi al otro lado' },

		{
			start: 37.0,
			end: 43,
			eng: "Oh, I couldn't hear that",
			spanish: 'Oh, no pude escuchar eso',
		},
		{ start: 45, end: 47, eng: "I couldn't hear you", spanish: 'No pude escucharte' },
		{ start: 47, end: 58.1, eng: 'Oops, try again', spanish: 'Ups, inténtalo de nuevo' },
	],
	dialogue: [{ start: 7.9, end: 58.1, eng: 'Good try', spanish: 'Buen intento' }],
};
