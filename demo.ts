const codec = require('@adeunis/codecs');

// Products types are defined in DecoderProducts enum (src/shared/product.enum.ts)
const productType = 'pulse4';
const payloadValue = '10000100021B070822003C0001000200030004000500060203020301';
let payloadResult;

console.log(`Decoding ${productType} frame => ${payloadValue}`);

const decoder = new codec.Decoder();

// Configure the decoder for the appropriate device
decoder.setDeviceType(productType);

// Decode the given payload
const parserResult = decoder.decode(payloadValue);

if (parserResult.error) {
    // Incompatible frame and product
    payloadResult = 'decoding issue';
} else {
    // Format result
    payloadResult = JSON.stringify(parserResult, null, 2);
}

// Display result
console.log(payloadResult);