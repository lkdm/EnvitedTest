import React from "react"

interface Props {
    children: string | string[],
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({children}: Props) => {
    return <button>
        {children}
    </button>
}

export default Button