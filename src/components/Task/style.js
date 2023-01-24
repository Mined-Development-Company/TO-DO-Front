import styled from 'styled-components'

export const ContainerTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #21212B;
    border-radius: 20px;
    width: 100%;
    height: 100%;
`;

export const CheckBoxWithTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const CheckBox = styled.input.attrs({
    type: 'checkbox'
})`

    appearance: none;
    ${({ importance }) => {
        switch(importance) {
            case 0: return 'border: 2.5px solid #972626';
            case 1: return 'border: 2.5px solid #EF7028';
            case 2: return 'border: 2.5px solid #194FD9';
        }
    }};
    /* border: 2.5px solid #972626; */
    border-radius: 6.5px;
    width: 17px;
    min-width: 17px;
    height: 17px;

    &:checked {
        background-color: #00600A;
        border-color: #00600A;
    }
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    height: auto;
    word-break: break-all;
`;

export const TrashButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 25px;
    min-width: 25px;
    height: 25px;
`;

