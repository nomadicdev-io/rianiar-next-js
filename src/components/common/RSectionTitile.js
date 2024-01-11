import './RSectionTitile.scss';

const RSectionTitile = ({title, children, cssClass}) => {
  return (
    <div className={`section_title ${cssClass}`}>
        <h4>{title}</h4>
        <h2>{children}</h2>
    </div>
  )
}

export default RSectionTitile