//const newMessage = "Frank Perez";
import PropTypes from 'prop-types';

const getResult = () => {
    return 4 + 4;
}

export const FirstApp = ( {title, subTitle} ) => {
    return(
        <>
        <h1>{ title }</h1>
        <h3>Junior Developer</h3>
        <p>{ getResult() }</p>
        <p>{subTitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}//isRequired es para que sea obligatorio

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo"
}//En caso de que el titulo o subtitulo no sean enviados, los dafaultProps se activan y muestran el mensaje de error.