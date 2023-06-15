export const getLimitedText = (text, length = 100) => {
	const longValid = text?.split('').length >= length;
	if(longValid) {
		return text.split('').splice(0, length).join('').concat("...");
	} else return text;
}