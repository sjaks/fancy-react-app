import { Image } from "antd";

function FoxImage({ source }) {
  return <Image width={400} src={source} placeholder={
    <div>Loading...</div>
  }/>;
}

export default FoxImage;
