// STYLES 
import './FirstComponent.css'
import MyComponent from './MyComponent';

const FirstComponent = () => {
    // Componente funcional
    return( 
        
        <div className='component'>
            {/* Comentário no JSX  */}
            <h1>
                Meu primeiro componente
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum doloremque tenetur soluta perferendis odio, quaerat ipsum placeat distinctio delectus facere impedit expedita suscipit rem? Officiis sapiente recusandae illo beatae!
            </p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;
