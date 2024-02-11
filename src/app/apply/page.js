"use client"

import RContainer from "@/components/common/RContainer";
import RSection from "@/components/common/RSection";
import RSectionTitile from "@/components/common/RSectionTitile";
import RRegistrationForm from "@/components/forms/RRegistrationForm";
import RRegistrationWrapper from "@/components/wrappers/RRegistrationWrapper";
import { atom } from "jotai";

export const countryArray = atom('')

export default function Apply() {

    return (
        <RSection>
            <RContainer>
                <RRegistrationWrapper>
                    <RSectionTitile title={'Apply Now'} cssClass={'have_margin_bottom'}><span>Start</span> your journey</RSectionTitile>
                    <RRegistrationForm />
                </RRegistrationWrapper>
            </RContainer>
        </RSection>
    )
  }
  