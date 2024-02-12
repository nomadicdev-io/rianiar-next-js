import '@/components/admin/RAdmin.scss'
import RAdminSideNav from '@/components/admin/RAdminSideNav'
import { atom } from 'jotai';
import RAdminDataContext from '../api/RAdminDataContext';
import RAdminBody from '@/components/admin/RAdminBody';
import adminStore from '@/store/adminStore';

export const adminContext = atom({routeParam: ''})
export const activeContext = atom(null)

const AdminLayout = async ({children}) => {

  return (
    <div className="r_admin_body">
        <RAdminDataContext data={adminStore} />
        <RAdminSideNav />
        <RAdminBody>
          {children}
        </RAdminBody>
    </div>
  )
}

export default AdminLayout  