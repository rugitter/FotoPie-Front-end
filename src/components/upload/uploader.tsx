import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { IFileWithMeta, StatusValue } from 'react-dropzone-uploader';
import { useState } from "react";


import axios, { AxiosRequestConfig, Method } from "axios";



export default function Uploader() {
  const [status, setStatus] = useState([]);

  const API_ENDPOINT = "https://882yhgxvdh.execute-api.ap-southeast-2.amazonaws.com/getPresignedImageURL";

  const handleChangeStatus = async (
    file: IFileWithMeta,
    status: any,
  ): Promise<void|{ meta: { [name: string]: any } }> => {
    const { meta } = file;
    console.log(status, meta);
    setStatus(status);

    if (status === "done") {
      try {
        const f = file.file;
        console.log(f);

        // Get request:presignedURL
        const response = await axios({
          method: "GET",
          url: API_ENDPOINT,
        });

        console.log("Response", response);

        // #put request:upload file to S3
        const result = await fetch(response.data.uploadURL, {
          method: "PUT",
          headers: {
            "Content-Type": "image/jpeg",
          },
          body: f,
        });

        console.log("Result:", result.url);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="uploader">
    <Dropzone
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent= "Drop A Picture"
      accept="image/*"

      // styles={{
      //   dropzone: { width: 400, height: 200,},
      //   dropzoneActive: { borderColor: "green" },
      // }}
      />
       </div>
  );
}

//   const handleChangeStatus = async (file: IFileWithMeta,status: any, allFiles: IFileWithMeta[]): Promise<void | { meta: { [name: string]: any } }> => {
//     const { meta, files} = file;
//     console.log(status, meta, files);
//     setStatus(status);
  
//     if (status === "done") {
//       try {
//         // const files = props.files;
//         const f = files[0];
//         console.log(f);
        
//         // Get request:presignedURL
        
//         const response = await axios({
//           method: 'GET',
//           url: API_ENDPOINT
//         });
        
//         console.log('Response', response);
            
//         // #put request:upload file to S3
//         const result = await fetch(response.data.uploadURL, {
//           method: 'PUT',
//           headers: {
//             "Content-Type": "image/jpeg"
//           },
//           body: f
//         });
        
//         console.log('Result:', result.url);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
  

  
    
//       return (
//         <Dropzone
//           onChangeStatus={handleChangeStatus}
//           // onSubmit={handleSubmit}
//           maxFiles={1}
//           multiple={false}
//           canCancel={false}
//           inputContent="Drop A File"
//           // accept="image/*"
//           styles={{
//             dropzone: { width: 400, height: 200 },
//             dropzoneActive: { borderColor: 'green' },
//             }}
//           />
     
//   )
 
// };
    
//////


  // const handleChangeStatus = (props: DropzoneProps, status: any): void => {
  //   const { meta} = props;
  //   console.log(status, meta);
  //   setStatus(status);

 
    
  // };
  
  // const handleSubmit = async (files: any) => {
  //   const f = files[0]
  //   console.log(f[files]);

  //   // Get request:presignedURL

  //   const response = await axios({
  //     method: 'Get',
  //     url: API_ENDPOINT

  //   });
  //   console.log('Response', response)
    

  //   // #put request:upload file to S3
  //   const result = await fetch(response.data.uploadURL, {
  //     method: 'PUT',
  //     headers: {
  //       "Content-Type":"image/jpeg"
  //     },
  //     body:f['file']
  //   })
  //   console.log('Result:', result.url)}

        
