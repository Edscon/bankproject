'use client';

import { ReloadBankingCookies } from "@/lib/actions/bank.actions";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React from 'react';
import { Button } from "./ui/button";

const ReloadButton = ({userId, appwriteItemId}:{userId:string, appwriteItemId:string} ) => {
    const router = useRouter();
    const handleClick = async () => {
        const response = await ReloadBankingCookies({userId, appwriteItemId})
        if (response) router.push('/')
    };
    return (
        <Button 
            onClick={handleClick} 
            variant="outline"
        >
            Reload
        </Button>
    )
}

export default ReloadButton