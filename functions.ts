import { CreateBucketCommand, HeadBucketCommand } from '@aws-sdk/client-s3';
import axios from 'axios';
import { s3 } from './s3.config';

export async function pingSelf(url: string) {
  try {
    const { data } = await axios.get(url);
    console.log(`Server pinged successfully: ${data.message}`);
    return true;
  } catch (e: any) {
    console.error(`Error pinging server: ${e.message}`);
    return false;
  }
}

export async function getMimeType(ext: string): Promise<string> {
  switch (ext.toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.pdf':
      return 'application/pdf';
    default:
      return 'application/octet-stream';
  }
}

export async function ensureBucketExists(bucket: string) {
  try {
    await s3.send(new HeadBucketCommand({ Bucket: bucket }));
  } catch (err: any) {
    if (err.$metadata?.httpStatusCode === 404) {
      await s3.send(new CreateBucketCommand({ Bucket: bucket }));
    } else {
      throw err;
    }
  }
}
