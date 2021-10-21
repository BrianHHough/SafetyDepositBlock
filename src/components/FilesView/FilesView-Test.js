import React, { useState } from "react";
import "./FilesView.css";
import data from "../../data/Data.json";



const FilesViewTest = () => {
  const [filebaseFiles] = useState(data);
  // const objectUrlFilebase = `${filebaseFiles.objectUrl}`
  // const skyLink = `${filebaseFiles.skyLink}`
  let skyLinkPrefix = "https://siasky.net/"

  const upload = (file) => {
    // console.log(file.target.files[0]);
    // var file = file.target.files[0];

  }

  return (
    <>
    <div className="app-container">
      <input 
        type="file"
        onChange={upload}
        >
        
      </input>

    </div>
    <hr></hr>
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Last Modified</th>
            <th style={{
                "textAlign": "center", 
                "margin": "auto"
              }}>URL</th>
            <th style={{
                "textAlign": "center", 
                "margin": "auto"
              }}>SkyLink</th>
          </tr>
        </thead>
        <tbody>
          {filebaseFiles.map((filebaseFiles) => (
            <tr>
              <td>{filebaseFiles.id}</td>
              <td>{filebaseFiles.key}</td>
              <td>{filebaseFiles.owner}</td>
              <td>{filebaseFiles.lastModified.substring(0,10)}</td>
              <td style={{
                "textAlign": "center", 
                "margin": "auto"
              }}>
                  <a href={`${filebaseFiles.objectUrl}`} rel="noreferrer" target="_blank"><img src="https://safetydepositblock.s3.filebase.com/Logo__Filebase-noBG.png" alt="Filebase logo" height="60px"></img></a></td>
              <td style={{
                "textAlign": "center", 
                "margin": "auto"
              }}>
                <a href={skyLinkPrefix + `${filebaseFiles.skyLink}`} rel="noreferrer" target="_blank"><img src="https://safetydepositblock.s3.filebase.com/Logo__Skynet-noBG.png" alt="Skynet logo" height="60px"></img></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};

export default FilesViewTest;
