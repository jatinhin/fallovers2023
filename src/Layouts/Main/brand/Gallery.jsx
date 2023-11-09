// import React, { useState } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// function Gallery({ images }) {
//   const imagess = images.map((image) => ({
//     src: `https://fallovers.com/fallovers-api/public/uploads_sample/${image.info_reg_uplods_sample}`,
//   }));
//   console.log("imagess", imagess);
//   const [data, setdata] = useState({ img: "", i: 0 });

//   const viewImage = (img, i) => {
//     setdata({ img, i });
//   };
//   const imgAction = (action) => {
//     let i = data.i;
//     console.log("asd",data.i)
//     if (action === "next-Img") {
//       setdata({ img: imagess[i + 1], i: i + 1 });
//     }if (action === "Previous-Img") {
//       setdata({ img: imagess[i - 1], i: i - 1 });
//     }if(!action){
//       setdata({img:"",i:0})
//     }
//   };
//   return (
//     <>
//       {data.img && (
//         <div
//           style={{
//             width: "77%",
//             height: "77vh",
//             background: "black",
//             display: "flex",
//             zIndex: "1",
//             position: "fixed",
//             justifyContent: "center",
//             alignItems: "center",
//             overflow: "hidden",
//           }}
//         >
//           <button
//             onClick={() => imgAction()}
//             style={{ position: "absolute", top: "10px", right: "10px" }}
//           >
//             X
//           </button>
//           <button onClick={() => imgAction("Previous-Img")}>Previous</button>
//           <img
//             src={data.img.src}
//             style={{
//               width: "auto",
//               maxWidth: "90%",
//               maxHeight: "90%",
//               zIndex: "10",
//             }}
//           />
//           <button onClick={() => imgAction("next-Img")}>Next</button>

//         </div>
//       )}
//       <div style={{padding:"10px"}}>
//         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//           <Masonry gutter="20px">
//             {imagess.map((img, i) => (
//               <img
//                 src={img.src}
//                 alt=""
//                 key={i}
//                 style={{ width: "100%", display: "block", cursor: "pointer" }}
//                 onClick={() => viewImage(img, i)}
//               />
//             ))}
//           </Masonry>
//         </ResponsiveMasonry>
//       </div>
//     </>
//   );
// }

// export default Gallery;
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Gallery({ images }) {
  const allImages = images.map((image) => ({
    src: `https://fallovers.com/fallovers-api/public/uploads_sample/${image.info_reg_uplods_sample}`,
  }));

  const initialImages = allImages.slice(0, 3); // Display first 3 images initially
  const remainingImages = allImages.slice(3);

  const [data, setdata] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setdata({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    console.log("asd",data.i)
    const totalImages = initialImages.concat(remainingImages);

    if (action === "next-Img" && i < totalImages.length - 1) {
      setdata({ img: totalImages[i + 1], i: i + 1 });
    }
    if (action === "Previous-Img" && i > 0) {
      setdata({ img: totalImages[i - 1], i: i - 1 });
    }
    if (!action) {
      setdata({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "77%",
            height: "77vh",
            background: "black",
            display: "flex",
            zIndex: "1",
            position: "fixed",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
          <button onClick={() => imgAction("Previous-Img")}>Previous</button>
          <img
            src={data.img.src}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
              zIndex: "10",
            }}
          />
          <button onClick={() => imgAction("next-Img")}>Next</button>
        </div>
      )}
      <div style={{}}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {initialImages.map((img, i) => (
              <img
                src={img.src}
                alt=""
                key={i}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                onClick={() => viewImage(img, i)}
              />
           ) )}
          </Masonry>
        </ResponsiveMasonry>
        <div style={{ display: "none" }}>
          {remainingImages.map((img, i) => (
            <img src={img.src} alt="" key={i} />
           ) )}
        </div>
      </div>
    </>
  );
}

export default Gallery;








