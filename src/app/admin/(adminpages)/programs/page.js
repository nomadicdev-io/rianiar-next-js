import RAdminBanner from "@/components/admin/RAdminBanner"
import { programsData } from "@/store/adminData"

export const metadata = {
  title: programsData.siteTitle,
}

const AdminPrograms = () => {
  return (
    <>
      <RAdminBanner 
          breadcrumbData={programsData.programs.breadcrumb}
          title={programsData.programs.title}
      ></RAdminBanner>
    </>
  )
}

export default AdminPrograms