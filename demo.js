var codec = require('@adeunis/codecs');
// Products types are defined in DecoderProducts enum (src/shared/product.enum.ts)
var productType = 'pulse4';
var payloadValue = '10000100021B070822003C0001000200030004000500060203020301';
var payloadResult;
console.log("Decoding ".concat(productType, " frame => ").concat(payloadValue));
var decoder = new codec.Decoder();
// Configure the decoder for the appropriate device
decoder.setDeviceType(productType);
// Decode the given payload
var parserResult = decoder.decode(payloadValue);
if (parserResult.error) {
    // Incompatible frame and product
    payloadResult = 'decoding issue';
}
else {
    // Format result
    payloadResult = JSON.stringify(parserResult, null, 2);
}
// Display result
console.log(payloadResult);
