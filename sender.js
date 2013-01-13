var gcm = require('node-gcm');

var message = new gcm.Message();
var sender = new gcm.Sender('insert Google Server API Key here');
var registrationIds = ['APA91bFXz-jytnrEtuxbVKmQe2LVrOa0rEQC2ZmINZRp5R3yyz78Eub-BF4T72hJnxm3UPqB2Pd-QbeRK7XfgDySQkZY8mIAgxdi3HXN98hh1sESKwu9Yz9TLf1AHBdCe83MQUgfMKE8MUb43MF5NX1nnGlU8Q_Qa_iWWLytwoE5L9il_ISR6BM'];

// Optional
message.addData('key1','message1');
message.addData('key2','message2');
message.collapseKey = 'demo';
// message.delayWhileIdle = true;
// message.timeToLive = 3;

// At least one required
// registrationIds.push('regId1');
// registrationIds.push('regId2'); 


for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		sender.send(message, registrationIds, 4, function (err, result) {
			console.log(result);
		});
	}, i * 1000);
}
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
