import { AddDocumentToCollectionUrlStore } from '$houdini';
import aws from 'aws-sdk';
import crypto from 'crypto';
const randomBytes = crypto.randomBytes;

const region = process.env.AWS_REGION;
const bucketName = 'temp-file-uploader';
const accessKeyId = process.env.S3_PUBLIC_ACCESS_KEY;
const secretAccessKey = process.env.S3_PUBLIC_ACCESS_KEY;

const s3 = new aws.S3({
	region,
	accessKeyId,
	secretAccessKey,
	signatureVersion: 'v4'
});

export async function generateUploadURL(event) {
	// const rawBytes = await randomBytes(16);
	// const imageName = rawBytes.toString('hex');

	// const params = {
	// 	Bucket: bucketName,
	// 	Key: imageName,
	// 	Expires: 60
	// };

	// const uploadURL = await s3.getSignedUrlPromise('putObject', params);
	let uploadURL = '';
	const store = new AddDocumentToCollectionUrlStore();
	store.fetch({ event }).then((res) => {
		console.log({ res });
	});
	return uploadURL;
}
