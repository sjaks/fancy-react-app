import { Button } from "antd";

function AddButton({ onClick, status }) {
  return (
    <Button disabled={status} onClick={onClick}>
      New fox
    </Button>
  );
}

export default AddButton;
