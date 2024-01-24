import { render, screen } from '@testing-library/react';
import Post from '..';
import App from '../../../App';

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente Post corretamente', () => {
        const {debug} = render(<App />)
        expect(screen.getByTestId('post')).toBeInTheDocument();
        debug();
    });

    test('Deve inserir um novo post corretamente', () => {
        const {debug} = render(<Post children='Superman' imageUrl='https://www.estadao.com.br/resizer/7TnA2wcTd93EVzSjejM3q30fZRo=/936x0/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/estadao/2N3WTJYGEJD7JGY2GXUUGZ25PU.jpg'/>);
        expect(screen.getByText('Superman')).toBeInTheDocument();
        debug();
    });
});