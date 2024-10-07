import { useState } from "react";

const Tooltip = ({ children, tooltip }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="tooltip-container" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && <div className="tooltip">{tooltip}</div>}
        </div>
    );
};

export default Tooltip;