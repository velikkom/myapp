
export const Jsx7 = () => {
    
 
    //const arr =[1,2,3,4,5,6,7,8,9,10]; 
    const arr = [... new Array(10)].map((item, index)=> index + 1);
    console.log(arr);
       return(
        <div>
            { /*{arr.map((item)=>(
                
                    <h4 key={item}>{item}</h4>
                
            ))}*/ }
        {arr.map((item)=>(
            <h4 key={item}>Hello Loops</h4>
        ))}
        </div>
       
    )};