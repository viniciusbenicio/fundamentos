const Challenge = () => {
  let n1 = 10;
  let n2 = 10;

const handleSum = (e) => {
  let soma = n1 + n2;

  console.log(soma);
}

  return (
    <div>
      <p>
       Numero 1: {n1}
      </p>
      <p>
       Numero 2: {n2}
      </p>
      <h2>Soma dos valores...</h2>
      <button onClick={handleSum}>Somar os valores...</button>
    </div>

  );
}

export default Challenge;