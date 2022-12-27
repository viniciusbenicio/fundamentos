const TemplateExpression = () => {


  const name = "Vinicius";
  const data = {
    age: 25,
    job: "Dev",
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{10+15}</p>
      <p>{console.log(data)}</p>
    </div>

  );

}

export default TemplateExpression;