import React from 'react';
import style from './Accordion.module.scss'

const Accordion = ({children, accordionTitle, active, setActive}) => {
    return (
        <div className={style.Accordion}>
            <div className={style.accordionTitle}
                 onClick={() => setActive(accordionTitle)}>
                <span>{accordionTitle}</span>
            </div>
            <div className={(active === accordionTitle ? style.show : "") + style.accordionContent}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;

