import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
// import { getDroppedOrSelectedFiles } from 'html5-file-selector'
// import axios from "axios";
// import { FileUploadNotification } from '../Error';



// import { uploadFile } from 'react-s3';

const SimpleDropZone = () => {
  const axios = require("axios").default;

  const API_ENDPOINT =
    "https://135hbqsit1.execute-api.us-east-1.amazonaws.com/default/SafetyDepositBlock__getPresignedImageURL";
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    const f = files[0];
    console.log(f["file"]);
    // * GET request: presigned URL
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT
    });

    console.log("Response: ", response);

    // * PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type":
          "image/png, image/jpeg, image/gif, audio/mp3, audio/wav, video/mp4, application/pdf, application/doc, application/docx, .pdf"
      },
      body: f["file"]
    });
    console.log("Result: ", result);
    alert("You have successfully uploaded your file")
  };

    return (
        <>
        <Dropzone
            // getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            // s3Url={s3Url}
            // inputContent="Drop 3 Files"
            inputWithFilesContent={files => `${3 - files.length} more`}
            // submitButtonDisabled={files => files.length > 3}
            submitButtonDisabled={files => files.length === 0 || files.length > 3}
            // getFilesFromEvent={getFilesFromEvent}
            // InputComponent={Input}
            disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
            // accept="image/*,audio/*,video/*"
            accept="image/png, image/jpeg, image/gif, audio/mp3, audio/wav, video/mp4, application/pdf, application/doc, application/docx, .pdf"
            inputContent={(files, extra) => (extra.reject ? 'Only Image, audio and video files allowed!' : 'Select and Drop Files')}
            styles={{
                dropzoneAccept: { 
                    borderColor: '#6ef242',
                    backgroundColor: '#6ef242' },
                dropzoneReject: { 
                    borderColor: '#F19373', 
                    backgroundColor: '#F1BDAB' },
                inputLabel: (files, extra) => (extra.reject ? { color: '#A02800' } : { color: '#fff'}),
                progress: {
                  color: '#fff',
                }
            }}

            
        />
        {/* {FileUploadNotification && <FileUploadNotification title="User change has failed" 
            message={FileUploadNotification} />} */}
        </>
    );
};

export default SimpleDropZone;