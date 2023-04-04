import React, { useContext } from 'react';
import { ThemeContext, themes } from './Themes';

export default function Article() {

    const theme = useContext(ThemeContext);

    return <article style={themes[theme]}>
        <h3 tabIndex={7} aria-label="Egy cikk">Article component</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe velit voluptatum veritatis provident optio quidem sint ipsum? Ex, odit aperiam expedita, ab ipsam accusantium, maiores praesentium atque minima et nulla!</p>
    </article>
}