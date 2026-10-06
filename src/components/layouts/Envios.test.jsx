import {fireEvent, render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest'
import Envios from './Envios'

describe('Componente Envios', () => {
    it('debe iniciar con cero envios', () =>{
        render(<Envios/>)
        expect(screen.getByText('Envios registrados: 0')).toBeInTheDocument()
    })

    it('debe aumentar la cantidad al presionar el boton', () => {
        render(<Envios />)
        const boton = screen.getByRole('button', { name: 'Agregar envio'})
        fireEvent.click(boton)
        expect(screen.getByText('Envios registrados: 1')).toBeInTheDocument()
    })
})