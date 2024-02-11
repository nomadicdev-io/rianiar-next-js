import RAdminBanner from "@/components/admin/RAdminBanner"
import { assistaneData } from "@/store/adminData"

export const metadata = {
  title: assistaneData.siteTitle,
}

const AdminAssistance = () => {
    return (
      <>
        <RAdminBanner 
            breadcrumbData={assistaneData.assistance.breadcrumb}
            title={assistaneData.assistance.title}
        ></RAdminBanner>
      </>
    )
  }
  
  export default AdminAssistance