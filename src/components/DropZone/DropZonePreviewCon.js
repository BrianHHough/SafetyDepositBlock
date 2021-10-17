import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'

// import { uploadFile } from 'react-s3';

const SimpleDropZone = () => {
    
    const getFilesFromEvent = e => {
        return new Promise(resolve => {
          getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject))
          })
        })
      }
    // Payload data and url to upload files
    const getUploadParams = ({ file, meta }) => {
        const body = new FormData()
        body.append("myFile", file)
        body.append("filebaseFile", "someFilebaseFile");
        return { url: 'https://httpbin.org/post', body, }
    }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, xhr, remove, cancel, restart, fileWithMeta }, status, event) => {
        console.log(event.length);
        if (status === 'done'){
                let response = JSON.parse(xhr.response);
                console.log({response})
        } 
        
      };

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    const Input = ({ accept, onFiles, files, getFilesFromEvent, extra }) => {
        const isRejected = extra.reject;
        if(extra.reject){
          console.log({extra})
        }
        return (
    
          <label style={{ cursor: 'pointer', padding: 15, borderRadius: 3, justify: "center", }}>
            {
              isRejected?
                <div className='container'>
                  <div>
                    <h3>Only PDF Accepted</h3>
                  </div>
                </div>
                :
                <div className='container'>
                  <div className="DragAndDropHeader">
                    <h3>Drag and Drop Files Here</h3>
                    <p>or</p>
                  </div>
                  <label className='rounded' for="upload">Add Attachment</label>
                </div>
            }
            <input
              style={{ display: 'none' }}
              type="file"
              id="upload"
              accept={accept}
              multiple
              onChange={e => {
                getFilesFromEvent(e).then(chosenFiles => {
                  onFiles(chosenFiles)
                })
              }}
            />
    
    
          </label>
        )
      }

      const s3Url = 'https://my-bucket.s3.amazonaws.com'

    return (
        <>
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            maxFiles={3}
            s3Url={s3Url}
            // inputContent="Drop 3 Files"
            inputWithFilesContent={files => `${3 - files.length} more`}
            // submitButtonDisabled={files => files.length > 3}
            submitButtonDisabled={files => files.length === 0 || files.length > 3}
            getFilesFromEvent={getFilesFromEvent}
            InputComponent={Input}
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
        </>
    );
};

export default SimpleDropZone;