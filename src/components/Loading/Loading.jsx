import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import '../../App.css'

const Loading = () => {
    return (
        <div className="loadingiconCon">
            <div align='center' className="loadingicon">
                <Loader
                    type="Grid"
                    color="#ffa866"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        </div>
    )
}

export default Loading