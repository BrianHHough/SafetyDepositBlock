import React, { useState } from "react";
import "./FilesView.css";
import data from "../../data/Data.json";

import FilebaseLogo from "../../assets/logos/Logo__Filebase-noBG.png";
import SkynetLogo from "../../assets/logos/Logo__Skynet-noBG.png";

// fetch(url)
//   .then(function() {
    
//   })
//   .catch(function() {

//   });




const FilesView = () => {
  const [filebaseFiles] = useState(data);
  // const objectUrlFilebase = `${filebaseFiles.objectUrl}`
  // const skyLink = `${filebaseFiles.skyLink}`
  const skyLinkPrefix = "https://siasky.net/"

  return (
    <>
    <div className="app-container">
      <table>
        <tHead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Last Modified</th>
            <th style={{
                "text-align": "center", 
                "margin": "auto"
              }}>URL</th>
            <th style={{
                "text-align": "center", 
                "margin": "auto"
              }}>SkyLink</th>
          </tr>
        </tHead>
        <tBody>
          {filebaseFiles.map((filebaseFiles) => (
            <tr>
              <td>{filebaseFiles.id}</td>
              <td>{filebaseFiles.key}</td>
              <td>{filebaseFiles.owner}</td>
              <td>{filebaseFiles.lastModified.substring(0,10)}</td>
              <td style={{
                "text-align": "center", 
                "margin": "auto"
              }}>
                  <a href={`${filebaseFiles.objectUrl}`} rel="noreferrer" target="_blank"><img src={FilebaseLogo} alt="Filebase logo" height="60px"></img></a></td>
              <td style={{
                "text-align": "center", 
                "margin": "auto"
              }}>
                <a href={skyLinkPrefix + `${filebaseFiles.skyLink}`} rel="noreferrer" target="_blank"><img src={SkynetLogo} alt="Skynet logo" height="60px"></img></a></td>
            </tr>
          ))}
        </tBody>
      </table>
    </div>

    </>
  );
};

export default FilesView;
