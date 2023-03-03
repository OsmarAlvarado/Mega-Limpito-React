

const Button = (props) => {

    const { classButton, nameButton } = props

    return (
        <button className={classButton}>
            {nameButton}
        </button>
    )
}

export default Button