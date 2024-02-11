import '@/components/admin/RAdmin.scss'
import RAdminBody from '@/components/admin/RAdminBody';
import RAdminSideNav from '@/components/admin/RAdminSideNav'
import adminStore from '@/store/adminStore';
import { atom } from 'jotai';

export const pageContext = atom(adminStore.pages.dashboard)

const AdminLayout = ({children}) => {
  return (
    <div className="r_admin_body">
        <RAdminSideNav />
        <RAdminBody>
          {children}
        </RAdminBody>
    </div>
  )
}

export default AdminLayout  