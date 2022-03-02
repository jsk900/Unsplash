import React from 'react';

const Buttons = ({ page, totalPagesRef, nextPage, prevPage }) => {
  return (
    <aside>
      {page > 1 && <button onClick={prevPage}>Previous Page</button>}
      {page !== totalPagesRef && <button onClick={nextPage}>Next Page</button>}
    </aside>
  );
};

export default Buttons;
