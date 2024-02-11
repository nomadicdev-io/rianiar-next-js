import '@/components/admin/RAdmin.scss'
import RAdminBody from '@/components/admin/RAdminBody';
import RAdminSideNav from '@/components/admin/RAdminSideNav'
import { atom } from 'jotai';

export const adminContext = atom(null)

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin`)
  return res.json()
}

const AdminLayout = async ({children}) => {

  const data = await getData()

  return (
    <div className="r_admin_body">
        <RAdminSideNav />
        <RAdminBody data={data}>
          {children}
        </RAdminBody>
    </div>
  )
}

export default AdminLayout  