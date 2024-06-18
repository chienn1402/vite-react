import { Button, ButtonProps } from 'antd';
import { FC, ReactNode } from 'react';

type Props = ButtonProps & {
  children?: ReactNode;
};

const CustomButton: FC<Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
