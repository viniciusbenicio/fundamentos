const Events = () => {

const handleMyEvent = (e) => {
    //console.log(e);
    return alert("Ativou o evento...");
}

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
    </div>
  )
}

export default Events;