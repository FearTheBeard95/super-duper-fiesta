import { Image } from 'antd';

const ImageDemo = (props) => {
  return (
    <Image
      width='100%'
      src={props.src}
    />
  );
}

export default ImageDemo