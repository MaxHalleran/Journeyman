const authHelper = {
	checkCookie: () => {
		console.log("Hello cookies: " + document.cookie);

		if (document.cookie) {
			return document.cookie;
		}
		return false;
	}
};

export default authHelper;