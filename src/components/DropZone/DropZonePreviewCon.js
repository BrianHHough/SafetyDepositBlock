import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
// import { getDroppedOrSelectedFiles } from 'html5-file-selector'

const SimpleDropZone = () => {

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { 
      console.log(meta);
      return { url: 'https://httpbin.org/post' } }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}

            maxFiles={3}
            // inputContent="Drop 3 Files"
            inputWithFilesContent={files => `${3 - files.length} more`}
            submitButtonDisabled={files => files.length < 3}
            // accept="image/*,audio/*,video/*"
            accept="image/png, image/jpeg, image/gif, audio/mp3, audio/wav, video/mp4, application/pdf, application/doc, application/docx"
            inputContent={(files, extra) => (extra.reject ? 'Only Image, audio and video files allowed!' : 'Select and Drop Files')}
            styles={{
                dropzoneReject: { borderColor: '#F19373', backgroundColor: '#F1BDAB' },
                inputLabel: (files, extra) => (extra.reject ? { color: '#A02800' } : { color: '#fff'}),
                progress: {
                  color: '#fff',
                }
            }}

            
        />
    );
};

export default SimpleDropZone;