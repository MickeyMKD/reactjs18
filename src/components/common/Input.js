export const Input = ({
    type,
    placeholder,
    value,
    onChange,
    name,
    id,
    mouseDown,
    mouseUp,
    ...restProps
}) => {

    const iconType =  type === "password" ? "fa fa-eye-slash" : "fa fa-eye"

    return (
        <>
        <input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
             />
             :
        <textarea 
             name={name} 
             id={id} 
             cols="20" 
             rows="5" 
             value={value} />
        {name === "password" && 
            <button
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
            >
                <i className={iconType}></i>
            </button>
        }
    </>)
}