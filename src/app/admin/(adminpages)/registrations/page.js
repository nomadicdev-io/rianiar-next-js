import RAdminBanner from "@/components/admin/RAdminBanner"
import RAdminSection from "@/components/admin/RAdminSection"
import RAdminRegistraion from "@/components/admin/registraion/RAdminRegistraion"
import { registrationData } from "@/store/adminData"

export const metadata = {
  title: registrationData.siteTitle,
}

const AdminRegistraion = () => {
  return (
    <>
      <RAdminBanner 
          breadcrumbData={registrationData.breadcrumb}
          title={registrationData.title}
      >
      </RAdminBanner>
      <RAdminSection>
        <RAdminRegistraion />
      </RAdminSection>
    </>
  )
}

export default AdminRegistraion