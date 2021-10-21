const e = React.createElement;

const SaveStatementFromForm = () => {

    const [state, setState] = React.useState('');

    const handleOnChange = (event) => {
        setState(event.target.value);
    }

    return e (
        'input',
        {onChange: handleOnChange, value: state, placeholder: 'Введите имя'},
    );

}

ReactDOM.render(e(SaveStatementFromForm), document.querySelector('#form'));
