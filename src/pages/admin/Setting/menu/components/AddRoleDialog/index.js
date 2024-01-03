import { MenuItem } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import ButtonComponent from "../../../../../components/buttonComponent";
import SelectBox from "../../../../../components/selectsBox";
import TextFilter from "../../../../WebsiteManagement/Coupon/components/TextFilter";

//data
import menu from "../../../../../../services/api/admin/settings/menu";
import TextBox from "../../../../../components/TextBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ApplyA = [
  {
    title: "Yes",
    value: true,
  },
  {
    title: "No",
    value: false,
  },
];

export default function AddRoleDialog() {
  const [open, setOpen] = useState(false);
  const [apply, setApply] = useState(true);
  const [role, setRole] = useState();
  const [slug, setSlug] = useState();

  const Add = async () => {
    try {
      const res = await menu.actionMenu({
        Action: "POST",
        Role: role,
        Slug: slug,
        Apply: apply,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options = ["Search teacher name", "Option 2"];

  return (
    <React.Fragment>
      <ButtonComponent
        maxWidth={"xl"}
        title={"Add"}
        onClick={handleClickOpen}
      />
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Add Role"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextFilter
              children={
                <TextBox
                  size="small"
                  sx={{ p: "8px" }}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              }
              text="Role"
            />
            <TextFilter
              children={
                <TextBox
                  size="small"
                  sx={{ p: "8px" }}
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
              }
              text="Slug"
            />
            <TextFilter
              children={
                <SelectBox
                  fullWidth={"fullWidth"}
                  size={"small"}
                  value={apply}
                  onChange={(e) => setApply(e.target.value)}
                  children={ApplyA.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.title}
                      </MenuItem>
                    );
                  })}
                />
              }
              text="Apply"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent title={"Add"} onClick={Add} />
          <ButtonComponent title={"Cancel"} />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
