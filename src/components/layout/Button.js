import "./../css/Button.css"

const Button = ({type, href}) => {
    switch (type) {
        case "details":
                return (
                        <a href="{href}" className="btn btn_details">
                            <i class='bx bx-show' ></i> 
                            <span className="tooltip">Details</span>  
                        </a>                     
                );
                break;
        case "edit":
            return (
                    <a href="{href}" className="btn btn_edit">
                        <i class='bx bx-edit'></i>
                        <span className="tooltip">Edit</span>
                    </a>    
            );
            break;
            case "delete":
                return (
                        <a href="{href}" className="btn btn_delete">
                            <i class='bx bx-trash' ></i>  
                            <span className="tooltip">Remove</span>  
                        </a>                     
                );
                break;
                case "hide":
                return (
                        <a href="{href}" className="btn btn_hide">
                            <i class='bx bx-hide' ></i>   
                            <span className="tooltip">Hide</span>
                        </a>    
                );
                break;
        default:
            return(
                <a href="{href}" className="btn">
                    <span className="tooltip">Button</span>   
                </a>
            );
            break;
    }
    
}

export default Button