import react from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    color: #fff;
    .others{
        opacity: 0.5;
        text-shadow: none;
    }
    border-bottom: 1px solid #fff;
    text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 10px #fff, 0 0 10px #fff;
`;

const MenuHeader = styled.div`
    display: flex;
    align-items: center;
`;

const CustomHeader = () => {

    return (
        <Container>
            <MenuHeader>
                <img width="30" height="20" src="./white_slayer_circle.png" alt="main logo"/>
                <h3>Hashira</h3>
            </MenuHeader>
            <h4 className="others">Sanemi</h4>
            <h4>Kyojuro</h4>
            <h4 className="others">Giyu</h4>
        </Container>
    );
}

export default CustomHeader;