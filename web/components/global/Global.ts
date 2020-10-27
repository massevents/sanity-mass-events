// Base
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    * {
        border-collapse: collapse;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        vertical-align: top;
    }

    html {
        font-size: 16px;
    }

    html,    
    body {          
        height: 100%;        
        margin: 0;        
        padding: 0;  

        &.no-scroll{
            overflow: hidden;
        }  
    }    
       
    #__next {        
        height: 100%;    
    }    
    
    a{       
        &:focus{            
            outline: none;        
        }    
    }
`
