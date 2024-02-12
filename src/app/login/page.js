import RContainer from "@/components/common/RContainer";
import RSection from "@/components/common/RSection";
import RLoginWrapper from "@/components/wrappers/RLoginWrapper";

export const metadata = {
    title: 'Login | RianAir-The Sky is Ours'
}

export default function Login() {

    return (
        <RSection cssClass={'less_padding'}>
            <RContainer>
               <RLoginWrapper />
            </RContainer>
        </RSection>
    )
  }
  