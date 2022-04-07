// @ts-check
/**
 * Calculator module
 * @module Button
 * @author Ricardo Torrellas <ricardo.torrejas@gmail.com>
 * @requires classnames
 * @requires React
 */
import classnames from 'classnames';
import React from 'react';
/**
 * El boton constructor.
 * @category Category
 * @param {object} props 
 * @param {"button" | "submit" | "reset"} props.type - Espesifica el tipo de boton.
 * @param {object} props.children - Espesifica el tipo de boton.
 * @param {string} props.padding - Espesifica el padding del boton.
 * @param {string} props.margin - Espesifica el margen del boton.
 * @param {string} props.width - Espesifica el ancho del boton.
 * @param {string} props.height - Espesifica el alto del boton.
 * @param {string} props.font_family - Espesifica la typografia.
 * @param {string} props.font_size - Espesifica el tamano de la fuente.
 * @param {string} props.font_weight - Espesifica el grosor de la fuente.
 * @param {string} props.letter_spacing - Espesifica la separacion entre las letras. 
 * @param {string} props.letter_spacing - Espesifica la separacion entre las letras. 
 * @param {string} props.text_aling - Espesifica la alineacion del texto.
 * @param {string} props.text_color - Espesifica el color del texto.
 * @param {string} props.text_decoration - Anade una linea al texto
 * @param {string} props.text_decoration_color - Espesifica un color a la linea.
 * @param {string} props.text_decoration_style - Espesifica un estilo para la linea. 
 * @param {string} props.text_decoration_thickness - Espesifica un grosor a la linea.
 * @param {string} props.text_decoration_offset - Espesifica la separacion de la linea del texto.
 * @param {string} props.text_transform - Espesifica el uso de mayusculas en el texto.
 * @param {string} props.text_overflow - Espesifica donde se corta el texto con relacion al objeto.
 * @param {string} props.text_indent - Espesifica donde se corta el texto con relacion al objeto.
 * @param {string} props.vertical_aling - Espesifica la separacion de la linea del texto
 * @param {string} props.whitespace - Controla como manejar el espacio en blanco del texto.
 * @param {string} props.whitespace - Controla como manejar el espacio en blanco del texto.
 * @param {string} props.word_break -
 * @param {string} props.content -
 * @param {string} props.content -
 * @requires classnames
 * @requires React
 */
export function Button({children,type='button',padding,margin,width,height,font_family,font_size,font_weight,letter_spacing,text_aling,text_color,text_decoration,text_decoration_color,text_decoration_style,text_decoration_thickness,text_decoration_offset,text_transform,text_overflow,text_indent,vertical_aling,whitespace,word_break,content,bg_attachment,bg_color,bg_origin,bg_position,bg_repeat,bg_size,bg_image,gradient_color_stops,border_radius,border_width,border_color,border_style,outline_width,outline_color,outline_style,outline_offset,ring_color,ring_offset_width,ring_offset_color,box_shadow,box_shadow_color,opacity,blur,brightness,contast,drop_shadow,grayscale,hue_rotate,invert,saturate,sepia,backdrop_blur,backdrop_brightness,backdrop_contrast,backdrop_grayscale,backdrop_hue_rotate,backdrop_invert,backdrop_opacity,backdrop_saturate,backdrop_sepia,transition,animation,scale,rotate,translate,skew,transform_origin,cursor}) {

    const classNames = classnames(
        text_color ? text_color : 'text-red-600',
        );
    return (
        <>
        <button 
        type={type} 
        className={classNames}
        >
            {children}<br/>
            <p>Sop</p>
        </button>
        </>
    )
}
/**
 * Epa
 * @namespace Button
 * @name Cara
 */
export function Cara(props) {
    const {nalga,nalgota_de_negra_africana} = props
        return(
            <div>
            <p>SOP</p>
            <div>
                <a href="">Olis</a>
                <p>{nalga}</p>
            </div>
            </div>
        )
    }
/**
 * Holassss
 */
    export function Culo(props) {
        const {nalga,nalgota_de_negra_africana} = props
            return(
                <div>
                <p>SOP</p>
                <div>
                    <a href="">Olis</a>
                    <p>{nalga}</p>
                </div>
                </div>
            )
        }