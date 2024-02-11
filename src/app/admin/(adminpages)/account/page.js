import RAdminBanner from "@/components/admin/RAdminBanner"
import { accountData } from "@/store/adminData"

export const metadata = {
  title: accountData.siteTitle,
}

const AdminAccount = () => {
  return (
    <>
      <RAdminBanner 
          breadcrumbData={accountData.account.breadcrumb}
          title={accountData.account.title}
      ></RAdminBanner>
    </>
  )
}

export default AdminAccount