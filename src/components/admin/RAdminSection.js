import RAdminContainer from "../common/RAdminContainer"

const RAdminSection = ({children}) => {
  return (
    <section className="r_admin_section">
        <RAdminContainer>
            {children}
        </RAdminContainer>
    </section>
  )
}

export default RAdminSection