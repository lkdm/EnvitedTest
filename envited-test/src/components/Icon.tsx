import React, { ReactElement } from 'react'

interface Props {
    children: string | string[]
}

const Icon = ({ children }: Props) => <div className="icon">{children}</div>

export default Icon