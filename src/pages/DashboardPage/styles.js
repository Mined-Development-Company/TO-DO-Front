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