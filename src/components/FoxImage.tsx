import { Image } from "antd";

function FoxImage({ source }) {
  return <Image width={965} src={source} placeholder={
    <div>Loading...</div>
  }/>;
}

export default FoxImage;
