import Link from 'next/link';
import './Buttons.scss';

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

export const RAIconButton = ({title, theme, icon, href, size})=> {
    return (
        <Link title={title} href={href} className={`btn_icon ${theme ? theme : 'primary'} ${size ? size : ''}`}>
            {icon}
        </Link>
    )
}