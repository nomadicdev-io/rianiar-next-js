"use client"

import { useSelectedLayoutSegments } from 'next/navigation';
import Header from './Header';
import AdminHeader from './AdminHeader';

const RHeader = () => {

    const condtionalPath = useSelectedLayoutSegments();

    if(condtionalPath[0] == 'admin') return <AdminHeader />

    return <Header /> 
}

export default RHeader