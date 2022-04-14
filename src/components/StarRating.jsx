import { useState } from "react";
import Star from "./Star";
function StarRating ( { onChange } )
{
    const [ rating, setRating ] = useState( 0 );
    const changeRating = ( newRating ) =>
    {
        setRating( newRating );
        onChange?.( newRating );
    };
    return (
        <span className="flex text-2xl items-center cursor-pointer">
            { [ 1, 2, 3, 4, 5 ].map( ( value ) => (
                <Star
                    key={ value }
                    filled={ value <= rating }
                    onClick={ () => changeRating( value ) }
                />
            ) ) }
        </span>
    );
}
export default StarRating;
