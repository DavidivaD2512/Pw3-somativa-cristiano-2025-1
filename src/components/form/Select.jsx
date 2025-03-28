import style from './Select.module.css'

function Select({text, name, id, handlerChange}) {
    return (
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value="0">Selecione uma categoria</option>
                <option value="3">Ficção cientifica</option>
                <option value="4">Fantasia heroica</option>
                <option value="5">Romance</option>
                <option value="6">Distopia</option>
                <option value="7">Infantil</option>
            </select>
        </div>
    )
}

export default Select;