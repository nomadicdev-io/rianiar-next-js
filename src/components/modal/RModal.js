import { RAButton, RButton, RButtonGroup, RIconButton } from '../buttons/Buttons';
import { FaArrowRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import { LuAlertTriangle } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import './RModal.scss';
import {motion} from "framer-motion";

const RModal = ({closeModal, type, title, description}) => {
  return (
    <div className='r_modal'>
      <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        exit={{ opacity: 0 }}
        className='r_modal_overlay' 
        onClick={closeModal}>
      </motion.div>



      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      exit={{ opacity: 0 }}
      className='r_modal_action'>
        <RIconButton 
          title={'Modal Close'}
          icon={<MdClose />}
          onClick={closeModal}
        />
      </motion.div>

      <motion.div 
        className={`r_modal_content ${type}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        exit={{ opacity: 0, scale: 0 }}
      >

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
            <RButton 
              title={'Keep Exploring'}
              type={'button'}
              onClick={closeModal}
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
      </motion.div>

    </div>
  )
}

export default RModal