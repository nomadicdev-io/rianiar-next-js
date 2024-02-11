"use client"

import RContainer from "@/components/common/RContainer";
import RSection from "@/components/common/RSection";
import RLoginWrapper from "@/components/wrappers/RLoginWrapper";

export default function Login() {

    return (
        <RSection cssClass={'less_padding'}>
            <RContainer>
               <RLoginWrapper />
            </RContainer>
        </RSection>
    )
  }
  