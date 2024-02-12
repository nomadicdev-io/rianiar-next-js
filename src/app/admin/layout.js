import '@/components/admin/RAdmin.scss'
import RAdminSideNav from '@/components/admin/RAdminSideNav'
import { getData } from '@/store/apiFunctions';
import { atom } from 'jotai';
import RAdminDataContext from '../api/RAdminDataContext';
import RAdminBody from '@/components/admin/RAdminBody';

export const adminContext = atom({routeParam: ''})
export const activeContext = atom(null)

const AdminLayout = async ({children}) => {

  const data = await getData('/admin')

  return (
    <div className="r_admin_body">
        <RAdminDataContext data={data} />
        <RAdminSideNav />
        <RAdminBody>
          {children}
        </RAdminBody>
    </div>
  )
}

export default AdminLayout  