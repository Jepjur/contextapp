import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style = {{ background: theme.ui}}>The hitchhikers guide to the galaxy</li>
                <li style = {{ background: theme.ui}}>The stranger</li>
                <li style = {{ background: theme.ui}}>Crime and punishment</li>
                <li style = {{ background: theme.ui}}>Pachinko</li>
            </ul>
        </div>
     );
}
 
export default BookList;