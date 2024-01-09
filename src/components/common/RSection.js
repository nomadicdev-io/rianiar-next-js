

const RSection = ({children, cssClass}) => {
  return (
    <section className={`section_ ${cssClass}`}>
        {children}
    </section>
  )
}

export default RSection