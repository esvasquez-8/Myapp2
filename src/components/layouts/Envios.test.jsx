import {render, screen } from '@testing-library/react';
import {describe, it, expect} from 'vitest'
import Envios from './Envios'

describe('Componente Envios', () => {
    it('debe mostrar el título Envios', () => {
        render(<Envios />)
        const titulo = screen.getByText('Envios')
        expect(titulo).toBeInTheDocument()
    })
})