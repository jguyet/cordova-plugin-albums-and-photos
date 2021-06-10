var exec = require('cordova/exec');

var Photos = {

	collections: function (options, successCallback, errorCallback) {
		if (typeof options === "function") {
			errorCallback = successCallback;
			successCallback = options;
			options = null;
		}
		exec(successCallback, errorCallback, "Photos", "collections", [options]);
	},

	photos: function (collectionIds, options, successCallback, errorCallback) {
		switch (typeof collectionIds) {
			case "function":
				errorCallback = options;
				successCallback = collectionIds;
				options = null;
				collectionIds = null;
				break;
			case "string":
				collectionIds = [collectionIds];
				if (typeof options == "function") {
						errorCallback = successCallback;
						successCallback = options;
						options = null;
				}
				break;
			case "object":
				if (collectionIds.constructor !== Array) {
					errorCallback = successCallback;
					successCallback = options;
					options = collectionIds;
					collectionIds = null;
				}
				break;
		}
		exec(successCallback, errorCallback, "Photos", "photos", [collectionIds, options]);
	},

	thumbnail: function (photoId, options, successCallback, errorCallback) {
		if (typeof options === "function") {
			errorCallback = successCallback;
			successCallback = options;
			options = null;
		}
		exec(successCallback, errorCallback, "Photos", "thumbnail", [photoId, options]);
	},

	image: function (photoId, successCallback, errorCallback) {
		exec(successCallback, errorCallback, "Photos", "image", [photoId]);
	},

	cancel: function () {
		exec(null, null, "Photos", "cancel", []);
	},

	getPhotoLibraryAuthorization: function (successCallback, errorCallback) {
		exec(successCallback, errorCallback, "Photos", "getPhotoLibraryAuthorization", []);
	},

	requestPhotoLibraryAuthorization: function (successCallback, errorCallback) {
		exec(successCallback, errorCallback, "Photos", "requestPhotoLibraryAuthorization", []);
	},
};

module.exports = Photos;
