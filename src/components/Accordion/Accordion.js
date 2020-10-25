import React from 'react';
import style from './Accordion.module.scss'

const Accordion = ({children}) => {
    return (
        <div className={style.Accordion}>
            {children}
        </div>
    );
};

export default Accordion;
