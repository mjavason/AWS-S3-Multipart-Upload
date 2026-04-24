## Initialization

**Input**

```json
{
  "fileName": "Michael NDA.pdf",
  "contentType": "application/pdf"
}
```

**Output**

```json
{
  "message": "Multipart upload initialized successfully",
  "uploadId": "MDY4Y2RhYjQtN2Y2OC00ODgyLWJiNzQtNDE2ZTVhOWM3OThlLmU5NWUwYmMwLTBjNmYtNGJkMS05ZmJlLTMzZWJhZTQ2ODM0Y3gxNzc3MDI5Mzk0MTMzNDQyODMx",
  "key": "uploads/22740510-1d40-4fe5-93c6-7c0671a59e9b-Michael NDA.pdf"
}
```

---

## Signing

**Input**

```json
{
  "key": "uploads/22740510-1d40-4fe5-93c6-7c0671a59e9b-Michael NDA.pdf",
  "uploadId": "MDY4Y2RhYjQtN2Y2OC00ODgyLWJiNzQtNDE2ZTVhOWM3OThlLmU5NWUwYmMwLTBjNmYtNGJkMS05ZmJlLTMzZWJhZTQ2ODM0Y3gxNzc3MDI5Mzk0MTMzNDQyODMx",
  "parts": 1
}
```

**Output**

```json
{
  "urls": [
    {
      "partNumber": 1,
      "url": "http://localhost:9000/startup/uploads/22740510-1d40-4fe5-93c6-7c0671a59e9b-Michael%20NDA.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=dev%2F20260424%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260424T111634Z&X-Amz-Expires=900&X-Amz-Signature=a4c4e3335d66bda19d55cd8fa443d909cc50512654774fcae88289b08b71892b&X-Amz-SignedHeaders=host&partNumber=1&uploadId=MDY4Y2RhYjQtN2Y2OC00ODgyLWJiNzQtNDE2ZTVhOWM3OThlLmU5NWUwYmMwLTBjNmYtNGJkMS05ZmJlLTMzZWJhZTQ2ODM0Y3gxNzc3MDI5Mzk0MTMzNDQyODMx&x-amz-checksum-crc32=AAAAAA%3D%3D&x-amz-sdk-checksum-algorithm=CRC32&x-id=UploadPart"
    }
  ]
}
```

---

## Complete

**Input**

```json
{
  "key": "uploads/22740510-1d40-4fe5-93c6-7c0671a59e9b-Michael NDA.pdf",
  "uploadId": "MDY4Y2RhYjQtN2Y2OC00ODgyLWJiNzQtNDE2ZTVhOWM3OThlLmU5NWUwYmMwLTBjNmYtNGJkMS05ZmJlLTMzZWJhZTQ2ODM0Y3gxNzc3MDI5Mzk0MTMzNDQyODMx",
  "parts": [
    {
      "ETag": "\"7ffb3c076903a7b01b25e9e198d3ea93\"",
      "PartNumber": 1
    }
  ]
}
```

**Output**

```json
{
  "location": "http://localhost:9000/startup/uploads/22740510-1d40-4fe5-93c6-7c0671a59e9b-Michael%20NDA.pdf"
}
```
