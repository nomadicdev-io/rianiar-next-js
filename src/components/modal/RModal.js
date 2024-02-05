import { RAButton, RButton, RButtonGroup, RIconButton } from '../buttons/Buttons';
import { FaArrowRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import { LuAlertTriangle } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import './RModal.scss';

const RModal = ({closeModal, type, title, description}) => {
  return (
    <div className='r_modal'>
      <div className='r_modal_overlay' onClick={closeModal}></div>



      <div className='r_modal_action'>
        <RIconButton 
          title={'Modal Close'}
          icon={<MdClose />}
          onClick={closeModal}
        />
      </div>

      <div className={`r_modal_content ${type}`}>

        {
          type == 'success' &&
          <div className='r_modal_icon '>
            <div className='icon_'>
              <FaCheck />
            </div>
          </div>
        }

        {
          type == 'danger' &&
          <div className='r_modal_icon '>
            <div className='icon_'>
              <RxCross2 />
            </div>
          </div>
        }

        {
          type == 'warning' &&
          <div className='r_modal_icon '>
            <div className='icon_'>
              <LuAlertTriangle />
            </div>
          </div>
        }

        <div className='content_'>
          {
            title && <h4>{title}</h4>
          }
          {
            description && <p>{description}</p>
          }
        </div>

        <RButtonGroup cssClass={'center_'}>
          {
            type == 'success' && 
            <RAButton 
              title={'Keep Exploring'}
              href={'/'}
              icon={<FaArrowRight />} 
            />
          }

          {
            type == 'danger' && 
            <RButton 
              title={'Try Again'}
              type={'button'}
              onClick={closeModal}
              icon={<GrRefresh />} 
              theme={'danger'}
            />
          }

          {
            type == 'warning' && 
            <RAButton 
              title={'Back To Page'}
              href={'/'}
              theme={'warning'}
              icon={<MdArrowOutward />} 
            />
          }
        </RButtonGroup>
      </div>

    </div>
  )
}

export default RModal