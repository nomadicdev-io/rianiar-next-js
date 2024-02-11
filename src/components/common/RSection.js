

const RSection = ({children, cssClass}) => {
  return (
    <section className={`section_ ${cssClass ? cssClass : ''}`}>
        {children}
    </section>
  )
}

export default RSection