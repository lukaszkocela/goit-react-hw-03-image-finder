import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
   <Circles
  height="80"
  width="80"
  color="#3f51b5"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass="Loader"
  visible={true}
/>
  );
};
