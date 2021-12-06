import react from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    z-index: 5;
    position: relative;
    iframe{
        border: none;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    
    h2{
        font-size: 3.5rem;
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 6px;
    }
    .small-text{
        opacity: 0.7;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 6px;
    }
    .text{
        width: 400px;
    }
`;

const ImageContainer = styled.div`
    width: 300px;
    height: 500px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`;

const VideoContainer = styled.div`
    width: 300px;
    height: 500px;
    @media (max-width: 800px){
        display: none;
    }
`;

const PowerItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    border-right: 1px solid #fff;
    padding-left: 2rem;
    :first-of-type{
        padding: 0;
    }
    :last-of-type{
        border: none;
    }
    .item{
        font-size: 1.5rem;
        margin: 0;
    }
    .item-text{
        font-size: 0.8rem;
        margin: 0;
    }
`;

const CustomTitle = () => {

    return (
        <Wrapper>
            <Container>
                <h2>Kyojuro</h2>
                <p className="small-text">Rengoku</p>
                <p className="text">Kyojuro was greatly enthusiatic in regards to his duties as a Hashira, and often came across
                    as cheerfully eccentric.
                </p>
                <div style={{display: 'flex'}}>
                    <PowerItem>
                        <p className="item">8420</p>
                        <p className="item-text">PWR</p>
                    </PowerItem>
                    <PowerItem>
                        <p className="item">9210</p>
                        <p className="item-text">ATK</p>
                    </PowerItem>
                    <PowerItem>
                        <p className="item">7790</p>
                        <p className="item-text">DEF</p>
                    </PowerItem>
                </div>
            </Container>
            <ImageContainer>
                <img src="./Kyojuro_anime.png"/>
            </ImageContainer>
            <VideoContainer>
            <iframe width="420" height="415"
                src="https://streamable.com/e/2cmoar?autoplay=1&loop=0">
            </iframe>
        
            </VideoContainer>
        </Wrapper>
    );
}

export default CustomTitle;