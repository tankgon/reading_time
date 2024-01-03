const Clound = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "reading-time-storyboard");
  data.append("cloud_name", "df2s6srdu");
  data.append("folder", "reading-time-storyboard");

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/df2s6srdu/upload`,
    {
      method: "post",
      body: data,
    }
  );
  const cloudinaryData = await cloudinaryResponse.json();
  const imageUrl = await cloudinaryData.url;

  return imageUrl;
};

export default Clound;
