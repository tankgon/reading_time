const Clound = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_CLOUD_FOLDER);
  data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  data.append("folder", process.env.REACT_APP_CLOUDINARY_CLOUD_FOLDER);

  const cloudinaryResponse = await fetch(process.env.CLOUDINARY, {
    method: "post",
    body: data,
  });
  const cloudinaryData = await cloudinaryResponse.json();
  const imageUrl = await cloudinaryData.url;

  return imageUrl;
};

export default Clound;
