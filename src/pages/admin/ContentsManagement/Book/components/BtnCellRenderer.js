import DialogBook from "./DialogBook";

const BtnCellRenderer = ({ value, data }) => {
  return <DialogBook value={data} title={"Edit"} />;
};

export default BtnCellRenderer;
