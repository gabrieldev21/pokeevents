import React, { HTMLAttributes, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Overload } from './style';

interface PortalProps {
  children: ReactNode;
}

function Portal ({ children }: PortalProps ) {
  return createPortal(children, document.body);
};

export const Modal = (props: HTMLAttributes<HTMLDivElement>)  => {

  return (
    <Portal>
      <Overload {...props} />
    </Portal>
  );
};

export default Modal;
