import { useState } from 'react'
import { Mic } from 'lucide-react';
import './App.css'

export default function App() {
 

  return (
    <>
      <main>
        <section className='caixa'>
          <div className='bola1'></div>
          <div className='bola2'></div>
        </section>
        <h1>vamos ver o que eu posso fazer por voce</h1>
        <div className='tela1'>
        <div className='icone'>
          <img src={Mic} alt="" />
        </div>
          <button>Relembrar</button>
        </div>
        <div className='tela2'></div>
        <div className='tela3'></div>
        <section className='caixa2'>
          <h1>Pesquisas recentes</h1>
          <div className='perguntas'></div>
          <div className='perguntas'></div>
          <div className='perguntas'></div>
        </section>
      </main>
    </>
  )
}


