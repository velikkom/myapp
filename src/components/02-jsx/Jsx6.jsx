import React from "react";

export const Jsx6 = () => {
  //bu bölümde her türlü iteraion yapılabilir.
  //

  const users = [
    { id: 1, name: "John", lastName: "Doe", age: 25 },
    { id: 2, name: "Jane", lastName: "Doe", age: 24 },
    { id: 3, name: "Alex", lastName: "Doe", age: 22 },
    { id: 4, name: "John", lastName: "Doe", age: 25 },
    { id: 5, name: "Jane", lastName: "Doe", age: 24 },
  ];

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
          Adı :  {item.name}<br/>
          Soyadı  {item.lastName} <br/>
          yası : {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
