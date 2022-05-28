const TemplateExpressions = () => {
    
    const name = "João"
    const data = {
        age: 24,
        job: 'Programmer',
    };

    return (
        <div className="component">
            <h1> Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} e tem {data.age} anos. </p>
        </div>
    )

}

export default TemplateExpressions
