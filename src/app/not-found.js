import { RAButton, RButtonGroup } from "@/components/buttons/Buttons"
import RContainer from "@/components/common/RContainer"
import Image from "next/image";
import { LuHome } from "react-icons/lu";

const NotFound = () => {
  return (
    <section className="r_404_section">
        <RContainer>
            <div className="r_404_wrapper">
                <div className="r_404_wrapper_image">
                    <Image src="/404_image.png" alt="RianAir 404" width={960} height={702} />
                </div>
                <h2>We've lost this page !</h2>
                <p>We/re sorry, the page you are looking for doesn't exist or has been moved. Please go back to homepage.</p>
                <RButtonGroup cssClass={'center_ mt_2'}>
                    <RAButton 
                        title={'Go Back To Home'}
                        href={'/'}
                        icon={<LuHome />}
                    />
                </RButtonGroup>
            </div>
        </RContainer>
    </section>
  )
}

export default NotFound