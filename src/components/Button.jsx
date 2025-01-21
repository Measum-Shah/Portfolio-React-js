/**
 *  @copyright 2025 Measum-Shah
 * @license Apache-2.0 */

// node modules
import PropTypes from "prop-types"

// Primary Button




const ButtonPrimary = ({
    href,target='_self', label,icon,classes 
}) => {

if(href){
    return (
    <a 
    href={href} target={target} className={"btn-primary btn " + classes}>
        {label}

        {icon ?
        <span className="material-symbol-rounded" aria-hidden="true">
            {icon}
        </span> 
        :undefined }
        </a>
    )
}
else{
    return(
        <button className={"btn-primary btn " + classes}>
            {label}
            
        {icon ?
        <span className="material-symbol-rounded" aria-hidden="true">
            {icon}
        </span> 
        :undefined }
        </button>
        
    )
}

}

ButtonPrimary.PropTypes={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string    
}
// ----------------------------Outline Button--------------------------------

const ButtonOutline = ({
    href,target='_self', label,icon,classes 
}) => {

if(href){
    return (
    <a 
    href={href} target={target} className={"btn-outline btn " + classes}>
        {label}
        {icon}
        {/* {icon ?
        <span className="material-symbol-rounded">
            {icon}
        </span> 
        :undefined } */}
        </a>
    )
}
else{
    return(
        <button className={"btn-outline btn " + classes}>
            {label}
            {icon}
            
        {/* {icon ?
        <span className="material-symbol-rounded" aria-hidden="true">
            {icon}
        </span> 
        :undefined } */}
        </button>
        
    )
}

}

ButtonOutline.PropTypes={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string    
}

export {ButtonPrimary,ButtonOutline}
