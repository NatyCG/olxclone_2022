import styled from "styled-components";

export const HeaderArea = styled.div`

    background-color: #FFF;
    height: 60px;
    border-bottom: 1px solid #CCC;

    .container{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;
        
        .logo1,
        .logo2,
        .logo3{
            font-size: 27px;
            font-weight: bold;
        }
        .logo1{color: #4B0082;}
        .logo2{color:#0F0; }
        .logo3{color: #00F;}
    }

    nav{
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li{
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul{
            display: flex;
            align-items: center;
            heigth: 40px;
        }

        li{
            margin-left: 20px;
            margin-right: 20px;

            a{
                color: #000;
                font-size: 14px;

                &:hover{
                    color:#999;
                }
                
                &.button{
                    background-color:#FF8100;
                    border-radius: 4px;
                    color:#FFF;
                    padding: 5px 10px;
                }

                &.button:hover{
                    background-color:#E57706;
                }
            }
        }
    }
`;

