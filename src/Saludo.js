import PropTypes from 'prop-types';

const Saludo = ({apellido='Aparicio', nombre='Anthony'}) => {
    
    //Desestructuración de objetos
    const Persona = {
        nombre: 'Anthony',
        edad: 26,
        mascota: false
    }

    const Animal = {
        tipo: 'Perro',
        edad: '6',
        id: 15
    }

    const {edad} = Persona;
    const {id:idAnimal} = Animal;

    console.log(idAnimal);



    return(<h1>El identificador del Animal es: {idAnimal}</h1>);
}

Saludo.propTypes = {
    edad: PropTypes.number.isRequired,
    apellido: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
}

Saludo.defaultProps = {
    edad: 50,
    nombre: 'Invitado'
}

export default Saludo;