import React from 'react';
import UploadScreen from "../DropzoneUpload/DropzoneUpload.jsx";
import ImageAvatars from "../Avatar/Avatar.jsx"

class CrowdsourceSection extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <ImageAvatars/>
                        <UploadScreen/>
                        <UploadScreen/>
                        <UploadScreen/>
                        <UploadScreen/>
                        <UploadScreen/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CrowdsourceSection;