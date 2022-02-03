import classnames from 'classnames';
import React from 'react';
export function Button({type='button',className,test,children}) {
    return (
        <>
        <button 
        type={type} 
        className={classnames(className ? className : 'text-red-600',`bg-${test}`)}
        >
            {children}<br/>
        </button>
        </>
    )
}