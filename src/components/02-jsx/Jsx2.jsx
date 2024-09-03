

export const Jsx2 = () => {
const student = {
    firstName : "Ahmet",
    lastName : "Yılmaz",
    age : 25,
    skils:["Html","Css","Js"],
    adress:{
        street:"123 main str",
        city:"AnyTown",
        state:"NY"
    },
}

  return (
    <ul>
        <li>
            <b>Name:<span> {student.firstName}</span></b>
        </li>
        <li>
            <b>Last NAme:<span> {student.lastName}</span></b>
        </li>
        <li>
            <b>Adress:<span> {student.adress.street}</span></b>
        </li>
        <li>
            <b>Skilss:<span> {student.skils.toString()}</span></b>
        </li>
    </ul>
  )
};
