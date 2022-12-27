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
    </div>
  )
}

export default Events;