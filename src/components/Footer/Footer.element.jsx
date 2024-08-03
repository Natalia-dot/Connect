import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.div`
 
& li{
    color: white;
}
.footer {
    background-color: black;
   

}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* padding: 20px; */
}

.footer-column {
    flex: 1;
  min-width: 200px;
text-align: center;
}

.footer-column h2 {
    color:  ${({ theme }) => theme.palette.button.light};;
}



.footer-column ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer-column li {
    margin-bottom: 10px;
}



.footer-bottom {
    background-color: ${({ theme }) => theme.palette.button.light};
    color: black;
    padding: 10px 0;
    text-align: center;
}


@media (max-width: 767px) {
    .footer-column {
        flex: 1;
    
    }
    .footer-content{
        flex-direction: column;
    }

}




`;

export const FooterElement = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};
