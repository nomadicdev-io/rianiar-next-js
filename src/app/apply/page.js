"use client"

import RContainer from "@/components/common/RContainer";
import RSection from "@/components/common/RSection";
import RSectionTitile from "@/components/common/RSectionTitile";
import RRegistrationForm from "@/components/forms/RRegistrationForm";
import RRegistrationWrapper from "@/components/wrappers/RRegistrationWrapper";
import { client } from "../appwrite";
import { Databases, ID } from "appwrite";

const databases = new Databases(client);

export default function Apply() {

    const submitData = async ()=> {
        try{
            const res = await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
                '65ba185d505bda84ea4b',
                ID.unique(),
                { "title": "Hamlet" }
            );

            console.log(res)

        }catch(error){
            console.log(error)
        }
    }

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
  