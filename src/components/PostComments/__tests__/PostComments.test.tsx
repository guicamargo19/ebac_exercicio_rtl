import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois comentários no Post', () => {
        const { debug } = render(<PostComment />);

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Quero um'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Gostei muito'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        debug();
        expect(screen.getAllByTestId('comment')).toHaveLength(2);
      })
});