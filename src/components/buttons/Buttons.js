import Link from 'next/link';
import './Buttons.scss';

export const RButtonGroup = ({children, cssClass})=> {
    return (
        <div className={`btn_group ${cssClass}`}>{children}</div>
    )
}

export const RAButton = ({title, theme, icon, href, size})=> {
    return (
        <Link title={title} href={href} className={`btn_ ${theme ? theme : 'primary'} ${size ? size : ''}`}>
            <span>{title}</span>
            {
                icon && <div className='icon_'>{icon}</div>
            }
        </Link>
    )
}

export const RButton = ({title, theme, icon, size, type})=> {
    return (
        <button title={title} className={`btn_ ${theme ? theme : 'primary'} ${size ? size : ''}`} type={type}>
            <span>{title}</span>
            {
                icon && <div className='icon_'>{icon}</div>
            }
        </button>
    )
}

export const RAIconButton = ({title, theme, icon, href, size})=> {
    return (
        <Link title={title} href={href} className={`btn_icon ${theme ? theme : 'primary'} ${size ? size : ''}`}>
            {icon}
        </Link>
    )
}