import RAdminBanner from "@/components/admin/RAdminBanner"
import { settingsData } from "@/store/adminData"

export const metadata = {
  title: settingsData.siteTitle,
}

const AdminSettings = () => {
  return (
    <>
      <RAdminBanner 
          breadcrumbData={settingsData.settings.breadcrumb}
          title={settingsData.settings.title}
      ></RAdminBanner>
    </>
  )
}

export default AdminSettings