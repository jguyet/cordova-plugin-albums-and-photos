#import <Cordova/CDV.h>

/*
 * https://developer.apple.com/reference/photos?language=objc
 */
@interface CDVPhotos : CDVPlugin

- (void) collections:(CDVInvokedUrlCommand*)command;
- (void) photos:(CDVInvokedUrlCommand*)command;
- (void) thumbnail:(CDVInvokedUrlCommand*)command;
- (void) image:(CDVInvokedUrlCommand*)command;
- (void) cancel:(CDVInvokedUrlCommand*)command;
// RIGHT
- (void) getPhotoLibraryAuthorization:(CDVInvokedUrlCommand*)command;
- (void) requestPhotoLibraryAuthorization:(CDVInvokedUrlCommand*)command;

@end
