import React from "react";

export const Jsx5 = () => {
  const isAdmin = true;
  const discount = 400;

  return <div>
    {isAdmin ? <h2>AdminUser</h2> : <h2>User</h2>}
    {!!discount &&<p> Discount:{discount}</p>}
    {discount ?<p> Discount:{discount}</p>:null};
         </div>;
};

