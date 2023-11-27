import { TailSpin } from 'react-loader-spinner';

interface SpinnerProps {
  color?: string;
}

const Spinner = ({ color }: SpinnerProps) => {
  return (
    <>
      <TailSpin color={color ? color : '#fff'} height={20} width={20} />
    </>
  );
};

export default Spinner;
