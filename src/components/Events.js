const Events = () => {

const handleMyEvent = (e) => {
    //console.log(e);
    return alert("Ativou o evento...");
}

const renderSomething = (x) => {
  if(x){
    return <h1>Renderizando isso!</h1>;
  }else{
    return <h1>Também posso renderizar isso!</h1>;
  }
};

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => alert("Clicou...")}>Clique aqui também!</button>
      </div>
      <div>
        <button onClick={() => {
          if(true){
            alert("Obrigado...")
          }
        }}>Clica aqui também 2...</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events;