import React, { useState,useRef,FunctionComponent  } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useForm } from "react-hook-form";
import {Button ,Modal} from 'react-bootstrap';

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
 
  export const Demo: React.FC = (data) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();
  const [lgShow, setLgShow] = useState(false);

  const onChange = (e: any) => {

    setLgShow(true);
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  //console.log(data,'aaa');

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setLgShow(false);
      setCropData(cropper.getCroppedCanvas().toDataURL());
      }
  };


  return (
    
    <div className="row" style={{lineHeight:'0px'}}>
      <div className="col-md-6" style={{margin:'0px'}}>
        <input type="file" id="crop-pic" accept={'image/png, image/gif, image/jpeg'} onChange={onChange} style={{width:'100%', display:'none'}} />

     <div className='crop-default'>               
      { cropData!='#'?   

      <div className="box" style={{ width: "100%", }} >
         <input id="logo_pic" {...register("uploadfile", { required: true})} type={'hidden'} value={cropData}></input>
         <img  style={{ width: "100%" }} src={cropData} alt="cropped"   />
      </div>
       : 
        <div></div>        
      } 
  </div>


      </div>

      <br style={{ clear: "both" }} />
      
      <Modal
          size="xl"
          show={lgShow}
          onHide={() => setLgShow(false)}
          style={{ marginTop:'25px'}}
          aria-labelledby="example-modal-sizes-title-lg">
       
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg" style={{ textTransform:'uppercase',fontWeight:'bold' }}>
                Inspections <div style={{ clear:'both',fontSize:12 }}>Test</div> 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{padding:0}}>
              <div>
                  <Cropper
                   style={{
                    height: 500,
                    width:'100%',
                    margin: "0 auto",
                    marginTop: 45
                }}
                    zoomTo={0}
                    aspectRatio={16 / 16}
                    initialAspectRatio={0}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={0}
                    minCropBoxWidth={0}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={true} 
                    onInitialized={(instance) => {
                      setCropper(instance);
                    }}
                    guides={false}
                  />

                  { image!=undefined?   

                      <div className="row crop-button-row">
                        <div className="col-md-6">
                          <button className="button crop-button" type="button" 
                            onClick={getCropData}>
                            Crop Image
                          </button>
                       </div> 

                       <div className="col-md-6">
                         <button className="button crop-button" type="button" 
                           onClick={()=>setLgShow(false)}>
                            Cancel
                         </button>
                       </div>
                     </div> 
                  :'' }
              </div>
          </Modal.Body>
          </Modal>
    </div>
  );
};

export default Demo;
