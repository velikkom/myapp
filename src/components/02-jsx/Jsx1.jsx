
//Kural 1 : JSX içerisinde mutlaka bir taane parent ı olmalıdır.
//return ierisinde mutlaka bir div olmalı

//Kural 2 : Jsxlerin atrşbutleri camel caseolmalıdır.
//Kural 3 : Bazı attributeler html den farklı yazılır camel case olarak.
 

export const Jsx1 = () => {
  return (
    <div>
        <label htmlFor="Jsx1">Jsx1</label>
        <div className="Jsx">Hello</div>
    </div>
  );
};

