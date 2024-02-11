import Link from "next/link"
import { FiHome } from "react-icons/fi";

const RAdminBreadcrumb = ({data}) => {
  return (
    <div className="r_admin_breadcrumb">
        <ul>
            {
                data.map((item, index)=> 
                    {if(index == data.length - 1){
                        return (
                            <li>
                                <p>{index == 0 && <i><FiHome /></i>}{item.title}</p>
                            </li> 
                        )
                    }else{
                        return (
                            <li>
                                <Link href={item.slug} title={item.title}>{index == 0 && <i><FiHome /></i>}{item.title}</Link>
                            </li>
                        )
                    }}
                )
            }

        </ul>
    </div>
  )
}

export default RAdminBreadcrumb