import RAdminBanner from "@/components/admin/RAdminBanner"
import { socialLinksData } from "@/store/adminData"

export const metadata = {
  title: socialLinksData.siteTitle,
}

const AdminSocialLinks = () => {
  return (
    <>
      <RAdminBanner 
          breadcrumbData={socialLinksData.socialinks.breadcrumb}
          title={socialLinksData.socialinks.title}
      ></RAdminBanner>
    </>
  )
}

export default AdminSocialLinks