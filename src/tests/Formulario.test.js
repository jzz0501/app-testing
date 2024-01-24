import userEvent from "@testing-library/user-event";
import Formulario from "../components/Formulario";
import { render, screen } from "@testing-library/react";
import { mayorDeEdad } from "../components/Formulario";

describe('funcion mayorDeEdad', () => {

    test('Comprobar la funcion devuelve un valor booleano', () => {
        const result = mayorDeEdad(30)
        expect(typeof result).toBe('boolean');
    })

    test('Comprobar que si la entrada a la funcion es 18 devuelve true', () => {
        const result = mayorDeEdad(18)
        expect(result).toBeTruthy();
    })

    test('Comprobar que si la entrada a la funcion es un numero mayor a 18 nos devuelve true', () => {
        const result = mayorDeEdad(19)
        expect(result).toBeTruthy();
    })

    test('Comprobar que si la entrada a la funcion es un numero menor a 18 nos devuelve false', () => {
        const result = mayorDeEdad(17)
        expect(result).toBeFalsy();
    })

    test('Comprobar que si la entrada a la funcion es un numero negativo nos devuelve null', () => {
        const result = mayorDeEdad(-1)
        expect(result).toBeNull();
    })
})

describe('funcionaliad de formulario', () => {

    let cabecera2, img, campoNombre, campoEdad, button, cabecera6

    beforeEach(() => {
        render(<Formulario/>)
        cabecera2 = screen.getByRole('heading', {level: 2})
        img = screen.getByAltText('icono')
        campoNombre = screen.getByLabelText('Nombre')
        campoEdad = screen.getByLabelText('Edad')
        button = screen.getByRole('button', {name: 'Enviar'})
    })

    test('Comprueba que se renderiza cabecera cuyo contenido es "Rellena el formulario"', () => {
        expect(cabecera2).toBeInTheDocument()
    })
    
    test('Comprueba que se renderiza el imagen', () => {
        expect(img).toBeInTheDocument()
    })
    
    
    test('Comprueba que se renderiza el campo de texto de nombre', () => {
        expect(campoNombre).toBeInTheDocument()
    })

    test('Comprueba que se renderiza el campo de edad', () => {
        expect(campoEdad).toBeInTheDocument()
    })
    
    test('Comprueba que se renderiza el boton', () => {
        expect(button).toBeInTheDocument()
    })

    test('Comprueba que cuando el usuario rellena el formulario aparece una cabecera de nivel 6', async () => {
        const user = userEvent.setup()
        await user.type(campoNombre, 'zongzhen')
        await user.type(campoEdad, '18')
        await user.click(button)
        cabecera6 = screen.getByRole('heading', {level: 6})
        expect(cabecera6).toBeInTheDocument()
    })

})