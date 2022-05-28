const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Ativou o evento")
    }
    
    return (
        <div className="component">
            <div>
                <button onClick={handleMyEvent}>Clique aqui </button>
            </div>
        </div>
    )
}

export default Events
