const Challenge = () => {
    const num1 = 10;
    const num2 = 20;

    return (
        <div className="component">
            <h1>Challenge</h1>
            <p>
                Os números inseridos foram:
            </p>
            <p>A: {num1}</p>
            <p>B: {num2}</p>
            <button onClick={() => console.log(num1 + num2)}>
                Somar
            </button>
        </div>
    )


}

export default Challenge;
