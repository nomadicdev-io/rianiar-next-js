import '@/components/admin/RAdmin.scss'
import RAdminBanner from '@/components/admin/RAdminBanner';
import RAdminSideNav from '@/components/admin/RAdminSideNav'

const AdminLayout = ({children}) => {

  return (
    <div className="r_admin_body">
        <RAdminSideNav />
        {/* {
          pageData &&
          <RAdminBanner 
            breadcrumbData={pageData.breadcrumb}
            title={pageData.title}
            greetings={1}
          />
        } */}
        {children}
    </div>
  )
}

export default AdminLayout  