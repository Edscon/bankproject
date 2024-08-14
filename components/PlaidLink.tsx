import { createlinkToken, exchangePublicToken } from "@/lib/actions/user.actions";
import { StyledString } from "next/dist/build/swc";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from 'react';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { Button } from "./ui/button";

const PlaidLink = ({ user, variant }:PlaidLinkProps) => {
  
  const router = useRouter();
  
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log('Button')
    const getLinkToken = async () => {
        const data = await createlinkToken(user);
        setToken(data?.linkToken);
    }
    getLinkToken()
  }, [user])
  
  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token:string) => {
    await exchangePublicToken({
        publicToken: public_token,
        user
    })

    router.push('/')

  }, [user])

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);

  return (
    <>
    {variant === 'primary' ? (
        <Button 
            onClick={() => open()}
            disabled={!ready}
            className="plaidlink-primary"
        >
            Connect Bank
        </Button>
    ): variant === 'ghost' ? (
        <Button onClick={() => open()}>
            Connect Bank
        </Button>
    ): (
        <Button onClick={() => open()}>
            Connect Bank
        </Button>
    )}
    </>
    
  )
}

export default PlaidLink