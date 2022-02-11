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
 * @component
 * @param {object} props 
 * @param {string} props.type - Espesifica el tipo de boton.
 * @param {object} props.children - Espesifica el tipo de boton.
 * @requires classnames
 * @requires React
 */
export function Button(props) {
    const {children,type='button',padding,margin,space_between,width,height,font_family,font_size,font_weight,letter_spacing,text,aling,text_color,text_decoration,text_decoration_color,text_decoration_style,vertical_aling,whitespace,word_break,content,bg_attachment,bg_color,bg_origin,bg_position,bg_repeat,bg_size,bg_image,gradient_color_stops,border_radius,border_width,border_color,border_style,outline_width,outline_color,outline_style,outline_offset,ring_color,ring_offset_width,ring_offset_color,box_shadow} = props;
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
        </button>
        </>
    )
}