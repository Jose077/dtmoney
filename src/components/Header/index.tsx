import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Content, Container } from './styles'
import Modal from "react-modal"

interface HeadrProps {
    onOpenNewTransactionModal: () => void;
}

export function Header( { onOpenNewTransactionModal } : HeadrProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={ onOpenNewTransactionModal }> 
                    Nova transação
                </button>
            </Content >

            
        </Container >
    )
}