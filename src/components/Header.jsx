import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();
    function toHome(){
        navigate("/")
    }
    
    return(
        <>
            <Top>
                <Logo onClick={toHome} src={logo} />
            </Top>
        </>
    )
}

const Logo = styled.img`
    width: 120px;
    margin-left: 5%;
    :hover{
        cursor: pointer;
    }
`;


const Top = styled.div`
    width: 100%;
    background-color: #6D24F9;
    height: 80px;
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;