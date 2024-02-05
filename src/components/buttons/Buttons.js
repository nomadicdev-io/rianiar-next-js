import Link from 'next/link';
import './Buttons.scss';

export const RButtonGroup = ({children, cssClass})=> {
    return (
        <div className={`btn_group ${cssClass}`}>{children}</div>
    )
}

export const RAButton = ({title, theme, icon, href, size, target})=> {
    return (
        <Link title={title} href={href} className={`btn_ ${theme ? theme : 'primary'} ${size ? size : ''}`} target={target && target}>
            <span>{title}</span>
            {
                icon && <div className='icon_'>{icon}</div>
            }
        </Link>
    )
}

export const RButton = ({title, theme, icon, size, type, onClick})=> {
    return (
        <button title={title} onClick={onClick ? onClick : null} className={`btn_ ${theme ? theme : 'primary'} ${size ? size : ''}`} type={type}>
            <span>{title}</span>
            {
                icon && <div className='icon_'>{icon}</div>
            }
        </button>
    )
}

export const RAIconButton = ({title, theme, icon, href, size, target})=> {
    return (
        <Link title={title} href={href} className={`btn_icon ${theme ? theme : 'primary'} ${size ? size : ''}`} target={target && target}>
            {icon}
        </Link>
    )
}

export const RIconButton = ({title, theme, icon, size, type, onClick})=> {
    return (
        <button title={title} className={`btn_icon ${theme ? theme : 'primary'} ${size ? size : ''}`} type={type} onClick={onClick}>
            {icon}
        </button>
    )
}