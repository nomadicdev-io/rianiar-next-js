import { RAButton, RButtonGroup, RIconButton } from '../buttons/Buttons';
import { FaArrowRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { LuCopyCheck } from "react-icons/lu";
import './RModal.scss';

const RModal = () => {
  return (
    <div className='r_modal'>
      <div className='r_modal_overlay'></div>



      <div className='r_modal_action'>
        <RIconButton 
          title={'Modal Close'}
          icon={<MdClose />}
          onClick={()=> console.log('clicked')}
        />
      </div>

      <div className='r_modal_content'>

        <div className='r_modal_icon success_'>
          <LuCopyCheck />
        </div>

        <div className='content_'>
          <h4>Thank You!</h4>
          <p>We've received your submission, and we'll be in touch soon!</p>
        </div>

        <RButtonGroup cssClass={'center_'}>
          <RAButton 
            title={'Keep Exploring'}
            href={'/'}
            icon={<FaArrowRight />} 
          />
        </RButtonGroup>
      </div>

    </div>
  )
}

export default RModal