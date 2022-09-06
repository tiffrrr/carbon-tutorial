import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Button,
  ComposedModal,
  ModalHeader,
  ModalBody,
} from 'carbon-components-react';
function ComponentPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
            <ComposedModal size="lg">
              <ModalHeader />
              <ModalBody>
                <p className="bx--modal-content__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse cursus fermentum risus, sit amet fringilla nunc
                  pellentesque quis. Duis quis odio ultrices, cursus lacus ac,
                  posuere felis. Donec dignissim libero in augue mattis, a
                  molestie metus vestibulum. Aliquam placerat felis ultrices
                  lorem condimentum, nec ullamcorper felis porttitor.
                </p>
              </ModalBody>
            </ComposedModal>,

            document.body
          )}
      <Button kind="primary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
    </>
  );
}
// function ComponentPage(){
//   return(
//     <>

//     </>
//   );
// };

export default ComponentPage;
