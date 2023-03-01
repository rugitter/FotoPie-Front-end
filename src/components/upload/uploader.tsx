import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios, { AxiosRequestConfig, Method } from "axios";

export default function Uploader() { 

  const API_ENDPOINT = "https://882yhgxvdh.execute-api.ap-southeast-2.amazonaws.com/getPresignedImageURL"
    

  const handleChangeStatus = ({ meta, remove }: { meta: any; remove: any }, status:any) => {
       console.log(status, meta)
  }
  
  const handleSubmit = async (files: any) => {
    const f = files[0]
    console.log(f[files]);

    // Get request:presignedURL

    const response = await axios({
      method: 'Get',
      url: API_ENDPOINT

    });
    console.log('Response', response)
    

    // #put request:upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      headers: {
        "Content-Type":"image/jpeg"
      },
      body:f['file']
    })
    console.log('Result:', result.url)

        
      }
    
      return (
        <Dropzone
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            inputContent="Drop A File"
            styles={{
              dropzone: { width: 400, height: 200 },
              dropzoneActive: { borderColor: 'green' },
            }}
          />
     
      )
}
    
 <Uploader/> 