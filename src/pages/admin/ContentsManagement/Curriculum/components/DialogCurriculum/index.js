import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import { toast } from "react-toastify";
import MinHeightTextarea from "../../../../../components/MinHeightTextarea";
import TextFilter from "../../../../../components/TextFilter";
import ButtonComponent from "../../../../../components/buttonComponent";
import CheckBox2Opstion from "../../../../../components/checkBox";
//data
import contents from "../../../../../../services/api/admin/contents";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCurri({ title, value }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [curriculum, setCurriculum] = useState(value?.Curriculum_Title);
  const [subtitle, setSubtitle] = useState(value?.Subtitle);
  const [description, setDescription] = useState(value?._Description);
  const [division, setDivision] = useState(value?.Division);
  const [toUse, setToUse] = useState(value?.Whether_To_Use);

  const CreateCurriculum = async () => {
    try {
      const res = await contents.postCurriculum({
        Curriculum_Title: curriculum,
        Subtitle: subtitle,
        _Description: description,
        Division: division,
        Whether_To_Use: toUse,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
      toast.error(`Update failed!`);
    }
  };

  const UpdateCurriculum = async () => {
    console.log("hahah");
    try {
      const res = await contents.putCurriculum({
        _id: value?._id,
        Curriculum_Title: curriculum,
        Subtitle: subtitle,
        _Description: description,
        Division: division,
        Whether_To_Use: toUse,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ButtonComponent
        onClick={handleClickOpen}
        title={title}
        pading={"10px 0"}
        width={"100%"}
      />
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Curriculum add"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="small"
                  value={curriculum}
                  onChange={(e) => setCurriculum(e.target.value)}
                />
              }
              text="Curriculum  Title"
            />

            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="small"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              }
              text="Subtitle"
            />

            <TextFilter
              children={
                <CheckBox2Opstion
                  onChange={(e) => setDivision(e.target.value)}
                  title1={"Regular"}
                  title2={"Free-Trial"}
                  value={division}
                />
              }
              text="Division"
            />

            <TextFilter
              children={
                <MinHeightTextarea
                  minRows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              }
              text="Description"
            />

            <TextFilter
              children={
                <CheckBox2Opstion
                  onChange={(e) => setToUse(e.target.value)}
                  title1={"Yes"}
                  title2={"No"}
                  value={toUse}
                />
              }
              text="Whether to use"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={CreateCurriculum} title={"Save"} />
          <ButtonComponent onClick={UpdateCurriculum} title={"Update"} />
          <ButtonComponent onClick={handleClose} title={"Cancel"} />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
