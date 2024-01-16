import { Grid, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import { toast } from "react-toastify";
import FilePick from "../../../../../components/FilePick";
import MinHeightTextarea from "../../../../../components/MinHeightTextarea";
import TextFilter from "../../../../../components/TextFilter";
import ButtonComponent from "../../../../../components/buttonComponent";
import CheckBox2Opstion from "../../../../../components/checkBox";
//data
import contents from "../../../../../../services/api/admin/contents";
import Clound from "../../../../../../services/clound";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBook({ title, value }) {
  const [book, setBook] = useState(value?.Book_Title);
  const [subtitle, setSubtitle] = useState(value?.Subtitle);
  const [brief, setBrief] = useState(value?.Brief_Description);
  const [Summary, setSummary] = useState(value?.Summary_Sysnopsis);
  const [Class, setClass] = useState(value?.Class_Goal);
  const [genre, setGenre] = useState(value?.Genre);
  const [level, setLevel] = useState(value?.Level);
  const [page, setPage] = useState(value?.Page);
  const [vocabulary, setVocabulary] = useState(value?.Vocalbulary);
  const [grade, setGrade] = useState(value?.Grade);
  const [Lexile, setLexile] = useState(value?.Lexile);
  const [imageCover, setImageCover] = useState();
  const [attachments, setAttachments] = useState();
  const [toUse, setToUse] = useState(value?.true);

  const CreateBook = async () => {
    try {
      const imageCloundURL = await Clound(imageCover);
      const attachmentsURL = await Clound(attachments);
      const res = await contents.postBook({
        Book_Title: book,
        Subtitle: subtitle,
        Genre: genre,
        Grade: grade,
        Lexile: Lexile,
        Page: page,
        Vocalbulary: vocabulary,
        Whether_To_Use: toUse,
        Brief_Description: brief,
        Summary_Sysnopsis: Summary,
        Class_Goal: Class,
        Level: level,
        Image: imageCloundURL,
        Attach: attachmentsURL,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
      toast.error(`Update failed!`);
    }
  };

  const UpdateBook = async () => {
    try {
      const imageCloundURL = await Clound(imageCover);
      const attachmentsURL = await Clound(attachments);
      const res = await contents.putBook({
        _id: value?._id,
        Book_Title: book,
        Subtitle: subtitle,
        Genre: genre,
        Grade: grade,
        Lexile: Lexile,
        Page: page,
        Vocalbulary: vocabulary,
        Whether_To_Use: toUse,
        Brief_Description: brief,
        Summary_Sysnopsis: Summary,
        Class_Goal: Class,
        Level: level,
        Image: imageCloundURL,
        Attach: attachmentsURL,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
    }
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle>{"Book Registration"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="small"
                  value={book}
                  onChange={(e) => setBook(e.target.value)}
                />
              }
              text="Book Title"
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
                <TextField
                  fullWidth
                  size="small"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                />
              }
              text="Brief description"
            />

            <TextFilter
              children={
                <MinHeightTextarea
                  minRows={4}
                  value={Summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              }
              text="Summary synopsis"
            />

            <TextFilter
              children={
                <MinHeightTextarea
                  minRows={4}
                  value={Class}
                  onChange={(e) => setClass(e.target.value)}
                />
              }
              text="Class Goal"
            />

            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="small"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              }
              text="Genre"
            />
            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="small"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
              }
              text="Level"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      value={page}
                      type="number"
                      onChange={(e) => setPage(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      value={vocabulary}
                      onChange={(e) => setVocabulary(e.target.value)}
                    />
                  </Grid>
                </Grid>
              }
              text="Page | Vocabulary"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      value={Lexile}
                      onChange={(e) => setLexile(e.target.value)}
                    />
                  </Grid>
                </Grid>
              }
              text="Grade /Lexile"
            />

            <TextFilter
              children={
                <FilePick
                  inputProps={{ accept: "image/*" }}
                  onChange={(e) => setImageCover(e)}
                  value={imageCover}
                />
              }
              text="Cover image"
            />

            <TextFilter
              children={
                <FilePick
                  inputProps={{ accept: "audio/*, .pdf" }}
                  onChange={(e) => setAttachments(e)}
                  value={attachments}
                />
              }
              text="Attachments"
            />

            <TextFilter
              children={
                <CheckBox2Opstion
                  onChange={(e) => setToUse(e.target.value)}
                  title1={"Use"}
                  title2={"No Useale"}
                  value={toUse}
                />
              }
              text="Whether to use"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={CreateBook} title={"Save"} />
          <ButtonComponent onClick={UpdateBook} title={"Update"} />
          <ButtonComponent onClick={handleClose} title={"Cancel"} />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
