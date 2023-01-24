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

export const ContainerTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
    padding: 0 20%;
`;