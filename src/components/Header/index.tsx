import {Container, Content, ImageLogo} from './styles';
import groupSvg from '../../assets/icons/group.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <ImageLogo src={groupSvg} alt="stackX" />
                <button>
                    <img src='https://avatars.githubusercontent.com/u/98789206?v=4'/>
                </button>
            </Content>
        </Container>
    )
}