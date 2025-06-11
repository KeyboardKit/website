{% assign product = include.product %}

## License Validation

Lower & Monthly licenses are validated over the Internet. This means that the app must be able to make a network call to validate its {{product}} license.

Higher & Custom licenses are compiled into the SDK binary, and are completely validated on-device.


## License Files

Higher & Custom licenses include a license file that let you update your license file without having to update to the latest version of the SDK.


## License Caching

For all licenses that require network-based validation, the SDK will cache all successful validations, and use them to handle any temporary connectivity loss.