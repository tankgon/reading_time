import ImageIcon from "@mui/icons-material/Image";
import { AspectRatio } from "@mui/joy";
import { Card, Grid, MenuItem, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import MinHeightTextarea from "../../../../components/MinHeightTextarea";
import OverlayCheckbox from "../../../../components/OverlayCheckbox";
import TextBox from "../../../../components/TextBox";
import TextFilter from "../../../../components/TextFilter";
import TextareaComment from "../../../../components/TextareaComment";
import ButtonComponent from "../../../../components/buttonComponent";
import ButtonUpLoadFile from "../../../../components/buttonUpLoadFile";
import SelectBox from "../../../../components/selectsBox";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const discountA = [
  {
    title: "10%",
    value: 10,
  },
  {
    title: "20%",
    value: 20,
  },
  {
    title: "30%",
    value: 30,
  },
  {
    title: "40%",
    value: 40,
  },
  {
    title: "50%",
    value: 50,
  },
  {
    title: "60%",
    value: 60,
  },
  {
    title: "70%",
    value: 70,
  },
  {
    title: "80%",
    value: 80,
  },
  {
    title: "90%",
    value: 90,
  },
  {
    title: "100%",
    value: 100,
  },
];

export default function DialogRegular() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [curriculum, setCurriculum] = useState();
  const [country, setCountry] = useState();
  const [currency, setCurrency] = useState();

  const [imageSrc, setImageSrc] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [studyTime, setStudyTime] = useState({});
  const handleChange1 = (event) => {
    setStudyTime((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Lucete, Select, ESL, IELTS } = studyTime;
  const selectedEnglishwing = Object.keys(studyTime).filter(
    (key) => studyTime[key]
  );
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const [aboutProduct, setAboutProduct] = useState("");

  return (
    <React.Fragment>
      <ButtonComponent
        onClick={handleClickOpen}
        title={"Product"}
        pading={"10px 0"}
        margin={"12px"}
        width={"90%"}
      />

      <Dialog fullWidth maxWidth={"xl"} open={open} onClose={handleClose}>
        <DialogTitle>Product Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box sx={{ m: "12px 0" }}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={3} sx={{ textAlign: "center" }}>
                  <Card
                    variant="outlined"
                    sx={{ p: "8px", borderRadius: "8px" }}>
                    <AspectRatio>
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt="Uploaded"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div>
                          <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2 }} />
                        </div>
                      )}
                    </AspectRatio>
                    <Box
                      sx={{
                        p: "20px 0 0 0",
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <Typography level="title-md"></Typography>
                      <ButtonUpLoadFile
                        accept="image/*"
                        title="Add New Picture"
                        id="input1"
                        onChange={(e) => {
                          setImageURL(e.target.files[0]);
                          handleImageChange(e);
                        }}
                      />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={9}>
                  <TextFilter
                    children={
                      <TextBox
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    }
                    text="Product Name"
                  />

                  <TextFilter
                    children={
                      <MinHeightTextarea
                        minRows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    }
                    text="Description"
                  />

                  <TextFilter
                    children={
                      <Autocomplete
                        size="small"
                        id="controllable-states-demo"
                        options={["options", "afasdf"]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Curriculum"
                  />

                  <TextFilter
                    children={
                      <Autocomplete
                        size="small"
                        id="controllable-states-demo"
                        options={["options", "afasdf"]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Country of sale"
                  />

                  <TextFilter
                    children={
                      <SelectBox
                        sx={{ m: "8px 0" }}
                        fullWidth={"fullWidth"}
                        size={"small"}
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        children={discountA.map((item, index) => {
                          return (
                            <MenuItem key={index} value={item.value}>
                              {item.title}
                            </MenuItem>
                          );
                        })}
                      />
                    }
                    text="Currency"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"2days (8/month)"}
                            checked={Lucete}
                            onChange={handleChange1}
                            name="2days (8/month)"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"3days (12/month)"}
                            checked={Select}
                            onChange={handleChange1}
                            name="3days (12/month)"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"4days (16/month)"}
                            checked={ESL}
                            onChange={handleChange1}
                            name="4days (16/month)"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"5days (20/month)"}
                            checked={IELTS}
                            onChange={handleChange1}
                            name="5days (20/month)"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Class Days(Per Week)"
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <TextFilter
                    children={
                      <TextBox
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    }
                    text="Price"
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <TextFilter
                    children={
                      <SelectBox
                        sx={{ m: "8px 0" }}
                        fullWidth={"fullWidth"}
                        size={"small"}
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        children={discountA.map((item, index) => {
                          return (
                            <MenuItem key={index} value={item.value}>
                              {item.title}
                            </MenuItem>
                          );
                        })}
                      />
                    }
                    text="Discount Price"
                  />
                </Grid>

                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Lucete"}
                            checked={Lucete}
                            onChange={handleChange1}
                            name="Lucete"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Select the campus"}
                            checked={Select}
                            onChange={handleChange1}
                            name="Select"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"ESL"}
                            checked={ESL}
                            onChange={handleChange1}
                            name="ESL"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"IELTS"}
                            checked={IELTS}
                            onChange={handleChange1}
                            name="IELTS"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Study time"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={
                      <TextareaComment
                        value={aboutProduct}
                        onChange={(e) => setAboutProduct(e.target.value)}
                      />
                    }
                    text="About Product"
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}></Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              color: "White",
            }}>
            Save
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              // color: "black",
            }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
