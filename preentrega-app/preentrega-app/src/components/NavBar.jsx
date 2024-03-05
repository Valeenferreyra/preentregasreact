import CartWidget from "./CartWidget";
import CartWidget from "./ButtonComponent";

export default function NavBar () {

    const caracteristicas = [
        {
            color:'red',
            texto: 'contacto'
        },
        {
            color:'red',
            texto: 'productos'
        },
        {
            color:'red',
            texto: 'nosotros'
        }
    ];

    return (
        <>
        <ButtonComponent
        texto={caracteristicas[0].texto}
        color={caracteristicas[0].color}
        />
        <ButtonComponent
        texto={caracteristicas[1].texto}
        color={caracteristicas[1].color}
        />
        <ButtonComponent
        texto={caracteristicas[2].texto}
        color={caracteristicas[2].color}
        />
        <CartWidget/>
        </>
    )
}
