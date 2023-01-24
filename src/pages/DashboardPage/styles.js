import styled from 'styled-components'

export const Container = styled.main``;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.CinzaEscuro};
`;

export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 33px;

    img {
        cursor: pointer;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 611px;
    width: 100%;
    gap: 12px;
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.015em;

    color: ${({ theme }) => theme.colors.CinzaText};
    width: 100%;
    margin-bottom: 20px;
`;

export const AddTask = styled.div`
    background-color: ${({ theme }) => theme.colors.CinzaEscuro};
    width: 201px;
    height: 54px;
    border: 0.3px solid #21212B;
    border-radius: 20px;
    display: flex;
    align-items: center;
    

    ${({ opened }) => {
        return  opened && 'text-decoration: underline';
    }};
`