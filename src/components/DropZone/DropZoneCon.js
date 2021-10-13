import React, {useMemo} from 'react'
import {useDropzone} from 'react-dropzone'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    fontSize: 30,
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

const DropZoneCon = (props) => {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
      } = useDropzone({accept: 'image/jpeg, image/png, image/gif, video/mp4, application/doc, application/docx, application/pdf'});

    const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
    }), [
    isDragActive,
    isDragReject,
    isDragAccept
    ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drop files onto the blockchain here, or click to upload files</p>
      </div>
    </div>
  )
}

export default DropZoneCon